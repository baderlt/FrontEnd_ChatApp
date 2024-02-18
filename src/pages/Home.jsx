import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Nav_Bar from "../Compement/Nav_Bar";
// import Chats from "../Compement/Chat";
import React, { Suspense, createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../touls";
import Drawer_Info from "../Drawer_Profil";
import NewChat from "../Compement/NewChat";
import Not_Found from "./Not_Found";
import Loding_Chat from "../Compement/loading_chat";
import Loading_App from "../Loding/Loading_App";
export const OnlinUserContext = createContext(null);
//  const Lazy_chats=React.lazy(()=>{ import("../Compement/Chat") })

const Lazy_chats = React.lazy(() => import("../Compement/Chat"));
const Home = () => {
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const Profile_Drawer = useSelector((state) => state.Drawer_Profile);
  const [Socket, SetSocket] = useState(null);
  const [onlineUser, SetOnlineUser] = useState();
  const [notifications, SetNotification] = useState([]);
  const openedChat = useSelector((state) => state.alert.openEdChat);

  /////////////////////////////// updateNotification

  const updateNotification = (New_N) => {
    SetNotification(New_N);
  };

  //////////////////////////////////////////////// socket Io
  useEffect(() => {
    const connection_server = async () => {
      const newSocket = await io("https://socket-y0xj.onrender.com/");
      SetSocket(newSocket);
    };
    connection_server();
    return () => {
      Socket ? Socket.disconnect() : "";
    };
  }, [Info_User]);

  useEffect(() => {
    if (Socket === null) return;
    Socket.emit("addNewUser", Info_User?._id);
    Socket.on("onlineUser", (res) => {
      SetOnlineUser(res);
    });

    Socket.on("getNotification", (res) => {
      if (res.senderId === Info_User._id) return;
      const isChatOpen = openedChat?._id === res.senderId;

      if (isChatOpen) {
        SetNotification((prev) => [{ ...res, isRead: true }, ...prev]);
        return;
      } else {
        SetNotification((pr) => [res, ...pr]);
      }
    });

    return () => {
      Socket.off("onlineUser");
      Socket.off("getNotification");
    };
  }, [Socket, openedChat]);
  ////////////////////////
  const sendNotificationBeforeUnmount = async () => {
    try {
      const Notification_Socket = notifications.filter((item) => item.date);

      if (Notification_Socket.length > 0) {
        await axios.post(
          `${baseUrl}/notifications/AddMany`,
          Notification_Socket,
          {
            headers: { Authorization: `Bearer ${Info_User.token}` },
          }
        );
      }
    } catch (error) {
      dispatch({
        type: "error",
        payload: {
          message: "Server was shut down, try again!",
          openError: true,
        },
      });
    }
  };

  // sendNotificationBeforeUnmount()
  // console.log(notifications)
  useEffect(() => {
    axios
      .get(`${baseUrl}/users/`, {
        headers: { Authorization: `Bearer ${Info_User.token}` },
      })
      .then((res) => dispatch({ type: "users", payload: res.data }))
      .catch(() => {
        dispatch({
          type: "error",
          payload: {
            message: "Server was shut down try again ..! ",
            openError: true,
          },
        });
      });
    axios
      .get(`${baseUrl}/notifications/${Info_User._id}`, {
        headers: { Authorization: `Bearer ${Info_User.token}` },
      })
      .then((res) => SetNotification(res.data))
      .catch(() => {
        dispatch({
          type: "error",
          payload: {
            message: "Server was shut down try again ..! ",
            openError: true,
          },
        });
      });

    //  console.log( window.innerWidth)

    return () => {
      sendNotificationBeforeUnmount();
    };
  }, []);
  return (
    <>
      <Drawer_Info
        User={Profile_Drawer.User}
        isDrawerOpen={Profile_Drawer.Open}
      />
      {/* <body style={{overflow:'hidden'}}></body> */}
      <OnlinUserContext.Provider
        value={{ onlineUser, notifications, Socket, updateNotification }}
      >
        <Nav_Bar />

        <Routes>
          <Route
            path={"/"}
            element={
              <Suspense fallback={<Loading_App />}>
                <Lazy_chats />
              </Suspense>
              // <Chats/>
            }
          />
          <Route path={"/NewChat"} element={<NewChat />} />
          <Route path={"*"} element={<Not_Found />} />
        </Routes>
      </OnlinUserContext.Provider>
    </>
  );
};

export default Home;
