import axios from "axios";
import React, { Suspense,createContext, useContext, useEffect, useState,} from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarReactjs from "avatar-reactjs";
import MoreIcon from "@mui/icons-material/MoreVert";
import {  faPaperPlane,faSearch,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseUrl } from "../touls";
import { OnlinUserContext } from "../pages/Home";
import moment from "moment";
import Loding_Chat from "../Loding/loading_chat";
import Loading_App from "../Loding/Loading_App";
import Chat_Box from "./chat_box";
import { colors } from "../touls";
import { NavLink } from "react-router-dom";
import Default_Page from "./Default_Chat_box_page";
export const MessageSnded = createContext(null);

export default function Chats() {

  const Info_User=useSelector((state) => state.Auth_check.user_Info);
  const [chat_Data, setchat_Data] = useState();
  const [filter_chat, setfilter_chat] = useState();
  const [selected_item, setSelected_item] = useState();
  const [chat_box, setchat_box] = useState('');
  const [loadingChat, SetLoadingChat] = useState(false);
  const { onlineUser, notifications, updateNotification }=useContext(OnlinUserContext);

  const [send, SetSende] = useState(true);

  const handelMessageSended= () => {
    SetSende(!send);
    return true ;
  };

  const nbr_Notifications = (senderId) => {
    let count = 0;
    notifications.map((item) => {
      if (item.senderId == senderId && item.isRead === false) {
        count++;
      }
    });

    if (count >= 1) {
      return count;
    } else {
      return false;
    }
  };
  ////////////////////////////
  const dispatch = useDispatch();

  const date_OF_lAST_Message = (SenderId) => {
    const user_notification = notifications.filter(
      (notf) => notf.senderId === SenderId
    );

    if (user_notification.length < 1) return false;
    const MAX_date = user_notification.reduce((max, obj) => {
      return new Date(obj.date) > new Date(max.date) ? obj : max;
    }, user_notification[0]);
    return MAX_date.date;
  };

  ///////////////// Filter Notification
  const Filter_Notification = (senderId) => {
    if (notifications.length >= 1) {
      const filter_Notification = notifications.filter(
        (item) => item.senderId !== senderId
      );
      updateNotification(filter_Notification);
      axios.delete(`${baseUrl}/notifications/${senderId}/${Info_User._id}`, {
        headers: { Authorization: `Bearer ${Info_User.token}` },
      });
      SetSende(!send);
    } else {
      return;
    }
  };

  ////////////////////////////////////////////////////

  const Count_Messages = (senderId) => {
    // let count=0;
    const user_notification = notifications.filter(
      (item) => item.senderId == senderId && item.isRead === false
    );
    if (user_notification.length > 0) {
      const MAX_date = user_notification.reduce((max, obj) => {
        return new Date(obj.date) > new Date(max.date) ? obj : max;
      }, user_notification[0]);
      return MAX_date.message;
    } else {
      return false;
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  const getChates = async () => {
    await axios
      .get(`${baseUrl}/chats/${Info_User._id}`, {
        headers: { Authorization: `Bearer ${Info_User.token}` },
      })
      .then((res) => {
        Trichat(res.data);
        SetLoadingChat(true);
      })
      .catch((err) => console.log(err));
  };
  ///////////////////////////////////////////////////////////////////////////////////
  const Trichat = async (chats) => {
    let all_chats = [];
    if (chats.length < 1) return;
    for (let i = 0; i < chats.length; i++) {
      let idSender = chats[i].chat?.members.find((id) => id != Info_User._id);
      let user_info = await axios.get(`${baseUrl}/users/find/${idSender}`, {
        headers: { Authorization: `Bearer ${Info_User.token}` },
      });
      all_chats.push({
        ...user_info.data,
        id_Chat: chats[i].chat?._id,
        created_chat: chats[i].chat?.createdAt,
        last_message: chats[i]?.lastMessage,
      });
    }

    all_chats.sort((a, b) => {
      const dateA = new Date(a.last_message?.createdAt);
      const dateB = new Date(b.last_message?.createdAt);
      return dateB - dateA;
    });

    setfilter_chat(all_chats);
    setchat_Data(all_chats);
 
  };


  ///////////////////////////////// fo filter the chat
  const filter = (e) => {
    let value = e.target.value.toLowerCase();
    let filter_Name = chat_Data.filter((item) => {
      return item.name.toLowerCase().indexOf(value) !== -1;
    });
    setfilter_chat(filter_Name);
  };

  async function chat_box_info(item) {
    setSelected_item(item.name);
    setchat_box({open:true,item:item});
  dispatch({ type: "openEdChat", payload: item });
  }

  /////////////////////////////////// for the length of the last message send showed in chat div
  const Edit_message_length = (message) => {
    if (message.length > 32) {
      let message_ = message.slice(0, 37);
      return message_ + "...";
    } else {
      return message;
    }
  };

  ///////////////////////// for get all the chat .
  useEffect(() => {
    getChates();
  }, [send, notifications]);

 
  return (
    <main
      className=" flex flex-row  h-screen   "
      style={{ overflow: "hidden" }}
    >
      <div className=" flex flex-col bg-black h-screen   basis-[30%]       border-solid   shadow-2xl ">
        <div className="flex flex-row pt-2 mt-12 ">
          <div className="flex-initial  w-48 h-10  ">
            <h5 className="text-xl text-white pl-2">
              <b> Chats</b>
            </h5>
          </div>
          <div className="flex-initial w-full   mr-2">
            <div className="inline-flex w-full pl-6 pr-0">
              <span className="inline-flex  items-center px-3  text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <i className="">
                  <FontAwesomeIcon icon={faSearch} />
                </i>
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Find a chat ..."
                onChange={(e) => {
                  filter(e);
                }}
              ></input>
            </div>
          </div>
          <div className="flex-auto  w-5 h-10 ">
            <b className=" inline-flex text-white pt-1 ">
              <MoreIcon />
            </b>
          </div>
        </div>
        <hr />
        <div className="overflow-y-auto">

        {loadingChat ? (
         filter_chat?.length > 0 ? (
          filter_chat.map((item, index) => {
            return (
              <div className="pl-2 pr-2 " key={index}>     
                 <div
                  className={`p-2 flex flex-nowrap hover:bg-gray-700  border-b-2 mt-1  ${
                    item.name == selected_item
                    ? "bg-gray-700"
                    : "border-gray-600/50"
                  }   w-full`}
                  onClick={() => {
                    chat_box_info(item);
                    Filter_Notification(item._id);
                  }}
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

                  {onlineUser &&
                  onlineUser.some((user) => user.userId === item._id) ? (
                    <div
                      className="rounded-full animate-pulse   w-3 h-2.5 bg-green-600"
                      style={{
                        position: "relative",
                        right: "2%",
                        bottom: "1%",
                      }}
                    ></div>
                  ) : (
                    <div
                      className="rounded-full  w-3 h-2.5 "
                      style={{
                        position: "relative",
                        right: "2%",
                        bottom: "1%",
                      }}
                    ></div>
                  )}
                  <div className=" w-full">
                    <span className="flex flex-row " style={{ width: "100%" }}>
                      <h2 className=" text-white pl-0 col-span-4 basis-1/2 ">
     
                        &ensp;{item.name}
                      </h2>
                      <p className="text-white  text-xs basis-1/2 text-right ">
                      
                        {date_OF_lAST_Message(item._id)
                          ? moment(
                              date_OF_lAST_Message(item._id || item.SendAt)
                            ).calendar()
                          : moment(item.last_message?.createdAt).calendar()}
                      </p>
                    </span>
                    <span className=" flex flex-row">
                      <p
                        className={`${
                          Count_Messages(item._id)
                            ? "text-white"
                            : " text-gray-300"
                        } pl-2 col-span-4  w-full  `}
                        style={{ width: "100%" }}
                      >
                        {Edit_message_length(
                          Count_Messages(item._id)
                            ? Count_Messages(item._id)
                            : item.last_message
                            ? `${
                                item.last_message?.SenderId === item._id
                                  ? ""
                                  : "You :"
                              } ${item.last_message?.message}`
                            : "Send the first Message... "
                        )}
                      </p>

                      {nbr_Notifications(item._id) ? (
                        <span
                          className="text-white pl-2 pr-2 h-6  rounded-full   bg-green-600 text-center"
                          style={{ fontSize: 14 }}
                        >
                          {nbr_Notifications(item._id)}
                        </span>
                      ) : (
                        <span
                          className={`text-white text-xm pl-4 ${
                            item.last_message?.SenderId === item._id
                              ? "hidden"
                              : ""
                          }`}
                        >
                          <FontAwesomeIcon color="green" icon={faPaperPlane} />
                        </span>
                      )}
                    </span>
                  </div>
                </div>
                {/* <hr className="text-black  pl-10"></hr> */}
              </div>
            );
          })
        ) :(
          <div className="text-white text-center  mt-[10%]">
            <h1>
              <br />
              <br />
              No chat found ,create your first chat...!{" "}
            </h1>{" "}
            <button className="bg-blue-600 hover:bg-blue-400 rounded-lg w-40 h-10 mt-10 text-center " >

          <NavLink  to={'/home/NewChat'} >
                      
            Create Chat
                              </NavLink>
            </button>
          
          </div>
        ) ):    <Loding_Chat/> } 
   
      </div>
     </div>
      <div className="h-screen col-span-2 basis-[70%]  grid mt-12 text-black">
        {chat_box?.open ? 
        <MessageSnded.Provider value={{handelMessageSended}}>
        <Suspense fallback={<Loading_App />}>
       <Chat_Box info_chat={chat_box.item} />
       </Suspense>
        </MessageSnded.Provider>:<Default_Page/>}
      </div>
    </main>
  );
}
