
import { useState } from "react";
import Recent from "./Recent";
import Users_Search from "./Users_Search";
import Profile_User from "./Profile_user";

const NewChat = () => {
  const [refrech,setrefrech]=useState(false);
  const [profile,SetProfile]=useState(null);
  const [Loading,SetLoding]=useState(false);

  const HandleProfile=(user)=>{
    SetProfile(user);
  }
  const handleRefrech=()=>{
    setrefrech(!refrech);
  }
  const HandleLoding=(e)=>{
    SetLoding(e)
  }


  return (
    <div
      className=" w-full flex-row flex bg-black justify-center mt-12"
      style={{ height: "calc(100vh - 48px )", boxSizing: "border-box" }} >
      <div className={` w-[30%] h-full overflow-y-auto pl-4 pt-4 border border-black border-r-gray-700`}>
        
      <Recent refrech={refrech} handleRefrech={handleRefrech} HandleProfile={HandleProfile}  HandleLoding={HandleLoding} />

      </div>


      <div className=" h-full w-[35%] min-w-[200px] border  p-5 border-black border-r-gray-700">
   
<Users_Search handleRefrech={handleRefrech} HandleProfile={HandleProfile}  HandleLoding={HandleLoding}/>
      </div>
      <div className=" h-full  w-[35%] min-w-[200px] text-white p-5">
        
      <Profile_User User={profile} loding={Loading}/>
      </div>
    </div>
  );
};
export default NewChat;
