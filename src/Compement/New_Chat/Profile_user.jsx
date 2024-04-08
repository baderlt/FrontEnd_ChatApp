import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import AvatarReactjs from "avatar-reactjs";
import { baseUrl, colors } from "../../touls";
import { useDispatch, useSelector } from "react-redux";
import Loding_Profile from "../../Loding/loading.profile";
import axios from "axios";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import New_Message from "./New_message";
import AddNewChat from "./Promiss_N/AddNewChat";
const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color:'white',
  border:'solid 2px gray '
};





const Profile_User = (props) => {
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const links = props?.User?.links ? JSON.parse(props?.User?.links) : null;
  const [chat_Created, setchat_Created] = useState(false);
  const [openModel, setOpenModel] = useState(false);

/////////// for close modal 
  const handleClose = () => {
    setOpenModel(!openModel);
  };


  ////// craete new Chat
  const New_Chat = async () => {
    if (props.User.frende) return false;
    try {
      const body = { second_Id: Info_User._id, first_Id: props.User._id };
      AddNewChat(body,Info_User.token)
        .then((res) => {
          dispatch({
            type: "succes",
            payload: {
              message: "Chat created with Success",
              openSuccess: true,
            },
          });
          setchat_Created(true);
        })
        .catch(() => {
            dispatch({
                type: "error",
                payload: { message: "Error Server Try Again ..! ", openError: true },
              });
        });
    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    <>

<Modal
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="  bg-black w-[100%] md:w-[70%] lg:w-[50%]  rounded-lg"
        >
      <New_Message user={props.User} setchat_Created={setchat_Created} handleClose={handleClose}/>
        </Box>
      </Modal>
      <h2 className="text-xl text-gray-300 flex flex-row gap-2 mt-2 items-center">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-person-add"
          viewBox="0 0 16 16"
        >
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
        </svg>
        Profile
      </h2>
      {props.loding ? (
        <Loding_Profile />
      ) : props.User ? (
        <div className="relative">
          <div
            className={`w-40 h-40 rounded-full mx-auto border-4 ${
              props.User.frende
                ? "border-green-400 "
                : " border-white mt-6 bottom-0"
            }`}
          >
            {Number.isInteger(Number(props.User?.pic)) ? (
              <AvatarReactjs
                name={props.User?.name ? props.User?.name : "user"}
                fontSize={"large"}
                backgroundColor={
                  Number.isInteger(Number(props.User?.pic))
                    ? colors[props.User?.pic]
                    : "red"
                }
                fontColor={props?.User?.pic == 3 ? "black" : "azure"}
                width={"153px"}
                height={"153px"}
              />
            ) : (
              <AvatarReactjs
                name={props.User?.name ? props.User?.name : "user"}
                fontSize={"large"}
                src={props?.User?.pic}
                width={"153px"}
                height={"153px"}
              />
            )}
          </div>

          <div className="p-4 ">
            {/* User information */}
            <h2 className="text-2xl font-semibold mt-6">
              <FontAwesomeIcon icon={faUser}  /> &ensp;{props.User?.name}
            </h2>

            <h3 className="text-gray-200 mt-10">
              <InfoIcon /> &ensp;
              {!props.User?.bio || props.User?.bio == "undefined"
                ? `Hi i'am ${props.User?.name}`
                : props.User.bio}
            </h3>

            {/* Add more user information as needed */}
            <br />
            <br />
            <div className=" flex md:gap-4  lg:gap-6 gap-2 items-center justify-center">
              {links?.instagram ? (
                <a href={links?.instagram} className=" ">
                  <Instagram fontSize="large" color="error" />
                </a>
              ) : (
                ""
              )}
              {links?.facebook ? (
                <a href={links?.facebook} className="">
                  <FacebookIcon fontSize="large" color="primary" />
                </a>
              ) : (
                ""
              )}
              {links?.linkedIn ? (
                <a href={links?.linkedIn} className="">
                  <LinkedInIcon fontSize="large" color="info" />
                </a>
              ) : (
                ""
              )}
              {links?.twitter ? (
                <a href={links?.twitter} className="">
                  <TwitterIcon fontSize="large" color="info" />
                </a>
              ) : (
                ""
              )}
            </div>
            {Info_User._id !== props.User?._id ? (
              <div className=" flex flex-row flex-wrap h-10 mt-10  items-center justify-center gap-4">
                <button
                  className="border bg-gray-900  flex content-center items-center gap-2 p-2  px-4 hover:bg-gray-700"
                  style={{ borderRadius: "4px" }}
              onClick={handleClose}  >
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
                  Message
                </button>
                {props.User.frende ? (
                  <p className="absolute -top-8 right-2  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="green"
                      className="bi bi-person-fill-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    </svg>
                  </p>
                ) : chat_Created ? (
                  <p className="absolute -top-8 right-2  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="green"
                      className="bi bi-person-fill-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    </svg>
                  </p>
                ) : (
                  <button
                    className="bg-gray-900 border p-2 flex content-center justify-center items-center gap-2 hover:bg-gray-700 px-4"
                    style={{ borderRadius: "4px" }}
                    onClick={New_Chat}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-plus-circle-dotted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                    </svg>
                    New Chat
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-40 ">
          {" "}
          <img src="Happy.png" alt="Happy " className="w-[30%] h-[30%]" />
        </div>
      )}
    </>
  );
};
export default Profile_User;
