import { useState } from "react";
import RegisterStepOne from "./Register_Step1";
import RegisterSteptwo from "./Register_Step2";
import Left_Side_Auth from "../left_Side_Auth";

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
<Left_Side_Auth>
        
    {Step ==1 ?  <RegisterStepOne handelEmail={handelEmail} hansleStep={hansleStep} />:<RegisterSteptwo email={email}/>}

</Left_Side_Auth>

   
    </>
)
}
export default Main_Register;