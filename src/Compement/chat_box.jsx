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
import { useNavigate } from "react-router-dom";
import UseGetMessages from "../useGetMessages";
import Messages_Loding from "./Messages_Loding";
export default function Chat_Box(props) {
  const colors = [null, "green", "blue", "white", "black", "red"];
  const UserProfilePic = `${baseUrl}/users/${props.info_chat?.pic}`;
  let messages_loading = true;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const [refreche, setrefrech] = useState(false);
  const All_messages_ = UseGetMessages(props.info_chat, refreche);
  const [message, setmessage] = useState();
  const [newMessage, SetNewMessage] = useState();
  const [Messages, SetMessages] = useState();
  const [FilterMessages, SetFilterMessages] = useState();
  const chatRef = useRef();
  const { onlineUser, Socket } = useContext(OnlinUserContext);
  const { handelMessageSended } = useContext(MessageSnded);

  useEffect(() => {
    SetMessages(All_messages_);
    SetFilterMessages(All_messages_);
    // messages_loading=!messages_loading;
  }, [All_messages_]);

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
  useEffect(() => {
    if (Socket === null) return;
    const recipientId = props.info_chat?._id;
    Socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [newMessage]);

  ////////////////////recive Message
  useEffect(() => {
    if (Socket === null) return;
    Socket.on("getMessage", (res) => {
      if (props.info_chat?.id_Chat !== res.ChatId) return;
      SetMessages((prev) => [...prev, res]);
      SetFilterMessages((prev) => [...prev, res]);
    });

    return () => {
      Socket.off("getMessage");
    };
  }, [Socket, props.info_chat]);

  useLayoutEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    // chatRef.current?.scrollIntoView({behavior:'smooth'})
  }, [Messages, newMessage]);

  const sendMessage = async () => {
    const body = {
      ChatId: props.info_chat?.id_Chat,
      SenderId: Info_User._id,
      message: message,
    };
    await axios
      .post(
        `${baseUrl}/messages/`,
        { body },
        {
          headers: { Authorization: `Bearer ${Info_User.token}` },
        }
      )
      .then((res) => {
        setmessage("");
        if (onlineUser.some((user) => user.userId != props?.info_chat?._id)) {
          setrefrech(!refreche);
        }
        SetNewMessage(res.data), handelMessageSended();
      })
      .catch(() => {
        navigate("/login");
        window.location.reload();
        dispatch({
          type: "error",
          payload: { message: "Unauthorized", openError: true },
        });
      });
  };

  function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.substring(1);
  }

  return (
    <>
      {props?.info_chat ? (
        <div className="custom ">
          <div className=" flex flex-row   h-12 w-full top-12 bg-white shadow-x border-b-gray-200 border-2 mr-4">
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
            <div className="  basis-[45%] md:basis-[30%] lg:basis-[50%] mt-1 mb:mt-0   text-gray-900">
              <div>
                <b>{capitalizeFirstLetter(props.info_chat.name)}</b>
              </div>
              <div>
                <p className="text-green-600" style={{ fontSize: 10 }}>
                  {" "}
                  {onlineUser.some(
                    (user) => user.userId === props?.info_chat?._id
                  ) ? (
                    <b>Onling</b>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-row  basis-[10%] md:basis-[50%] lg:basis-[30%] ">
              <div className="flex-initial w-full r-1 pt-2  mr-2 ">
                <div className="inline-flex w-full pl-6 pr-0 bg-white">
                  <span class="inline-flex  items-center px-3  hover:bg-purple-200 text-sm text-gray-900 bg-white border border-r-0 border-gray-300 rounded-l-md dark:bg-white dark:text-gray-700 dark:border-gray-600">
                    <i className="">
                      <FontAwesomeIcon icon={faSearch} />
                    </i>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none rounded-r-md bg-white   border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-0 md:w-full lg:w-full text-sm border-gray-300 p-1  dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Find a message ..."
                    onChange={(e) => {
                      searchMessage(e);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className=" basis-[10%] md:basis-[5%] lg:basis-[4%]   hover:bg-purple-200 text-center mt-1.5 pt-1.5 mb-1 pb-1.5 rounded-md  ">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <button className="basis-[10%] md:basis-[5%] lg:basis-[4%]    hover:bg-purple-200 text-center mt-1.5 pt-1.5 mb-1 pb-1.5 rounded-md mr-6 ">
              <MoreIcon />
            </button>
          </div>

          <div
            class="bg-[url('bg_chat3.png')]  mb-28  px-4  grid grid-cols-12 gap-y-2 overflow-y-auto  w-full "
            ref={chatRef}
          >
          <div className="ml-[565%]  w-full  flex flex-col mt-2">    {Number.isInteger(Number(props.info_chat?.pic)) ? (
                <AvatarReactjs
                  name={props.info_chat?.name ? props.info_chat?.name : "user"}
                  fontSize={"small"}
                  backgroundColor={
                    Number.isInteger(Number(props.info_chat?.pic))
                      ? colors[props.info_chat?.pic]
                      : "red"
                  }
                  fontColor={props.info_chat?.pic == 3 ? "black" : "azure"}
                  width={"70px"}
                  height={"70px"}
                />
              ) : (
                <AvatarReactjs
                  name={props.info_chat?.name ? props.info_chat?.name : "user"}
                  fontSize={"small"}
                  src={UserProfilePic}
                  width={"70px"}
                  height={"70px"}
                />
              )}
              <h2>{props?.info_chat?.name}</h2>
              </div>

            {FilterMessages && FilterMessages.length >= 1 ? (
              FilterMessages.map((item, index) => (
             
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
                      getDayOrDate(FilterMessages[index - 1]?.createdAt) ==
                      getDayOrDate(item.createdAt)
                        ? "hidden"
                        : ""
                    }  ${
                      item.SenderId != Info_User._id
                        ? "text-right"
                        : "  w-[100%]"
                    }  `}
                  >
                    <div
                      className={`border-2 bg-gray-200 rounded-lg w-48 text-center text-gray-600 ${
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
                          getDayOrDate(FilterMessages[index - 1]?.createdAt) !=
                            getDayOrDate(item.createdAt)
                            ? "flex items-center justify-center   flex-shrink-0 "
                            : ` invisible `
                        } `}
                      >
                        {Number.isInteger(Number(props.info_chat?.pic)) ? (
                          <AvatarReactjs
                            name={
                              props.info_chat?.name
                                ? props.info_chat?.name
                                : "user"
                            }
                            fontSize={"small"}
                            backgroundColor={
                              Number.isInteger(Number(props.info_chat?.pic))
                                ? colors[props.info_chat?.pic]
                                : "red"
                            }
                            fontColor={
                              props.info_chat?.pic == 3 ? "black" : "azure"
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
                          ? " ml-2 text-sm bg-white shadow rounded-lg"
                          : " mr-3 flex flex-row text-sm bg-indigo-100  shadow rounded-lg"
                      }
                    >
                      <div className=" py-0.5  px-4 pl-2 ">
                        <p
                          className={
                            FilterMessages[index + 1]?.SenderId != item.SenderId
                              ? "pb-1 font-mono pr-6  text-base/6 pb-0"
                              : "pb-1 font-mono pr-6  text-base/6 "
                          }
                        >
                          {item.message}
                        </p>
                        <div
                          className={`text-gray-500  text-right  ${
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
                            position: "",
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
            ) : messages_loading ? (
              <Messages_Loding />
            ) : FilterMessages && FilterMessages?.length == 0 ? (
              `Sned the first message to ${props.info_chat?.name}`
            ) : (
              ""
            )}
          </div>

          <div class=" foot flex flex-row items-center h-16 w-[67%] bg-white  fixed bottom-0   px-4">
            <div>
              <button class="flex items-center justify-center text-gray-500 hover:text-gray-900">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
            <div class="ml-4">
              <button
                onClick={() => {
                  sendMessage();
                }}
                className={`flex items-center justify-center ${
                  message != ""
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-gray-300 "
                } rounded-xl text-black px-4 py-1 flex-shrink-0`}
                disabled={message == "" ? true : false}
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="h-screen  text-center  grid  place-content-center bg-gradient-to-tr from-blue-900 to-purple-900  "
          style={{
            backgroundImage: "URL(bg_chat3.png)",
         
          }}
        >
          <img
            src="logo_.png"
            alt="Logo chat"
            class="animate-pulse ml-16 grid  place-content-center  "
          />
          <br />

          <h1 className="text-black font-bold text-xl text-center font-sans ">
            Your messages
          </h1>
          <p className="text-black text-xl flex flex-row gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
</svg>  Send private Files and messages to Your Frends 
          </p>
        </div>
      )}
    </>
  );
}
