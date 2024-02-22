
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


      <div className=" h-full w-[35%] min-w-[200px] overflow-y-auto border  p-5 border-black border-r-gray-700">
      <h2 className="text-xl text-gray-300 flex flex-row gap-2 mb-2 mt-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>Search</h2>
<Users_Search handleRefrech={handleRefrech} HandleProfile={HandleProfile}  HandleLoding={HandleLoding}/>
      </div>
      <div className=" h-full  w-[35%] min-w-[200px] text-white p-5">
        
      <Profile_User User={profile} loding={Loading}/>
      </div>
    </div>
  );
};
export default NewChat;
