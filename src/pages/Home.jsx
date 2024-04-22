import { Route, Routes } from "react-router-dom";
import Nav_Bar from "../Compement/Nav_Bar";

import React, {
  Suspense,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { Server_Socket, baseUrl, colors } from "../touls";
import Drawer_Info from "../Drawer_Profil";
import useSound from "use-sound";
import Not_Found from "./Not_Found";
import Loading_App from "../Loding/Loading_App";
import Chats from "../Compement/Chat";
import NewChat from "../Compement/New_Chat/NewChat";
import Notif_Sound from "./notification.wav";
import useSendNotitication from "../Houks/useSendNotitication ";
import getUsers from "./Promiss/getUsers";
import GetNotifications from "./Promiss/GetNotifications";
import AvatarReactjs from "avatar-reactjs";
export const OnlinUserContext = createContext(null);
import Emitter from "../Events/stream_event";
import Calling_User from "../Compement/caliing_user";
//  const Lazy_chats=React.lazy(()=>{ import("../Compement/Chat") })
// const Lazy_chats = React.lazy(() => import("../Compement/Chat"));

const Home = () => {
  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const Profile_Drawer = useSelector((state) => state.Drawer_Profile);
  const [My_is_Socket, setMy_Id] = useState("");
  const [Socket, SetSocket] = useState(null);
  const [onlineUser, SetOnlineUser] = useState();
  const [notifications, SetNotification] = useState([]);
  const openedChat = useSelector((state) => state.alert.openEdChat);
  const [play_notif] = useSound(Notif_Sound);
  const [calleSignal, setCallerSignal] = useState();
  const [callAccepted, setcallaccepted] = useState();
  const connectionRef = useRef();
  const [stream, setstream] = useState();
  const [calingUser,SetCalingUser]=useState(false);
  const myvedio = useRef();
  const userVedio = useRef();

  ///// inser the notification not read in database
  useSendNotitication(notifications, Info_User);
  ///// handel connectionref
  const handleConnectionRef = (peer) => {
    connectionRef.current = peer;
  };

  /////////////////////////////// updateNotification
  const updateNotification = (New_N) => {
    SetNotification(New_N);
  };

  ////////////////////// connexion  socket Io
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
    //// get my is socket for use in call user
    Socket.on("me", (me) => setMy_Id(me));
    //// add me in list of onlign users
    Socket.emit("addNewUser", Info_User?._id);
    //// gte the onlign users
    Socket.on("onlineUser", (res) => {
      SetOnlineUser(res);
    });

    ///// when i call a user 
    Emitter.on('caling',(data)=>{SetCalingUser(data)});
     /////// if i'm the caller , run my stram 
    //  Emitter.on('myStream',(stream_)=>{setstream(stream_);   myvedio.current.srcObject = stream_;});
     ///// userstream
     Emitter.on('UserStream',(stream_)=>{setstream(stream_);   userVedio.current.srcObject = stream_;;});
    ///// accepte the call
    Socket.on("callUser", (data) => {
      setCallerSignal(data);
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

  //// get userMedia
  const HandelUserMedia = () => {
    //// adapter for all browsers .
    var getUserMedia = (
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia
    ).bind(navigator);
    //// start my vedio straming
    getUserMedia(
      {
        video: true,
        audio: true,
      },
      (stream_) => {
        setstream(stream_);

        answerCall(calleSignal.from, calleSignal.signal, stream_);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  ////////// accept the call ;
  const answerCall = (caller, signal, mystream) => {
    setcallaccepted(true);
    SetCalingUser(false);
    try {
      ///// my vedio streaming
      myvedio.current.srcObject = mystream;
      const peer = new SimplePeer({
        initiator: false,
        trickle: false,
        stream: stream,
      });
      peer.on("signal", (data) => {
        Socket.emit("answerCall", { signal: data, to: caller });
      });
      console.log('hii')
      peer.on("stream", (stream_) => {
        ///// user vedio
        console.log(stream_);
        userVedio.current.srcObject = stream_;
      });
      peer.signal(signal);
      handleConnectionRef(peer);
    } catch (e) {
      console.log("e");
    }
  };

  ///////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    ///// use prommise get users for get all users
    getUsers(Info_User.token)
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
    ///// use promiss getNotification for get the notf of user
    GetNotifications(Info_User.token, Info_User._id)
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

  ///// decline call;
  const DeclineCall = () => {
    setCallerSignal(false);
    connectionRef.current.destroy();
  };

  return (
    <>
      {calleSignal && !callAccepted ? (
        <div
          className="caling absolute top-2 left-[42%]  bg-slate-700 z-50 rounded-lg w-[400px]"
          style={{ zIndex: 1000 }}
        >
          <div className="pl-2 pr-2 ">
            <div
              className={`p-2 flex flex-nowrap border-b-2 mt-1 border-gray-600/50 w-full`}
            >
              
              {Number.isInteger(Number(calleSignal.pic)) ? (
                <AvatarReactjs
                  name={calleSignal.name ? calleSignal.name : "user"}
                  fontSize={"large"}
                  backgroundColor={
                    Number.isInteger(Number(calleSignal.pic))
                      ? colors[calleSignal.pic]
                      : "red"
                  }
                  fontColor={calleSignal.pic == 3 ? "black" : "azure"}
                  width={"50px"}
                  height={"50px"}
                />
              ) : (
                <AvatarReactjs
                  name={calleSignal.name ? calleSignal.name : "user"}
                  fontSize={"large"}
                  src={calleSignal.pic}
                  width={"50px"}
                  height={"50px"}
                />
              )}

              <div className=" w-full grid grid-rows-2 grid-cols-3">
                <span
                  className="flex flex-row col-span-2 "
                  style={{ width: "100%" }}
                >
                  <h2 className=" text-white pl-0 col-span-4 basis-1/2 ">
                    &ensp; &ensp;{calleSignal.name}
                  </h2>
                </span>
                <span className="row-span-2 flex justify-between items-center">
                  <span
                    className="flex justify-center items-center bg-green-500 p-2 rounded-lg "
                    onClick={HandelUserMedia}
                  >
                    <img
                      src="call_voice_answer.gif"
                      alt="call accept "
                      width={30}
                      height={30}
                    />
                  </span>
                  <span
                    className="flex justify-center items-center  bg-red-600 p-2 rounded-lg"
                    onClick={DeclineCall}
                  >
                    <img
                      src="call_voice_end.png"
                      alt="call accept "
                      width={30}
                      height={30}
                    />
                  </span>
                </span>
                <span className=" col-span-2">
                  <p
                    className={` text-gray-300 pl-2   w-full  `}
                    style={{ width: "100%" }}
                  >
                    &ensp; voice call ....
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {calingUser ? <Calling_User calingUser={calingUser} DeclineCall={DeclineCall} />:""}
      <div
        className={`absolute m-0 pt-0 h-auto flex   bg-gray-200/45 rounded-lg  ${
          stream ? "" : "hidden"
        }`}
        style={{ zIndex: 2000, width: "100%", height: "100%" }}
      >
        {/* {callAccepted  ?<div> */}
        <video
          playsInline
          muted
          ref={myvedio}
          autoPlay
          style={{ width: "200px", height: "200px" }}
          className="absolute left-0 top-0 "
        ></video>

        <video playsInline muted ref={userVedio} autoPlay></video>
        {/* </div>:
					null} */}
      </div>

      <Drawer_Info
        User={Profile_Drawer.User}
        isDrawerOpen={Profile_Drawer.Open}
      />
      {/* <body style={{overflow:'hidden'}}></body> */}
      <OnlinUserContext.Provider
        value={{
          onlineUser,
          notifications,
          Socket,
          updateNotification,
          My_is_Socket,
          handleConnectionRef,
        }}
      >
        <Nav_Bar />

        <Routes>
          <Route
            path={"/"}
            element={
              <Suspense fallback={<Loading_App />}>
                <Chats />
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
