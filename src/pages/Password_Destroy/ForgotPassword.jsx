import { useState } from "react";
import Left_Side_Auth from "../left_Side_Auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../touls";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [erros, seterrors] = useState({ email: "", valideEmail: false });
  const [loading, setloading] = useState(false);

  const check_Email = (email_ = email) => {
    if (!email_.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
      seterrors({ ...erros, email: " invalid email address" });
      return false;
    } else {
      seterrors({ ...erros, email: "", valideEmail: true });
      return true;
    }
  };

  /// send the link for change password
  const send_Link = async (e) => {
    e.preventDefault();
    let check_email = check_Email();
    if (check_email == false) return false;
    setloading(true);
    const originUrl = window.location.origin;  // http://localhost:5173
    const pathname = window.location.pathname; // /FrontEnd_ChatApp/
    const hash = window.location.hash.split('/')[0]; // #

    const fullUrl = `${originUrl}${pathname}${hash}/ResetPassword`;
    await axios
      .post(`${baseUrl}/users/forgot-password`, {
        email: email,
        AppLink: fullUrl,
      })
      .then((res) => {
        setloading(false);
        dispatch({
          type: "succes",
          payload: { message: res.data, openSuccess: true },
        });
      })
      .catch((err) => {
        setloading(false);
        console.log(err)
        dispatch({
          type: "error",
          payload: { message: err.response.data.message, openError: true },
        });
      });
  };

  return (
    <>
      <Left_Side_Auth>
        <form className="bg-white" onSubmit={send_Link}>
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
          <p className="flex justify-center items-center font-normal text-xl text-gray-600 mb-4">
            Connection problems?{" "}
          </p>
          <p className=" flex  justify-center items-center font-normal">
            Enter your email address , and we will send
          </p>
          <p className=" mb-4 flex  justify-center items-center font-normal">
            you a link to recover your account.
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
              value={email}
              onChange={(e) => {
                setemail(e.target.value), check_Email(e.currentTarget.value);
              }}
              required
            />
          </div>
          <p className="text-red-700 text-xs  mb-2 "> &ensp;{erros.email}</p>
          <button
            type="submit"
            className={`block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2`}
          >
            {loading ? <CircularProgress size={20} /> : "Send the login link"}
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            <Link to="/Register">
              <b className="flex justify-center items-center">
                Create an account ?
              </b>
            </Link>
          </span>
        </form>
      </Left_Side_Auth>
    </>
  );
};
export default ForgotPassword;
