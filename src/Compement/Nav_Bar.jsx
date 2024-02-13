import { Fragment, useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AvatarReactjs from "avatar-reactjs";
import { Alert, AlertTitle, CircularProgress, Snackbar } from "@mui/material";


import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../touls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { OnlinUserContext } from "../pages/Home";
import moment from "moment"


const navigation = [
  { name: "Chats", href: "/home", current: true },
  { name: "New Chat", href: "/newChat", current: false },
  { name: "Support", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav_Bar() {

  const dispatch = useDispatch();
  const colors = [null, "green", "blue", "white", "black", "red"];
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const Users  = useSelector((state) => state.alert.Users);
  const [open_, setOpen] = useState(false);
  const { notifications } = useContext(OnlinUserContext);
  const uniqueId = new Set();
  const Notifications_ = notifications.filter((item) => 

  item.isRead !== true && !uniqueId.has(item.senderId) && uniqueId.add(item.senderId)
);


 

  const logout = async () => {
    localStorage.removeItem("info_User");
    
    await axios
      .post(
        `${baseUrl}/users/logout`,
        {},
        { headers: { Authorization: `Bearer ${Info_User.token}` } }
      )
      .then(() => dispatch({ type: "logout" }))
      .then(()=>{
window.location.reload();
      })
      .catch((err) =>
        dispatch({
          type: "error",
          payload: { message: err.response.data.message, openError: true },
        })
      );

      // alert('hiii');
  };


  const Get_Name=  (SenderId)=>{
if(Users){
     let name =   Users.map((user) => {
      if (user._id == SenderId) {
          return user.name;
      }
    
  });



  return name;
}
  }
  ////////////]
  const Open_Drawer=(e)=>{
   e.preventDefault();
  dispatch({type:'OpenDrawer',payload:Info_User});
  }
///////////////////
  const Count_Messages=(senderId)=>{
    let count=0;
  notifications.map((item) => {
      if (item.senderId == senderId && item.isRead === false) {
          count ++;
      }});

      if(count >1 ){
          return `${count}+ new messages`;
      }else{
        return 'Sent you a new message .. ';
      }
  }

  const vertical = "top";
  const horizontal = "right";
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
    {/* <Drawer anchor="right" transitionDuration={600} open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}><Profile User={Info_User}/></Drawer> */}
    <Disclosure as="nav" className="bg-gray-800 w-full fixed top-0 left-0">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div
                    class="animate-pulse  grid  place-content-center  w-8 h-8 border-2  border-opacity-30 "
                    style={{
                      borderRadius: "50%",
                      background: "#5b5fc2",
                      boxShadow: "8px 8px 26px #3a3d7c, -4px -4px 26px #7c81ff",
                    }}
                  >
                    <div>
                      <p
                        class="text-white font-bold font-sans text-xs w-full"
                        style={{ fontSize: "8px" }}
                      >
                        &lt; /X &gt;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div   onClick={() => {
                    setOpen(!open_);
                  }}>
                  <button
                    onClick={() => {
                      setOpen(!open_);
                    }}
                    type="button"
                    className="relative  rounded-full bg-gray-800 p-1 mr-4 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <FontAwesomeIcon
                      icon={faMessage}
                      width={"25px"}
                      height={"30px"}
                      color="white"
                      size="lg"
                    />
                    {Notifications_ && Notifications_.length >= 1 ? (
                      Notifications_.length > 99 ? (
                        <span
                          className="bg-red-600 text-white w-8   rounded-full"
                          style={{
                            position: "absolute   ",
                            top: "-5px",
                            right: "-10px",
                            padding: " 1px",
                            fontSize: 12,
                          }}
                        >
                          99+
                        </span>
                      ) : (
                        <span
                          className="bg-red-600 text-white w-6 rounded-full"
                          style={{
                            position: "absolute   ",
                            top: "-5px",
                            right: "-10px",
                            padding: " 1px ",
                            fontSize: 13,
                          }}
                        >
                         {Notifications_.length}
                        </span>
                      )
                    ) : (
                      ""
                    )}
                  </button>
                    </div>
                  <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open_}
                    sx={{ position: "fixed" }}
                    // onClose={handleClose}
                  >
                    <Alert
                      severity="info"
                      icon={<FontAwesomeIcon icon={faMessage} />}
                      onClose={handleClose}
                      className="bg-gray-800 relative"
                      sx={{
                        width: "400px",
                        marginTop: "25px",
                        backgroundColor: "rgb(31 41 55)",
                      }}
                      variant="filled"
                    >
                      <AlertTitle>
                        <strong>Notifications</strong>{" "}
                      </AlertTitle>
                      {Notifications_ && Notifications_.length >= 1
                        ? Notifications_.map((item) => {
                            return (
                              <Alert
                                severity="info"
                                icon={false}
                                sx={{
                                  width: "295px",
                                  backgroundColor: "rgb(55 65 81)",
                                  color: "white",
                                  marginBottom: "4px",
                                }}
                              
                              > <div className="w-full text-gray-200 flex flex-row " style={{width:'250px'}}> <strong>{Get_Name(item.senderId )} </strong> :&ensp; <p className="text-white  ">{Count_Messages(item.senderId)}</p> </div>
                                <p className="text-right text-gray-300 -mb-2 "  style={{fontSize:10}}>
                                {moment(item.date || item.SendAt).calendar()} </p>

                              </Alert>
                            );
                          })
                        : "No notification yet ..."}
                    </Alert>
                  </Snackbar>
            

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {Info_User ? (
                        Number.isInteger(Number(Info_User?.pic))? 
                          <AvatarReactjs
                       name={Info_User?.name ? Info_User?.name : "user"}
                       fontSize={"small"}
                       backgroundColor={
                         Number.isInteger(Number(Info_User?.pic))
                           ? colors[Info_User?.pic]
                           : "red"
                       }
                       fontColor={Info_User?.pic == 3 ? "black" : "azure"}
                       width={"35px"}
                       height={"35px"}
                     /> :   <AvatarReactjs
                     name={Info_User?.name ? Info_User?.name : "user"}
                     fontSize={"small"}
                     src={`${baseUrl}/users/${Info_User?.pic}`}
                     width={"35px"}
                     height={"35px"}
                   /> 
                    
                      ) : (
                        <CircularProgress />
                      )}
                    </Menu.Button>
            
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                       
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={(e)=>{Open_Drawer(e)}}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={logout}
                          >
                            Sign out
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          <hr />
        </>
      )}
  
             
    </Disclosure>
    </div>
  );
}
