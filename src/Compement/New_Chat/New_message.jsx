import { CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import InputEmoji from "react-input-emoji";
import AddNewChat from "./Promiss_N/AddNewChat";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../touls";
import SendMessage from "./Promiss_N/SendMessage";
import { OnlinUserContext } from "../../pages/Home";

const New_Message = ({ user, setchat_Created, handleClose }) => {
  const dispatch = useDispatch();
  const [loading_Message_sent, setloading_Message_sent] = useState(false);
  const [message, setmessage] = useState();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const { Socket } = useContext(OnlinUserContext);

  ///// this function compose two steps 1th is creation chat and the scond is send the message
  //// i use two function promise AddNewChat and SendMessag
  const sendMessage = () => {
    setloading_Message_sent(true);
    try {
      const body = { second_Id: Info_User._id, first_Id: user._id };
      /// call the peomise Add new Chat for create a Chat or if exists retrun the chat .
      AddNewChat(body, Info_User.token)
        .then(async (res) => {
          ///// if success call the scond promise SednMessage for send message using the chat retunrd from the first promis
          setchat_Created(true);
          const body2 = {
            ChatId: res.data?._id,
            SenderId: Info_User._id,
            message: message,
          };
          let recipientId = res.data?.members?.filter(
            (id) => id != Info_User._id
          )[0];

          SendMessage(body2, Info_User.token)
            .then((res) => {
              socketSend(res.data, recipientId);
              setloading_Message_sent(false);
              dispatch({
                type: "succes",
                payload: {
                  message: "Message sended with Success",
                  openSuccess: true,
                },
              });
              handleClose();
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: "error",
            payload: {
              message: "Error Server Try Again ..! ",
              openError: true,
            },
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  ///// this for send real time messge with notification
  const socketSend = async (MessageSended, recipientId) => {
    if (Socket === null) return false;
    Socket.emit("sendMessage", { ...MessageSended, recipientId });
    return true;
  };

  return (
    <>
      <h1 className="flex flex-row items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus-circle-dotted"
          viewBox="0 0 16 16"
        >
          <path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
        </svg>{" "}
        Create chat with "{user.name}"{" "}
      </h1>
      <p className="text-gray-400 text-center flex flex-row items-center gap-2 justify-center mb-4 text-x mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chat-right-dots"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
        send the first message to {user.name}{" "}
      </p>
      <div
        className={`bg-gray-800
                 flex flex-row items-center min-h-16 max-h-28 rounded-xl  px-4 `}
        style={{ wordBreak: "break-all" }}
      >
        <InputEmoji
          value={message}
          onChange={setmessage}
          onKeyDown={(e) => {
            e.key == "Enter" && e.target.innerHTML != "" ? sendMessage() : "";
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
            disabled={message == "" ? true : false}
          >
            {loading_Message_sent ? (
              <CircularProgress size="30px" />
            ) : (
              <span className="flex items-center justify-center">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export default New_Message;
