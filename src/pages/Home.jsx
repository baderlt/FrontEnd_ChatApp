import {
  Route,
  Routes,
} from "react-router-dom";
import Nav_Bar from "../Compement/Nav_Bar";
// import Chats from "../Compement/Chat";
import React, { Suspense, createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Server_Socket, baseUrl } from "../touls";
import Drawer_Info from "../Drawer_Profil";
import useSound from 'use-sound';
import Not_Found from "./Not_Found";
import Loading_App from "../Loding/Loading_App";
import Chats from "../Compement/Chat";
import NewChat from "../Compement/New_Chat/NewChat";
import Notif_Sound from './notification.wav'
export const OnlinUserContext = createContext(null);

//  const Lazy_chats=React.lazy(()=>{ import("../Compement/Chat") })

// const Lazy_chats = React.lazy(() => import("../Compement/Chat"));
const Home = () => {
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const Profile_Drawer = useSelector((state) => state.Drawer_Profile);
  const [Socket, SetSocket] = useState(null);
  const [onlineUser, SetOnlineUser] = useState();
  const [notifications, SetNotification] = useState([]);
  const openedChat = useSelector((state) => state.alert.openEdChat);
  const [play_notif] = useSound(Notif_Sound);
  /////////////////////////////// updateNotification

  const updateNotification = (New_N) => {
    SetNotification(New_N);
  };

  //////////////////////////////////////////////// socket Io
  useEffect(() => {
    const connection_server = async () => {
      const newSocket = await io(Server_Socket);
      SetSocket(newSocket);
    };
    connection_server();
    return () => {
      Socket ? Socket.disconnect() : "";
    };
  }, [Info_User]);


///////////////////////////////////////////////


  useEffect(() => {
    if (Socket === null) return;
    Socket.emit("addNewUser", Info_User?._id);
    Socket.on("onlineUser", (res) => {
      SetOnlineUser(res);
    });
    /////////////// get the notification  from socket on  action getNotification 
   Socket.on("getNotification", (res) => {
      if (res.senderId === Info_User._id) return;
      const isChatOpen = openedChat?._id === res.senderId;
      if (isChatOpen) {
        SetNotification((prev) => [{ ...res, isRead: true }, ...prev]);
        return;
      } else {
        play_notif();
        SetNotification((pr) => [res, ...pr]);
        return;
      }
    });

    return () => {
      Socket.off("onlineUser");
      Socket.off("getNotification");
    };
  }, [Socket, openedChat]);


  ////////////////////////


  // const sendNotificationBeforeUnmount = async () => {
  //   try {
  //     const Notification_Socket = notifications.filter((item) => item.date);

  //     if (Notification_Socket.length > 0) {
  //       await axios.post(
  //         `${baseUrl}/notifications/AddMany`,
  //         Notification_Socket,
  //         {
  //           headers: { Authorization: `Bearer ${Info_User.token}` },
  //         }
  //       );
  //     }
  //   } catch (error) {
  //     dispatch({
  //       type: "error",
  //       payload: {
  //         message: "Server was shut down, try again!",
  //         openError: true,
  //       },
  //     });
  //   }
  // };

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
            <Chats/>
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
