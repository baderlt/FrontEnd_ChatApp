
import AvatarReactjs from "avatar-reactjs";
import { baseUrl, colors } from "../../touls";
import { useEffect, useState } from "react";
const RecentUsers=({refrech})=>{
  const [Users_Searched,setUsers_Searched]=useState([]);
  useEffect(()=>{
    let u=JSON.parse(localStorage.getItem("Users_Searched"));
 setUsers_Searched(u || [])
  },[refrech])

return <>
<h2 className="text-gray-300 text-xl">Recent</h2>
        <div className="  flex flex-row gap-2 overflow-x-auto p-2 h-28">

          {Users_Searched.length >= 1 ? Users_Searched.map((user)=>{
            return  <span className="w-20 text-white text-xs hover:bg-gray-700   border border-gray-600 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col">
            {Number.isInteger(Number(user.pic)) ? (
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
                    src={`${baseUrl}/users/${user.pic}`}
                    width={"50px"}
                    height={"50px"}
                  />
                )}
            <p className="pt-2 max-w-14 break-words">{user.name}</p>
            </div>
          </span>
          }) :""}
          {/* <span className="w-20 text-white text-xs hover:bg-gray-700   border border-gray-600 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col">
            <AvatarReactjs
              name={"user"}
              fontSize={"small"}
              backgroundColor={"red"}
              fontColor={"azure"}
              width={"40px"}
              height={"40px"}
            />
            <p className="pt-2 max-w-14 break-words">Bader</p>
            </div>
          </span>
          <span className="w-20 text-white text-xs hover:bg-gray-700   border border-gray-600 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col">
            <AvatarReactjs
              name={"user"}
              fontSize={"small"}
              backgroundColor={"white"}
              fontColor={"black"}
              width={"40px"}
              height={"40px"}
            />
            <p className="pt-2 max-w-14 break-words">Bader</p>
            </div>
          </span>
          <span className="w-20 text-white text-xs hover:bg-gray-700   border border-gray-600 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col">
            <AvatarReactjs
              name={"user"}
              fontSize={"small"}
              backgroundColor={"green"}
              fontColor={"azure"}
              width={"40px"}
              height={"40px"}
            />
            <p className="pt-2 max-w-14 break-words">Bader</p>
            </div>
          </span>
          <span className="w-20 text-white text-xs hover:bg-gray-700   border border-gray-600 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col">
            <AvatarReactjs
              name={"user"}
              fontSize={"small"}
              backgroundColor={"gray"}
              fontColor={"azure"}
              width={"40px"}
              height={"40px"}
            />
            <p className="pt-2 max-w-14 break-words">Bader</p>
            </div>
          </span>
          <span className="w-20 text-white text-xs hover:bg-gray-700   border border-gray-600 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col">
            <AvatarReactjs
              name={"user"}
              fontSize={"small"}
              backgroundColor={"blue"}
              fontColor={"azure"}
              width={"40px"}
              height={"40px"}
            />
            <p className="pt-2 max-w-14 break-words">Bader</p>
            </div>
          </span>
          <span className="w-20 text-white text-xs hover:bg-gray-700   border border-gray-600 rounded-lg content-center text-center items-center pt-2 pb-2">
            {" "}
            <div className="flex w-20  items-center flex-col">
            <AvatarReactjs
              name={"user"}
              fontSize={"small"}
              backgroundColor={"white"}
              fontColor={"black"}
              width={"40px"}
              height={"40px"}
            />
            <p className="pt-2 max-w-14 break-words">Bader</p>
            </div>
          </span> */}
       
        </div>
</>
}
export default RecentUsers;