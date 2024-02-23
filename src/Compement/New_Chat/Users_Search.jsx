import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AvatarReactjs from "avatar-reactjs";
import { baseUrl, colors } from "../../touls";
import axios from "axios";
import Loding_Chat from "../loading_chat";
const Users_Search = ({handleRefrech,HandleProfile,HandleLoding}) => {
  let us=useSelector((state)=>state.alert.Users);
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const [users,setUsers]=useState(null);
  const [Filter_Users, SetFilterUsers] = useState(null);
  const search_Value = useRef();
  const [curent_User,SetCurentUser]=useState(null);

///// hndael the users from global stats
useEffect(()=>{
setUsers(us);
SetFilterUsers(us);
},[us])


//////// this function for add the item serched in list serched in localstroage 
  const Search = () => {
    const Serched = JSON.parse(localStorage.getItem("searched")) || [];
    if (search_Value.current.value != "") {
      if(!Serched[Info_User.name])Serched[Info_User.name]=[];
      Serched[Info_User.name].unshift(search_Value.current.value)
      localStorage.setItem(
        "searched",
        JSON.stringify({...Serched})
      );
        if (Serched[Info_User.name].length >= 10) Serched[Info_User.name].pop();
      
      handleRefrech();
  
    }
    let value = search_Value.current.value.toLowerCase();
    const Data_Filtred = users.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    SetFilterUsers(Data_Filtred);
  };


  const Get_Profile= async (user)=>{
    HandleLoding(true);
    ///// get the object of list users serched like {"bader":[{"_id":233332,"name":'dhdjd;},{"_id":"6784","name":'fff'}]}
    const Users_Searched = JSON.parse(localStorage.getItem("Users_Searched")) || [];
    ///// if the the user authentifed dont have list ibject serched in localstorage 
     if(!Users_Searched[Info_User.name]) Users_Searched[Info_User.name]=[];
     /////// this for remove  the curent user clicked if alredy in list of object clicked   
      let Users_Filtred=Users_Searched[Info_User.name].filter((item)=>item._id != user._id);
      ///////////// use unshift for add the user serched in the first 
      Users_Filtred.unshift(user)
      // initialiser the new list of users filtred.
      Users_Searched[Info_User.name]=Users_Filtred;
      localStorage.setItem(
        "Users_Searched",
        JSON.stringify({...Users_Searched})
      );
      /// if the list of users serched >  10 remove one . the max users stocked is 10 
      if (Users_Searched[Info_User.name].length >= 10) Users_Searched.pop();
      SetCurentUser(user._id);
      /// this requst for test if the user alerdy have a chat with user serched 
     const Has_Chat= await axios.get(`${baseUrl}/Chats/find/${user._id}/${Info_User._id}`,{headers:{Authorization:`bearer ${Info_User.token}` }});
     if(Has_Chat.data.length == 1){
      user={...user,frende:true}
     }
  
   
      handleRefrech(); 
      HandleProfile(user);
      HandleLoding(false);
}
  return (
    <>
    
      <div class="flex items-center w-full justify-center  text-white">
        
        <div class="rounded-lg  w-full mb-2 ">
          <div class="flex w-full">
            <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-gray-700 p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="pointer-events-none absolute w-5 fill-gray-300 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              class="w-full  bg-gray-700 pl-2 text-base font-semibold outline-0 "
              onKeyDown={(e) => {
                e.key == "Enter" && Search();
              }}
              ref={search_Value}
              placeholder=""
              id=""
            />
            <input
              type="button"
              value="Search"
              class="bg-blue-800 w-40 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              onClick={Search}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full  gap-2">
        {Filter_Users && Filter_Users.length >= 1 ? (
          Filter_Users.map((item, index) => {
            return (
              <div
                key={index}
                className={`text-white rounded-lg p-2  hover:bg-gray-900 ${curent_User == item._id ? "bg-gray-900":""} flex flex-row gap-3  h-16 w-full`} onClick={()=>{Get_Profile(item)}}
            >
                {Number.isInteger(Number(item.pic)) ? (
                  <AvatarReactjs
                    name={item.name ? item.name : "user"}
                    fontSize={"large"}
                    backgroundColor={
                      Number.isInteger(Number(item.pic))
                        ? colors[item.pic]
                        : "red"
                    }
                    fontColor={item.pic == 3 ? "black" : "azure"}
                    width={"50px"}
                    height={"50px"}
                  />
                ) : (
                  <AvatarReactjs
                    name={item.name ? item.name : "user"}
                    fontSize={"large"}
                    src={item.pic}
                    width={"50px"}
                    height={"50px"}
                  />
                )}
                <div>
                  <h2>{item.name}</h2>
                  <p className="text-gray-400">
                    {item.bio && item.bio != "undefined"
                      ? item.bio
                      : `Hi I'm ${item.name}`}
                  </p>
                </div>
              </div>
            );
          })
        ) :  !Filter_Users ? <Loding_Chat/> : 
          <div className="text-gray-300 flex items-center justify-center mt-4">
            No results found for "{search_Value.current?.value}"
          </div>
        }
      </div>
    </>
  );
};
export default Users_Search;
