import React, { useState } from 'react'

const RegisterComponent = ({chooseType}) => {
     const handleChange = (value) =>{
        chooseType(value)
     }
  return (
    <div className="border md:w-96 p-2">
           <div className="m-1 ">
                 <input type="text" placeholder="Name" 
                 className="w-full outline-none bg-slate-200 p-2"
                 />
            </div>
            <div className='m-2'>
                
                <div className="flex items-center">
                    <h3 className=''>Gender</h3>
                 <div className='ml-2'>
                    <input type="radio" name="gender" value="male"/>
                    <label>Male</label>
                 </div>
                 <div className='ml-2'>
                    <input type="radio" name="gender" value="female"/>
                    <label>Female</label>
                 </div>
            </div>
            </div>
            <div className="m-2">
                 <input type="text" placeholder="email" 
                 className="w-full outline-none bg-slate-200 p-2"
                 />
            </div>
            <div className="m-2">
                 <input type="text" placeholder="password" 
                 className="w-full outline-none bg-slate-200 p-2"
                 />
            </div>
            <div className="m-2">
                 <input type="text" placeholder="phone" 
                 className="w-full  outline-none bg-slate-200 p-2"
                 />
            </div>
            <div className="m-2 flex justify-between">
              <button className="bg-blue-400 px-2 font-bold text-white rounded"
              onClick={()=>handleChange("login")}
              >
                LOGIN
             </button>
              <button className="bg-blue-400 px-2 font-bold text-white rounded" 
              onClick={()=>handleChange("register")}
              >
                REGISTER
             </button>
           </div>
    </div>
  )
}

export default RegisterComponent