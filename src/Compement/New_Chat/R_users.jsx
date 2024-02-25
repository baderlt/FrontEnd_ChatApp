
import AvatarReactjs from "avatar-reactjs";
import { baseUrl, colors } from "../../touls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const RecentUsers=({refrech,handleRefrech,HandleLoding,HandleProfile})=>{
  const [Users_Searched,setUsers_Searched]=useState([]);
  let [removed,setremoved]=useState(false);
  const Info_User = useSelector((state) => state.Auth_check.user_Info);

  useEffect(()=>{
    let u=JSON.parse(localStorage.getItem("Users_Searched"));
 setUsers_Searched(u || [])
  },[refrech,removed])


  /////// this function for remove  user serched 
  const removeItem=(index)=>{
    ////// remove teh item by index 
    Users_Searched[Info_User.name].splice(index,1);
      ///// update the list in localstorage 
      localStorage.setItem('Users_Searched',JSON.stringify({...Users_Searched}));
      setremoved(!removed);
    }

    const Get_Profile=async(user)=>{
      HandleLoding(true);
      const Has_Chat= await axios.get(`${baseUrl}/Chats/find/${user._id}/${Info_User._id}`,{headers:{Authorization:`bearer ${Info_User.token}` }});
      if(Has_Chat.data.length == 1){
       user={...user,frende:true}
      }
       handleRefrech(); 
       HandleProfile(user);
       HandleLoding(false);
    }
return <>

        <div className="  flex flex-row gap-2 overflow-x-auto  p-2 h-28">

          { Users_Searched[Info_User.name] && Users_Searched[Info_User.name].length >= 1 ? Users_Searched[Info_User.name].map((user,index)=>{
            return  <span key={index} className="w-20 text-white text-xs hover:bg-gray-800   border border-gray-800 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col relative" >
              <button className="absolute  right-0 -top-2 bg-red-400 text-black hover:bg-red-600 rounded-full" onClick={()=>removeItem(index)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></button>
<button onClick={()=>{Get_Profile(user)}}>            {Number.isInteger(Number(user.pic)) ? (
                  <AvatarReactjs
                    name={user.name ? user.name : "user"}
                    fontSize={"large"}
                    backgroundColor={
                      Number.isInteger(Number(user.pic))
                        ? colors[user.pic]
                        : "red"
                    }
                    fontColor={user.pic == 3 ? "black" : "azure"}
                    width={"50px"}
                    height={"50px"}
                  />
                ) : (
                  <AvatarReactjs
                    name={user.name ? user.name : "user"}
                    fontSize={"large"}
                    src={user.pic}
                    width={"50px"}
                    height={"50px"}
                  />
                )}
                     </button>
            <p className="pt-2 max-w-14 break-words">{user.name}</p>
            </div>
          </span>
          }) :""}
     

       
       
        </div>
</>
}
export default RecentUsers;