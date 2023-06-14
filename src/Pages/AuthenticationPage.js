import { useState } from "react"
import LoginComponent from "../components/LoginComponent"
import RegisterComponent from "../components/RegisterComponent"

const AuthenticationPage = () => {
    const [authType,setAuthType] = useState("register")
    const chooseType =(value) =>{
       setAuthType(value)
       setAuthType("")
    }
    const Layout = () =>{
        if(authType === "login"){
            return <LoginComponent
              chooseType={chooseType}
            />
        }else{
            return <RegisterComponent
             chooseType={chooseType}
            />
        }
    }
  return (
    <div className="flex items-center justify-center mt-10 ">
       {<Layout/>}
    </div>
  )
}

export default AuthenticationPage