import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { baseUrl } from "../touls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@mui/material";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Username = useRef("");
  const Email = useRef("");
  const Password = useRef("");
  const C_Password = useRef("");
  const [isload,setisload]=useState(false)
  const [err, seterr] = useState({
    username: "",
    email: "",
    password: "",
    C_Password: "",
  });
  const [Password_case, setCases] = useState({
    lower: false,
    upper: false,
    num: false,
    char: false,
    special: false,
  });
  let able_login =
    Password_case.lower &&
    Password_case.upper &&
    Password_case.num &&
    Password_case.char &&
    Password_case.special;
  let Confimation_Pass = false;

  const handelRegister = async (e) => {
    e.preventDefault();
    setisload(true);
    if (!able_login) return;
    const success = (res) => {
      setisload(false);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      dispatch({
        type: "succes",
        payload: { message: "Account created with success", openSuccess: true },
      });
      return;
    };
    if (!Username.current.value.match(/^[a-zA-Z0-9_]{6,}$/)) {
      seterr({ ...err, username: "Type a Valide Username !" });
      setisload(false);
      return 0;
    }
    if (
      !Email.current.value.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
      )
    ) {
      seterr({ ...err, username: "Type a Valide Email !" });
      setisload(false);
      return 0;
      
    }
    if (Password.current.value != C_Password.current.value) {
      seterr({ ...err, C_Password: "You must confirm the password!" });
      setisload(false);
      return 0;
    }
    await axios
      .post(`${baseUrl}/users/register`, {
        name: Username.current.value,
        email: Email.current.value,
        password: Password.current.value,
        C_Password: C_Password.current.value,
      })
      .then((res) => success(res.data))
      .catch((err) =>
        err.response.data.Username
          ? seterr({ ...err, username: "Username already exists !" })
          : dispatch({
              type: "error",
              payload: { message: err.response.data.message, openError: true },
            })
      );
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

  const check_pass = (value) => {
    if (value != Password.current.value) {
      Confimation_Pass = false;
    } else {
      Confimation_Pass = true;
    }

    return;
  };
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-purple-900 i justify-around items-center hidden">
          <img src="gif.gif" alt="backgroud" className="w-[60%] h-[60%]" />

          <div className="  absolute bottom-[30%] left-[80%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[60%] left-[30%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[20%] left-[10%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[5%] left-[70%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[80%] left-[70%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
          <div className="  absolute bottom-[70%] left-[10%]  ">
            <img
              src="logo_.png"
              className="w-[40%] h-[40%]"
              alt="logo chat app"
            />
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handelRegister}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome To<b> Wesh..!</b>{" "}
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 w-72 outline-none border-none"
                type="text"
                name="Username"
                id=""
                placeholder="Username"
                ref={Username}
                required
              />
            </div>
            <p className="text-red-700   text-xs mb-2 ">
              {" "}
              &ensp;{err.username}
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 w-72 outline-none border-none"
                type="email"
                name="Email"
                id=""
                placeholder="Email Address"
                ref={Email}
                required
              />
            </div>
            <p className="text-red-700 text-xs  mb-2 "> &ensp;{err.email}</p>
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
            <div className={`m-4 ${Password.current.value == "" ? "hidden" : ""}`}>
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

            <div className={`flex items-center border-2 py-2 px-2 rounded-2xl `}>

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
                className="pl-2 w-72 outline-none border-none"
                type="password"
                name="C_Password"
                id=""
                placeholder="Password confirmation"
                pattern="^.{8,}$"
                ref={C_Password}
                onChange={(e) => {
                  check_pass(e.target.value);
                }}
                required
              />
            </div>
            <p className="text-red-700  text-xs"> &ensp;{err.C_Password}</p>

            <button
              type="submit"
              className={`block w-full ${
                able_login ? "bg-indigo-600" : "bg-gray-500"
              } mt-4 py-2 rounded-2xl text-white font-semibold mb-2`}
              disabled={!able_login}
            >
              
              {isload?<CircularProgress size={20} />:'Register'}
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              you already have an account{" "}
              <b>
                <Link to="/login">Login</Link>
              </b>{" "}
              ?
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
