import { Link } from "react-router-dom"
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"


export const Signin = () => {
    return (
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
           <Link to={'/'}>
               <div className="flex justify-between text-2xl pl-8 px-1 py-6">
                  Echoes
               </div >
           </Link>
          <Auth type="signin" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>  
    </div>
    )
  }