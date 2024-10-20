import EditIcon from "@mui/icons-material/Edit";
import AvatarReactjs from "avatar-reactjs";
import HttpsIcon from '@mui/icons-material/Https';
import ClearIcon from "@mui/icons-material/Clear";
import LockResetIcon from '@mui/icons-material/LockReset';
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../touls";
import { colors } from "../touls";
import { decryptData, encryptData } from "../EncryptData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Settings = (props) => {
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const [prevPassword,setprevPassword]=useState("");
  const [newPassword,setNewPassord]=useState("");
  const [newPassConf,setNewPassConf]=useState("");
  const [sending, SetSending] = useState(false);

  const [errors, seterrors] = useState({prevPassword:"",password:"",password_confirmation:"" ,destroy_Confirmation:" "  });

  const [Password_case, setCases] = useState({
    lower: false,
    upper: false,
    num: false,
    char: false,
    special: false,
  });
  
  //// check if password is StrangePassword 
  const isStrangePassword =()=>{
    let check=Password_case.lower && Password_case.upper && Password_case.num && Password_case.char && Password_case.special;
    if(check){
        seterrors({...errors,newPassword :""})
        return true;
    }else{
        seterrors({...errors,newPassword :"Password must be Strange "})
        return false;
        
    }
  }



 // Change password user 
  const Change_Password = async () => {
    if(newPassword != newPassConf){
        seterrors({...errors,password_confirmation:"you must confirm your password "})
        return false;
    }else{
        seterrors({...errors,password_confirmation:""})
    }
    let checkPassword=isStrangePassword();
    if(!checkPassword)return false;
    try {
      SetSending(true);
      const body={
        prevPassword,newPassword
      }

      await axios
        .post(`${baseUrl}/users/settings/ChangePassword`,body, {
          headers: {
            Authorization: `Bearer ${Info_User.token}`}})
        .then((res) => {
          dispatch({
            type: "succes",
            payload: { message: res.data, openSuccess: true },
          });
          SetSending(false);
          props.closeModal();
        });
    } catch (error) {
      console.error("Error changing Password", error);
      SetSending(false);
      dispatch({
        type: "error",
        payload: {
          message: error.response?.data?.message,
          openError: true,
        },
      });
    }
  };

const Cases_Validation = (e) => {
    let new_Cases = Password_case;
    if (e.match(/[a-z]/)) {
      new_Cases = { ...new_Cases, lower: true };
    } else {
      new_Cases = { ...new_Cases, lower: false };
    }
    if (e.match(/[A-Z]/)) {
      new_Cases = { ...new_Cases, upper: true };
    } else {
      new_Cases = { ...new_Cases, upper: false };
    }
    if (e.match(/[0-9]/)) {
      new_Cases = { ...new_Cases, num: true };
    } else {
      new_Cases = { ...new_Cases, num: false };
    }
    if (e.length >= 8) {
      new_Cases = { ...new_Cases, char: true };
    } else {
      new_Cases = { ...new_Cases, char: false };
    }
    if (e.match(/[@#$%&*+!()_-]/)) {
      new_Cases = { ...new_Cases, special: true };
    } else {
      new_Cases = { ...new_Cases, special: false };
    }
    setCases(new_Cases);
    return;
  };





  return (
    <div className="text-white overscroll-auto flex items-center flex-col w-full">
      <h2 className="  w-full flex justify-between">
        {" "}
        <i className="flex justify-center items-center text-xl  text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
          &ensp;Settings{" "}
        </i>
        <button
          className="text-red-600 text-xl hover:bg-red-500 hover:text-white rounded-lg p-1"
          onClick={() => props.closeModal()}
        >
          <ClearIcon />
        </button>
      </h2>
  
      <br />
      <div className="w-full flex gap-2 flex-col">
      <h1 className=" mb-4 text-xl"><LockResetIcon/> Change Password  </h1>
        
        <div className="flex-initial  pt-2   ml-3">
          <div className="inline-flex w-full  h-10  bg-black">
            <span
              className={`inline-flex  items-center px-3  hover:bg-gray-400 text-sm text-white
               bg-black border border-r-0 rounded-l-md dark:bg-black  `}
            >
              <i className="">
                <HttpsIcon />
              </i>
            </span>
            <input
              type="password"
              id="p1"
              className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Previous Password ..."
              onChange={(e) => {  setprevPassword(e.target.value)}}
              value={prevPassword}
            ></input>
          </div>
          <p className="text-red-500 text-xm ">{errors.password}</p>
        </div>{" "}
   
  
        <div className="flex-initial  pt-2   ml-3 ">
          <div className="inline-flex w-full  h-10  bg-black">
            <span className="inline-flex  items-center px-3  hover:bg-gray-400 text-sm text-white bg-black border border-r-0  rounded-l-md dark:bg-black  ">
              <i className="">
                <LockResetIcon />
              </i>
            </span>
            <input
              type="Password"
              id="p2"
              className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="New Password ... "
              onChange={(e) => {
              setNewPassord(e.target.value);Cases_Validation(e.target.value)
              }}
              value={newPassword}
            ></input>
          </div>
          <p className="text-red-500 text-xm ">{errors.password}</p>
        </div>{" "}
        <div className={` ml-8 ${newPassword== "" || newPassword == undefined ? "hidden" : ""} `}> 
     
     <div
       className={`${
         Password_case.lower ? "text-green-600" : "text-red-500"
       }`}
     >
       {Password_case.lower ? (
         <FontAwesomeIcon size="xl" icon={faCheck} />
       ) : (
         <FontAwesomeIcon size="xl" icon={faXmark} />
       )}
       &ensp; At least <b>one lowercase letter</b>{" "}
     </div>
     <div
       className={`${
         Password_case.upper ? "text-green-600" : "text-red-500"
       }`}
     >
       {Password_case.upper ? (
         <FontAwesomeIcon size="xl" icon={faCheck} />
       ) : (
         <FontAwesomeIcon size="xl" icon={faXmark} />
       )}
       &ensp; At least <b>one Uppercase lettre</b>{" "}
     </div>
     <div
       className={`${
         Password_case.num ? "text-green-600" : "text-red-500"
       }`}
     >
       {Password_case.num ? (
         <FontAwesomeIcon size="xl" icon={faCheck} />
       ) : (
         <FontAwesomeIcon size="xl" icon={faXmark} />
       )}
       &ensp; At least <b>one Number</b>{" "}
     </div>
     <div
       className={`${
         Password_case.char ? "text-green-600" : "text-red-500"
       }`}
     >
       {Password_case.char ? (
         <FontAwesomeIcon size="xl" icon={faCheck} />
       ) : (
         <FontAwesomeIcon size="xl" icon={faXmark} />
       )}
       &ensp; Minimun <b>8 charcters</b>{" "}
     </div>
     <div
       className={`${
         Password_case.special ? "text-green-600" : "text-red-500"
       }`}
     >
       {Password_case.special ? (
         <FontAwesomeIcon size="xl" icon={faCheck} />
       ) : (
         <FontAwesomeIcon size="xl" icon={faXmark} />
       )}
       &ensp; At least <b>one Special character</b>{" "}
     </div>
   </div>
          <div className="flex-initial pt-2 ml-3">
            <div className="inline-flex w-full  h-10  bg-black ">
            <span className="inline-flex  items-center px-3  hover:bg-gray-400 text-sm text-white bg-black border border-r-0  rounded-l-md dark:bg-black  ">
              <i className="">
                <LockResetIcon />
              </i>
            </span>
              <input
                type="Password"
                id="website-admin76"
                className={`rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500 ${newPassword != newPassConf && newPassword != "" ? "border-red-500":""}`}
                placeholder="password confirmation ..."
                onChange={(e) => {setNewPassConf(e.target.value)}}
                value={newPassConf}
              ></input>
            </div>
            <p className="text-red-500 text-xm ">{errors.password_confirmation}</p>
          </div>

        </div>
   
      <button
        className="w-[30%]  bg-green-700 hover-bg-green-400 h-8  mt-6 rounded-lg"
        onClick={Change_Password}
      >
        <b>{sending ? <CircularProgress /> : "Change Password"}</b>
      </button>
    </div>
  );
};
