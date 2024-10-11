import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../touls";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

const RegisterStepOne = ({ hansleStep, handelEmail }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [erros, seterrors] = useState({ email: "", valideEmail: false });
  const [code, SetCode] = useState("");
  const [sended_code, setsended] = useState(false);
  const [Otp_code, setotp_code] = useState();
  const [loading,setloading]=useState(false);

  const check_Email = (email_ = email) => {
    if (!email_.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
      seterrors({ ...erros, email: " invalid email address" });
      return false;
    } else {
      seterrors({ ...erros, email: "", valideEmail: true });
      return true;
    }
  };

  // chsck the code sended in email address
  const check_Email_Code = (e) => {
    e.preventDefault();
    let email_check = check_Email();
    if (email_check == false) return false;
    if (code == parseInt(Otp_code)) {
      handelEmail(email);
      hansleStep();
      // return true;
      console.log("validated");
    } else {
      dispatch({
        type: "error",
        payload: { message: "OTP code incorect ... !", openError: true },
      });
      setsended(false);
    }
    // return false;
  };

  //// GET OTP CODE
  const get_Otp_Code = (otp) => {
    let origin_otp = otp.slice(6, 12);
    setotp_code(origin_otp);
    console.log(origin_otp);
  };

  //// send the Atp code to the email address
  const Send_CODE = async () => {
    let checkEmail = check_Email(email);
    if (checkEmail == false) return false;
    setloading(true);
    await axios
      .post(`${baseUrl}/users/register/sendCode`, {
        email: email,
      })
      .then((res) => {setloading(false);
        get_Otp_Code(res.data.otp), setsended(true);
      })
      .catch((err) => {
        setloading(false);
        dispatch({
          type: "error",
          payload: { message: err.response.data.message, openError: true },
        });
      });
    return true;
  };

  return (
    <>
      <form className="bg-white" onSubmit={check_Email_Code}>
        <h1 className="text-gray-800 font-bold text-2xl flex justify-center items-center mb-1">
          <img src="logo_.png" alt="logo wesh" width={70} />
        </h1>
        <p className="flex justify-center items-center font-normal text-xl text-gray-600 mb-7">
          Welcome To <b> Wesh..!</b>{" "}
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
              setemail(e.target.value);
            }}
            required
          />
        </div>
        <p className="text-red-700 text-xs  mb-2 "> &ensp;{erros.email}</p>
        <div className="flex flex-row ">
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
              className="pl-2 outline-none w-50 border-none"
              type="number"
              name="code"
              id=""
              placeholder="Code"
              value={code}
              onChange={(e) => SetCode(e.target.value)}
              required
            />
          </div>
          {sended_code ? (
            <img
              src="Sended.gif"
              className="ml-8 flex justify-center items-center w-8 h-8 mt-1.5"
              alt="sended"
            />
          ) : (
            <button
              type="button"
              className="border border-green-900  bg-gray-50 text-black font-mono gap-2 ml-2 w-full h-[30px] flex rounded-lg mt-1.5 justify-center items-center"
              onClick={() => {
                Send_CODE();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
              {loading ? <CircularProgress size={20} /> : "Send"}
              
            </button>
          )}
        </div>

        <button
          type="submit"
          className={`block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2`}
        >
          {"Next"}
        </button>
        <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
        <Link to="/login">
              you already have an account{" "}
              <b>
               Login
              </b>{" "}
              ?</Link>
        </span>
      </form>
    </>
  );
};
export default RegisterStepOne;
