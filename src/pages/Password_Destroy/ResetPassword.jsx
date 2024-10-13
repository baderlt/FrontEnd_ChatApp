// components/ResetPassword.js
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Assuming you're using React Router
import Left_Side_Auth from "../left_Side_Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../touls";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
 const dispatch=useDispatch();
 const navigate = useNavigate();
  const { token } = useParams();
  const [isload,setisload]=useState(false)
  const Password = useRef("");
  const [C_Password ,setC_Password]= useState("");
  const [Password_case, setCases] = useState({
    lower: false,
    upper: false,
    num: false,
    char: false,
    special: false,
  });
  const [err, seterr] = useState({
    password: "",
    C_Password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Password.current.value != C_Password) {
        seterr({ ...err, C_Password: "You must confirm the password!" });
        return 0;
      }
      setisload(true)
      await axios
      .post(`${baseUrl}/users/reset-password/${token}`, {
        newPassword :Password.current.value
      })
      .then((res) => {
        setTimeout(() => {
            navigate("/login");
          }, 1000);
        setisload(false);
        dispatch({
          type: "succes",
          payload: { message: res.data, openSuccess: true },
        });

      })
      .catch((err) => {
        setisload(false);
        dispatch({
          type: "error",
          payload: { message: err.response.data, openError: true },
        });
      });
    
    return true;
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
    <Left_Side_Auth>
      <form className="bg-white" onSubmit={handleSubmit}>
      <h1 className="text-gray-800 font-bold text-2xl flex justify-center items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              className="bi bi-shield-lock"
              viewBox="0 0 16 16"
            >
              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
              <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
            </svg>
          </h1>
        <p className="flex justify-center items-center font-normal text-xl text-gray-600 mb-7">
            Enter the new Password {" "}
        </p>

        <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none w-72 border-none"
            type="password"
            name="Password"
            id=""
            placeholder="Password"
            pattern="^.{8,}$"
            ref={Password}
            onChange={(e) => Cases_Validation(e.target.value)}
            required
          />
        </div>
        <div
          className={`m-4 ${
            Password.current.value == "" || Password.current.value == undefined
              ? "hidden"
              : ""
          } `}
        >
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

        <div className={`flex items-center border-2 py-2 px-2 rounded-2xl ${Password.current.value != C_Password && Password.current.value !="" ? " border-red-500" :" "}  `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            className={`pl-2 w-72 outline-none border-none`}
            type="password"
            name="C_Password"
            id=""
            placeholder="Password confirmation"
            pattern="^.{8,}$"
            value={C_Password}
            onChange={(e)=>setC_Password(e.target.value)}
            required
          />
        </div>
        <p className="text-red-700  text-xs"> &ensp;{err.C_Password}</p>

        <button
          type="submit"
          className={`block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2`}
        >
          {isload ? <CircularProgress size={20} /> : "Chnage Password"}
        </button>
      </form>
    </Left_Side_Auth>
  );
};

export default ResetPassword;
