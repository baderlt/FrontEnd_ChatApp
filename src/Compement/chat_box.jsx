import AvatarReactjs from "avatar-reactjs";
import MoreIcon from "@mui/icons-material/MoreVert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../touls";
import axios from "axios";
import InputEmoji from "react-input-emoji";
import { Time_Date, getDayOrDate } from "./Touls_Date";
import { MessageSnded } from "./Chat";
import { useContext } from "react";
import { OnlinUserContext } from "../pages/Home";
import UseGetMessages from "../Houks/useGetMessages";
import Messages_Loding from "../Loding/Messages_Loding";
import Default_Page from "./Default_Chat_box_page";
import DarkMode from "./togle_dark";
import { colors } from "../touls";
import { CircularProgress } from "@mui/material";
import SendMessage from "./New_Chat/Promiss_N/SendMessage";
import CallUser from "./calluser";
export default function Chat_Box(props) {
  const [toggle, setToggle] = useState(false);
  const UserProfilePic = props.info_chat?.pic;


  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const [refreche, setrefrech] = useState(false);
  const All_messages_ =UseGetMessages(props.info_chat, refreche);
  const [message, setmessage] = useState();
  const [newMessage, SetNewMessage] = useState();
  const [Messages, SetMessages] = useState([]);
  const [FilterMessages, SetFilterMessages] = useState([]);
  const chatRef = useRef();
  const { onlineUser, Socket ,My_is_Socket,handleConnectionRef} = useContext(OnlinUserContext);
  const {handelMessageSended} = useContext(MessageSnded);
  const openedChat = useSelector((state) => state.alert.openEdChat);
 const [loading_Message_sent,SetLoding_m_sent]=useState(false);


  useEffect(() => {
    SetMessages(All_messages_);
    SetFilterMessages(All_messages_);
  }, [All_messages_]);


///// function for call user 
const callUser = () => {
  let user=onlineUser.filter((user)=>{return user.userId === props.info_chat?._id });
 
 if(user.length == 0){
  dispatch({
    type: "error",
    payload: { message: `${props.info_chat?.name} is not online ..!`, openError: true },
  });
  return false; 
}
 CallUser(user[0].socketId,Info_User.pic,My_is_Socket,Info_User.name,Socket,handleConnectionRef);
}

 ///// this for change the globale stats CHAT OPEN and close thw chat whrn the compoment didmout  
useEffect(()=>{
  dispatch({ type: "openEdChat", payload: props.info_chat });
  return ()=>{
    dispatch({ type: "CloseChat"});
  }
},[openedChat])

  ///////////////////////
  const searchMessage = (e) => {
    let value = e.target.value.toLowerCase();
    const searchMessage = Messages.filter((item) => {
      return (
        item.message.toLowerCase().indexOf(value) !== -1 ||
        getDayOrDate(item.createdAt).indexOf(value) !== -1
      );
    });
    SetFilterMessages(searchMessage);
  };
  /////////////////// Send Message
const sentNotification=(newMessage)=>{
    if (Socket === null) return;
    const recipientId = props.info_chat?._id;
    Socket.emit("sendMessage", { ...newMessage, recipientId });
    return;
  };

  ////////////////////recive Message
  useEffect(() => {
    if (Socket === null) return;
    Socket.on("getMessage", (res) => {
      if (props.info_chat?.id_Chat !== res.ChatId)      return;
   
    
        if (res) {
          SetMessages((prev) => {
            if(prev){
            return [...prev, res];
            }
          });
          
          SetFilterMessages((prev) => {
            if(prev){
            return [...prev, res];
            }
          });
        
      }
    });

    return () => {
      Socket.off("getMessage");
    };
  }, [Socket, props.info_chat]);

  useLayoutEffect(() => {
    scrolle_to_hight();
  }, [Messages]);

const scrolle_to_hight=()=>{
  if (chatRef.current)
  chatRef.current.scrollTop = chatRef.current.scrollHeight;
// chatRef.current?.scrollIntoView({behavior:'smooth'})
}

  const sendMessage = async () => {
    SetLoding_m_sent(true);
    const body = {
      ChatId: props.info_chat?.id_Chat,
      SenderId: Info_User._id,
      message: message,
    };
    //// prommise sendMessage f
   SendMessage(body,Info_User.token)
      .then((res) => {
        setmessage("");
        if (onlineUser.some((user) => user.userId != props?.info_chat?._id)) {
          setrefrech(!refreche);
        }
  
        SetLoding_m_sent(false);
        scrolle_to_hight();
        sentNotification(res.data);
        handelMessageSended();
      })
      .catch((er) => {
        SetLoding_m_sent(false);
        dispatch({
          type: "error",
          payload: { message: "Error server Try agin ..!", openError: true },
        });
      });
 
  };
  

  return (
    <>
      {props?.info_chat ? (
        <div
          className={`h-screen  main  mr-4  `}
          style={{ width: "100%", height: "100vh",backgroundImage:toggle ? "url('bg_chat3_dark.png')" : "url('bg_chat3.png')" }}>
          <div
            className={`${
              toggle ? "header_dark" : "bg-white"
            }  flex flex-row w-full h-12  shadow-xl border-b-gary-900 mr-4`}
          >
            <div
              className="flex basis-[15%]  md:basis-[10%] lg:basis-[6%] mt-1 ml-2 md:ml-4 lg:ml-6  mb-1"
              onClick={() => {
                dispatch({ type: "OpenDrawer", payload: props.info_chat });
              }}
            >
              {Number.isInteger(Number(props.info_chat?.pic)) ? (
                <AvatarReactjs
                  name={props.info_chat?.name ? props.info_chat?.name : "user"}
                  fontSize={"small"}
                  backgroundColor={
                    Number.isInteger(Number(props.info_chat?.pic))
                      ? colors[props.info_chat?.pic]
                      : "red"
                  }
                  fontColor={props.info_chat?.pic == 3 ? "black" : "azure"}
                  width={"35px"}
                  height={"35px"}
                />
              ) : (
                <AvatarReactjs
                  name={props.info_chat?.name ? props.info_chat?.name : "user"}
                  fontSize={"small"}
                  src={UserProfilePic}
                  width={"40px"}
                  height={"40px"}
                />
              )}
            </div>
            <div
              className={`basis-[45%] md:basis-[30%] lg:basis-[50%] mt-1 mb:mt-0  ${
                !toggle ? "text-gray-900" : "text-white"
              }`}
            >
              <div>
                <b>{props.info_chat.name}</b>
              </div>
              <div>
                <p className="text-green-600" style={{ fontSize: 10 }}>
                  {onlineUser ? onlineUser.some(
                    (user) => user.userId === props?.info_chat?._id
                  ) ? (
                    <b>Onling</b>
                  ) : (
                    ""
                  ):null}
                </p>
              </div>
            </div>
            <div className="flex flex-row  basis-[10%] md:basis-[50%] lg:basis-[30%] ">
              <div className="flex-initial w-full r-1 pt-2  mr-2 ">
                <div className="inline-flex w-full pl-6 pr-0 ">
                  <span className="inline-flex  items-center px-3  hover:bg-purple-200 text-sm text-gray-900 bg-white border border-r-0 border-gray-300 rounded-l-md dark:bg-white dark:text-gray-700 dark:border-gray-600">
                    <i className="">
                      <FontAwesomeIcon icon={faSearch} />
                    </i>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-r-md bg-white   border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-0 md:w-full lg:w-full text-sm border-gray-300 p-1  dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Find a message ..."
                    onChange={(e) => {
                      searchMessage(e);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className=" basis-[10%] md:basis-[5%] lg:basis-[4%]   hover:bg-purple-200 text-center mt-1.5 pt-1.5 mb-1 pb-1.5 rounded-md  cursor-pointer  " onClick={callUser}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <button className="basis-[10%] md:basis-[5%] lg:basis-[4%]    hover:bg-purple-200 text-center mt-1.5 pt-1.5 mb-1 pb-1.5 rounded-md mr-6 ">
              <MoreIcon />
            </button>
            <DarkMode toggle={() => setToggle(!toggle)} />
          </div>
          <div
            className="flex flex-col w-full flex-auto  mb-0"
            style={{ height: "calc(100% - 100px)" }}
          >
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-b-lg  h-full pr-4 pl-4">
              <div
                className="flex flex-col h-full  mb-2 overflow-y-auto overflow-x-hidden   "
                ref={chatRef}
              >
                <div className="flex flex-col h-full    ">
  
                  <div className="grid grid-cols-12 gap-y-2  ">
                  {FilterMessages && FilterMessages.length >= 1 ? (
                      FilterMessages.map((item, index) => (
                        // {return   item.SenderId != Info_User._id ?
                        <div
                          key={index}
                          className={
                            item.SenderId != Info_User._id
                              ? " col-start-1 col-end-11 p-0 rounded-lg  "
                              : "col-start-3 col-end-13 p-0 rounded-lg "
                          }
                        >
                          <div
                            className={`${
                              getDayOrDate(
                                FilterMessages[index - 1]?.createdAt
                              ) == getDayOrDate(item.createdAt)
                                ? "hidden"
                                : ""
                            }  ${
                              item.SenderId != Info_User._id
                                ? "text-right"
                                : "  w-[100%]"
                            }  `}
                          >
                            <div
                              className={`${
                                toggle
                                  ? " bg-gray-900 text-gray-200"
                                  : " bg-gray-200 text-gray-700"
                              } rounded-lg w-48 text-center ${
                                item.SenderId != Info_User._id
                                  ? "ml-[50%]"
                                  : " ml-[30%]"
                              } mb-1.5 `}
                            >
                              {" "}
                              {getDayOrDate(item.createdAt)}
                            </div>
                          </div>
                          <div
                            className={
                              item.SenderId != Info_User._id
                                ? "flex flex-row items-center"
                                : "flex items-center justify-start flex-row-reverse "
                            }
                          >
                            {item.SenderId != Info_User._id ? (
                              <div
                                className={`${
                                  FilterMessages[index - 1]?.SenderId !==
                                    item.SenderId ||
                                  getDayOrDate(
                                    FilterMessages[index - 1]?.createdAt
                                  ) != getDayOrDate(item.createdAt)
                                    ? "flex items-center justify-center   flex-shrink-0 "
                                    : ` invisible `
                                } `}
                              >
                                {Number.isInteger(
                                  Number(props.info_chat?.pic)
                                ) ? (
                                  <AvatarReactjs
                                    name={
                                      props.info_chat?.name
                                        ? props.info_chat?.name
                                        : "user"
                                    }
                                    fontSize={"small"}
                                    backgroundColor={
                                      Number.isInteger(
                                        Number(props.info_chat?.pic)
                                      )
                                        ? colors[props.info_chat?.pic]
                                        : "red"
                                    }
                                    fontColor={
                                      props.info_chat?.pic == 3
                                        ? "black"
                                        : "azure"
                                    }
                                    width={"35px"}
                                    height={"35px"}
                                  />
                                ) : (
                                  <AvatarReactjs
                                    name={
                                      props.info_chat?.name
                                        ? props.info_chat?.name
                                        : "user"
                                    }
                                    fontSize={"small"}
                                    src={UserProfilePic}
                                    width={"35px"}
                                    height={"35px"}
                                  />
                                )}
                              </div>
                            ) : (
                              ""
                            )}

                            <div
                              className={
                                item.SenderId != Info_User._id
                                  ? ` ml-2 text-sm ${toggle ? "left-dark" :"bg-white"} shadow rounded-lg`
                                  : ` mr-3 flex flex-row text-sm ${toggle ? "right-dark" :"bg-indigo-100"}    shadow rounded-lg`
                              }
                              style={{wordBreak:"break-all"}}
                            
                            >
                              <div className=" py-0.5  px-4 pl-2 ">
                                <p
                                  className={` "pb-1 font-mono pr-6  text-base/6 "`}
                                >
                                  {item.message}
                                </p>
                                <div
                                  className={ `${toggle ? 'text-white': 'text-gray-500'}  text-right  ${
                                    FilterMessages[index + 1]?.SenderId !=
                                      item.SenderId ||
                                    (getDayOrDate(
                                      FilterMessages[index + 1]?.createdAt
                                    ) != getDayOrDate(item.createdAt) &&
                                      FilterMessages[index + 1]?.SenderId ==
                                        item.SenderId)
                                      ? " pb-4"
                                      : "hidden"
                                  }`}
                                  style={{
                                    fontSize: 9,
                                    height: "3px",
                                  }}
                                >
                                  <p className="basis-full pt-0.5   text-right">
                                    {Time_Date(item.createdAt)} am
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : FilterMessages && FilterMessages?.length == 0 ? (
                      <div className={`flex justify-center items-center flex-col ${toggle ? 'text-white' :'text-black' } ml-[550%] mt-[250%] w-full`}>
                        <img src="logo_.png"  alt="" />
                        <h3 className="w-[400px] text-center">  Send the first message to <b>{props.info_chat?.name}</b></h3>
                    
                      </div>
                    ) : (
                      <Messages_Loding/>
                    )}

                  </div>
                </div>
              </div>
              <div
                className={` ${
                  toggle ? "footer-dark" : " bg-white "
                } flex flex-row items-center min-h-16 max-h-28 rounded-xl  px-4 `}
                style={{wordBreak:"break-all"}}
              >
                <div>
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <InputEmoji
                  value={message}
                  onChange={setmessage}
                  onKeyDown={(e) => {
                    e.key == "Enter" && e.target.innerHTML != ""
                      ? sendMessage()
                      : "";
                  }}
            
                  fontFamily="nonito"
                  borderColor="gray"
                  borderRadius={15}
                />
                <div className="ml-4">
                  <button
                    onClick={() => {
                      sendMessage();
                    }}
                    className={`flex items-center justify-center ${
                      message != ""
                        ? "bg-indigo-500 hover:bg-indigo-600"
                        : "bg-gray-300 "
                    } rounded-xl w-28 text-black px-2 py-1 flex-shrink-0`}
                    disabled={message == ""  ? true : false}
                  >
                    {loading_Message_sent ? <CircularProgress size='30px'/> :<span className="flex items-center justify-center">
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                    </span>
}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Default_Page />
      )}
    </>
  );
}
