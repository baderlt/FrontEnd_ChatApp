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
  const C_Password = useRef("");
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
    if (Password.current.value != C_Password.current.value) {
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
          }, 2000);
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
          <img src="logo_.png" alt="logo wesh" width={70} />
        </h1>
        <p className="flex justify-center items-center font-normal text-xl text-gray-600 mb-7">
          Change Pssword{" "}
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

        <div className={`flex items-center border-2 py-2 px-2 rounded-2xl ${Password.current.value != C_Password.current.value && Password.current.value !="" ? "border-red-600" :""} `}>
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
            ref={C_Password}
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
