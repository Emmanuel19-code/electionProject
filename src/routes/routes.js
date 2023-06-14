import { createBrowserRouter } from "react-router-dom";
import AuthenticationPage from "../Pages/AuthenticationPage";
import Layout from "../components/Layout";
import HomePage from "../Pages/HomePage";
import SubmittedBallot from "../Pages/SubmittedBallot";


const router = createBrowserRouter([
     {
        path:"/",
        element:<AuthenticationPage/>
     },
     {
       element:<Layout/>,
       children:[
         {
             path:"/ballotPage",
             element:<HomePage/>
         },
         {
            path:"/dashboard",
            element:<SubmittedBallot/>
         }
       ]
     }
])

export default router