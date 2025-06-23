# 📝 BlogPoint

Live Demo
Check out the live version here: https://blogpoint-sand.vercel.app/signin

**BlogPoint** is a full-stack blogging platform where users can create, read, update, and delete blog posts. Built using the **MERN**-like architecture but with **PostgreSQL** as the database, it offers a clean UI and robust backend logic.

---

## 🚀 Features

- ✍️ Create and edit rich blog posts
- 🔐 User authentication and session handling
- 🗃️ MongoDB-based post storage
- 🧾 Responsive UI built with React
- 🔍 View all blog posts
- 🛠️ Clean code structure for scalability

---

## 🧰 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React.js             |
| Backend      | Node.js, Express.js  |
| Database     | Postgres   |
| Auth         | JWT-based Login/Auth |
| Deployment   | Cloudflare / Vercel



## 🛠️ Installation and Setup

### Prerequisites

- Node.js and npm installed
- MongoDB (local or cloud)

### Clone the Repository

```bash
git clone https://github.com/mohddanish355/blogpoint.git
cd blogpoint

Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file in /backend with:
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:
npm start

Frontend Setup
cd ../frontend
npm install
npm run dev
cd ../frontend

Author
Mohd Danish
GitHub: @mohddanish355
