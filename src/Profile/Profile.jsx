import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AvatarReactjs from "avatar-reactjs";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { Box, Modal } from "@mui/material";
import { Edite_Profile } from "./Edite_Profile";
import { baseUrl } from "../touls";
import { colors } from "../touls";
import { Settings } from "./settings";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function Profile(props) {
  
  const [openModel, setOpenModel] = useState(false);
  const [ModalType,SetModalType]=useState("");
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const links = props?.User?.links ? JSON.parse(props?.User?.links) : null;

  const Close_Drawer = () => {
    dispatch({ type: "CloseDrawer" });
  };
  
  const handleClose = (type="") => {
    if (props.User._id != Info_User._id) return false;
    SetModalType(type);
    setOpenModel(!openModel);
  };

  return (
    <div className="bg-black w-full h-[100%]  text-white   lg:w-[500px]  md:w-[400px] ">
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
          {ModalType =="Edite" &&    <Edite_Profile
            User={{ ...props.User, links: links }}
            closeModal={handleClose}
          /> }

{ModalType =="settings" &&    <Settings
            User={{ ...props.User }}
            closeModal={handleClose}
          /> }

        </Box>
      </Modal>
      <span
        className="ml-2 pb-2 pt-1 rounded-lg hover:bg-red-600 fixed"
        onClick={Close_Drawer} >
        <CloseIcon fontSize="large" color="red" />
      </span>
      <div className="container mx-auto p-8">
        <div className="max-w-md mx-auto  overflow-hidden">
          <div className=" bg-center h-40 p-4 ml-[5%] w-[90%] relative bg-black">
            <div className="w-40 h-40 rounded-full mx-auto border-4 border-white absolute top-0 left-0 right-0 bottom-0">
              {Number.isInteger(Number(props.User?.pic)) ? (
                <AvatarReactjs
                  name={props.User?.name ? props.User?.name : "user"}
                  fontSize={"large"}
                  backgroundColor={
                    Number.isInteger(Number(props.User?.pic))
                      ? colors[props.User?.pic]
                      : "red"
                  }
                  fontColor={props.User?.pic == 3 ? "black" : "azure"}
                  width={"153px"}
                  height={"153px"}
                />
              ) : (
                <AvatarReactjs
                  name={props.User?.name ? props.User?.name : "user"}
                  fontSize={"large"}
                  src={props.User.pic}
                  width={"153px"}
                  height={"153px"}
                />
              )}
            </div>
          </div>
          <div className="p-4 ">
            {/* User information */}
            <h2 className="text-2xl font-semibold mt-6">
              <FontAwesomeIcon icon={faUser}  /> &ensp;{props.User.name}
            </h2>

            <h3 className="text-gray-200 mt-10">
              <InfoIcon />  &ensp;
              {!props.User.bio || props.User.bio == "undefined"
                ? `Hi i'am ${props.User.name}`
                : props.User.bio}
            </h3>
            <h3 className="text-gray-200 mt-10">
              <AlternateEmailIcon /> &ensp;
              {props.User.email ? props.User.email : "xxxxxxxxx@xxxx.xxx"}
            </h3>
            {/* Add more user information as needed */}
            <br />
            <br />
            <div className=" flex md:gap-4  lg:gap-6 gap-2 items-center justify-center">
              {links?.instagram ? (
                <a href={links?.instagram} className=" ">
                  <Instagram fontSize="large" color="error" />
                </a>
              ) : ("")}
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

            {Info_User._id == props.User?._id ? (
              <div className="flex flex-row">
              <button
                className="bg-green-700 flex justify-center items-center gap-2 flex-row rounded-lg hover:bg-green-500 w-[50%] pr-3  pl-3 pt-1 pb-1  mt-[30%] "
                onClick={()=>handleClose("Edite")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>Edite{" "}
              </button>
              <button
                className="bg-red-700 flex justify-center items-center gap-2 rounded-lg hover:bg-red-500 w-[50%] pr-3  pl-3 pt-1 pb-1 ml-[25%] mt-[30%] "
                onClick={()=>handleClose("settings")}>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg> settings{" "}
              </button>
              </div>
            ) : ("")}
          </div>
        </div>
      </div>
    </div>
  );
}
