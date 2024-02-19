
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser } from "@fortawesome/free-regular-svg-icons";
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from "react-redux";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AvatarReactjs from "avatar-reactjs";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { Box, Modal } from "@mui/material";
import { Edite_Profile } from "./Edite_Profile";
import { baseUrl } from "../touls";
import { colors } from "../touls";
const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

 
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function Profile(props){

       const [openModel,setOpenModel]=useState(false)

       const dispatch=useDispatch()
        const Info_User = useSelector((state) => state.Auth_check.user_Info);
        const links = props?.User?.links ? JSON.parse(props?.User?.links):null ;


    
      const Close_Drawer=()=>{
        dispatch({type:"CloseDrawer"})
    }
    const handleClose=()=>{ 
      if(props.User._id != Info_User._id)return false;
      setOpenModel(!openModel)
    }
    return (
        <div className="bg-black w-full h-[100%]  text-white  w-[90%] lg:w-[500px]  md:w-[400px] "  >
          <Modal
  open={openModel}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="  bg-black w-[100%] md:w-[70%] lg:w-[50%]  rounded-lg">

<Edite_Profile User={{...props.User,links:links}} closeModal={handleClose}/>
  </Box>
</Modal>
          <span className="ml-2 pb-2 pt-1 rounded-lg hover:bg-red-600 fixed" onClick={Close_Drawer}><CloseIcon fontSize="large" color="red"/></span>
     <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto  overflow-hidden">
        <div className=" bg-center h-40 p-4 ml-[5%] w-[90%] relative bg-black">
          {/* User profile picture */}
          {/* <img
            src={profileImage }
            alt="User Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-white absolute top-0 left-0 right-0 bottom-0"
          /> */}
     
          <div className="w-40 h-40 rounded-full mx-auto border-4 border-white absolute top-0 left-0 right-0 bottom-0">
          {Number.isInteger(Number(props.User?.pic))? 
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
                  /> :   <AvatarReactjs
                  name={props.User?.name ? props.User?.name : "user"}
                  fontSize={"large"}
                  src={`${baseUrl}/users/${props.User.pic}`}
                  width={"153px"}
                  height={"153px"}
                /> }</div>
  

        </div>
        <div className="p-4 ">
          {/* User information */}
           <h2 className="text-2xl font-semibold mt-6"><FontAwesomeIcon icon={ faUser} size=""/> &ensp;{props.User.name}</h2>
       
          <h3 className="text-gray-200 mt-10"><InfoIcon/> {console.log(props.User)} &ensp;{!props.User.bio || props.User.bio == "undefined" ?  `Hi i'am ${props.User.name}`:props.User.bio}</h3>
          <h3 className="text-gray-200 mt-10"><AlternateEmailIcon/> &ensp;{props.User.email ? props.User.email :'xxxxxxxxx@xxxx.xxx'}</h3>
          {/* Add more user information as needed */}
       <br /><br />
        <div className=" flex md:gap-4  lg:gap-6 gap-2 items-center justify-center">
         {links?.instagram? <a href={links?.instagram} className=" "><Instagram fontSize="large" color="error"/></a>:""}
         {links?.facebook ? <a href={links?.facebook } className=""><FacebookIcon fontSize="large" color="primary"/></a>:""}
         {links?.linkedIn  ?<a href={links?.linkedIn} className=""><LinkedInIcon fontSize="large" color='info'/></a>:""}
         {links?.twitter ? <a href={links?.twitter } className=""><TwitterIcon fontSize="large" color='info'/></a>:""}
        </div>
      
     
      {Info_User._id == props.User?._id ? <button className="bg-green-700 flex-2 row-span-2 rounded-lg hover:bg-green-500 w-[50%] pr-3  pl-3 pt-1 pb-1 ml-[25%] mt-[30%] " onClick={handleClose}>Edite </button> :""}
      </div>
      </div>
    </div>
     
        </div>
    )
}
