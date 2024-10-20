import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loading_App from "./Loding/Loading_App";
import ForgotPassword from "./pages/Password_Destroy/ForgotPassword";
import ResetPassword from "./pages/Password_Destroy/ResetPassword";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyLogin = React.lazy(() => import("./pages/login"));
const LazyRegister = React.lazy(() => import("./pages/Register/Main_Register"));

function App() {
  const dispatch = useDispatch();
  const globale_State = useSelector((state) => state.alert.composant);
  const [isauth, setisauth] = useState(false);

  const check_Auth_User = async () => {
    const info = localStorage.getItem("info_User");

    if (!info) return <Navigate to={"/login"} />;

    const info_decrypted = await import("./EncryptData").then(
      ({ decryptData }) => decryptData(info)
    );
    if (!info_decrypted.isauth) {
      return <Navigate to={"login"} />;
    }

    const currentTime = new Date().getTime();
    const dataTimestamp = info_decrypted.timestamp;
    // Calculate the age of the data in milliseconds (1 days = 86 400 000 milliseconds)
    const dataAge = currentTime - dataTimestamp;
    if (dataAge >= 86400000) {
      // Data is older than 1 days, remove it
      localStorage.removeItem("info_User");
      return;
    } else {
      setisauth(true);
      dispatch({ type: "isauth", payload: info_decrypted });
      return;
    }
  };
  useEffect(() => {
    check_Auth_User();
  }, []);

  return (
    <>
      {globale_State}

      <Routes>
        <Route
          path={"/home/*"}
          element={
            <MiddlewareAuth isAuth={isauth}>
              <Suspense fallback={<Loading_App />}>
                <LazyHome />
              </Suspense>
            </MiddlewareAuth>
          }
        />

        <Route
          path={"/Login"}
          element={
            <MiddleWarePrevent isAuth={isauth}>
              <LazyLogin />
            </MiddleWarePrevent>
          }
        />
        <Route
          path={"/Register"}
          element={
            <Suspense fallback={<Loading_App />}>
              <LazyRegister />
            </Suspense>
          }
        />
        <Route
          path={"/ForgotPassword"}
          element={
            <Suspense fallback={<Loading_App />}>
              <ForgotPassword />
            </Suspense>
          }
        />

        <Route
          path={"/ResetPassword/:token"}
          element={
            <Suspense fallback={<Loading_App />}>
              <ResetPassword />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <MiddlewareAuth isAuth={isauth}>
              <Suspense fallback={<Loading_App />}>
                <Navigate to={"/home/"} />
              </Suspense>
            </MiddlewareAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;

function MiddlewareAuth({ children, isAuth }) {
  return isAuth ? (
    children
  ) : (
    <Suspense fallback={<Loading_App />}>
      <Navigate to={"/login"} />
    </Suspense>
  );
}

function MiddleWarePrevent({ children, isAuth }) {
  return !isAuth ? children : <Navigate to={"/home/"} />;
}
