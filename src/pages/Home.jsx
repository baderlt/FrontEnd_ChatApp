import { Route,Routes} from "react-router-dom";
import Nav_Bar from "../Compement/Nav_Bar";
// import Chats from "../Compement/Chat";
import React, { Suspense, createContext, useEffect, useRef, useState } from "react";
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
import useSendNotitication from "../Houks/useSendNotitication ";
import getUsers from "./Promiss/getUsers";
import GetNotifications from "./Promiss/GetNotifications";
export const OnlinUserContext = createContext(null);

//  const Lazy_chats=React.lazy(()=>{ import("../Compement/Chat") })

// const Lazy_chats = React.lazy(() => import("../Compement/Chat"));
const Home = () => {

  const dispatch = useDispatch();
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const Profile_Drawer = useSelector((state) => state.Drawer_Profile);
  const [My_is_Socket,setMy_Id]=useState('');
  const [Socket, SetSocket] = useState(null);
  const [onlineUser, SetOnlineUser] = useState();
  const [notifications, SetNotification] = useState([]);
  const openedChat = useSelector((state) => state.alert.openEdChat);
  const [play_notif] = useSound(Notif_Sound);
  const [callerSignal,setCallerSignal] = useState()
  const userAudio=useRef();
  const MyAudio=useRef();
  const connectionRef= useRef();
  const [stream,setstream]=useState();
  const [callAccepted,setcallAccepted]=useState(false);
  
  ///// inser the notification not read in database 
  useSendNotitication(notifications,Info_User)
  ///// handel connectionref 
  const handleConnectionRef=(peer)=>{
   connectionRef.current=peer;
  }

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
    Socket.on('me',(me)=>setMy_Id(me));
    //// add me in list of onlign users
    Socket.emit("addNewUser", Info_User?._id);
    //// gte the onlign users 
    Socket.on("onlineUser", (res) => {
      SetOnlineUser(res);
    });

    ///// accepte the call 
      Socket.on("callUser", (data) => {

      console.log('caliinng');
      let c=confirm(`call from ${data.name}`);
      if(c){
    
        var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia).bind(navigator);
   
        
        const Myvedio = document.getElementById("myvedio");
        getUserMedia({
            video: true,
            audio: true //optional
        },  (stream_) =>{    
          setstream(stream_);
      Myvedio.srcObject=stream_;
      
      
       // MyAudio.current.srcObject=stream_;
      // answerCall(data.from,data.signal);
        },(err)=>{console.log(err)});
    //     var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    // getUserMedia({ video: true, audio: true }).then((stream) => {     
    //     setstream(stream);
    //       MyAudio.current.srcObject= stream;
    //     }).catch((err)=>console.log(err))

    //   console.log('dd');
      }
      })

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

  const answerCall =(caller,signal) =>  {
    MyAudio.current.srcObject=stream;
		const peer = new SimplePeer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			Socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream_) => {
			userAudio.current.srcObject=stream_
		})
		peer.signal(signal)
    setcallAccepted(true)
		handleConnectionRef(peer);
	}


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
   GetNotifications(Info_User.token,Info_User._id)
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
<div className="absolute">
<video playsInline muted id="myvedio" autoPlay style={{ width: "300px" }} ></video>
{callAccepted  ?
					<video playsInline muted ref={userAudio} autoPlay style={{ width: "300px"}} />:
					null}
</div>
      <Drawer_Info
        User={Profile_Drawer.User}
        isDrawerOpen={Profile_Drawer.Open}
      />
      {/* <body style={{overflow:'hidden'}}></body> */}
      <OnlinUserContext.Provider
        value={{ onlineUser, notifications, Socket, updateNotification,My_is_Socket ,handleConnectionRef}}
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
