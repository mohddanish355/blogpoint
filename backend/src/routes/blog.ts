import { createBlogInput, updateBlogInput } from "@danish211/common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>()

blogRouter.use('/*', async (c, next) => {
    const userHeader = c.req.header("authorization") || "";

    try {
        const user = await verify(userHeader, c.env.JWT_SECRET);

        if (user) {

            c.set("userId", user.id as string);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in!"
            })
        }
    } catch (e) {
        c.status(403);
        console.log(e);
        return c.json({
            message: "You are not logged in err!"
        })
    }


})

blogRouter.post('/', async (c) => {

    const body = await c.req.json();

    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const authorId = c.get("userId")

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            content: body.content,
            title: body.title,
            authorId: Number(authorId)
        }
    })

    return c.json({
        id: blog.id,
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },

            data: {
                content: body.content,
                title: body.title
            }
        })

        return c.json({
            id: blog.id,
        })
    } catch (e) {
        console.log(e);
        return c.json({
            msg: "Putting Error!"
        })
    }
})

blogRouter.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.blog.findMany();

        return c.json({
            blogs
        })
    } catch (e) {
        console.log(e);
        return c.json({
            msg: "Error!"
        })
    }
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            }
        })

        return c.json({
            blog
        });
    } catch (e) {
        c.status(411);
        return c.json({
            msg: "Error while fetching blog!"
        })
    }

})

