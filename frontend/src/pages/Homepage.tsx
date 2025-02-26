import { Link } from "react-router-dom"
import { Homeheader } from "../components/Homeheader"


export const Homepage = () => {
  return (
    <div>
      <HomeBar />
      <Homeheader />
    </div>
  )
}


const HomeBar = () => {
  return (
    <div className="border flex justify-between text-2xl pl-8 px-1 py-6">
    
        Echoes
      
      <div>
        <Link to={'/signup'}>
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signup</button>
        </Link>
        <Link to={'/signin'}>
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signin</button>
        </Link>
        
      </div>
    </div>
  )
}
