import { useState } from "react";
import RegisterStepOne from "./Register_Step1";
import RegisterSteptwo from "./Register_Step2";

const Main_Register=()=>{
    const [Step,setStep]=useState(1);
    const [email,SetEmail]=useState("");

    //// chnage the nest step
    const hansleStep=()=>{
        setStep(prev=> prev.Step +1)
    }
    //// set the email
    const handelEmail=(email_)=>{
        SetEmail(email_);
    }
return (
    <>
       <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-purple-900 i justify-around items-center hidden">
          <img src="gif.gif" alt="backgroud" className="w-[60%] h-[60%]" />

          <div className="  absolute bottom-[30%] left-[80%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[60%] left-[30%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[20%] left-[10%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[5%] left-[70%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[80%] left-[70%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[70%] left-[10%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        
    {Step ==1 ?  <RegisterStepOne handelEmail={handelEmail} hansleStep={hansleStep} />:<RegisterSteptwo email={email}/>}
    </div>
    </div>
   
    </>
)
}
export default Main_Register;