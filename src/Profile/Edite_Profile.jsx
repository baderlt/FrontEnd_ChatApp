import EditIcon from "@mui/icons-material/Edit";
import AvatarReactjs from "avatar-reactjs";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../touls";
import { colors } from "../touls";
import { decryptData, encryptData } from "../EncryptData";

export const Edite_Profile = (props) => {
  const Info_User = useSelector((state) => state.Auth_check.user_Info);
  const dispatch = useDispatch();
  const inst_regex = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?$/;
  const LinkdIn_regex =
    /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
  const Facebook_regex =
    /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9.]+\/?$/;
  const Twiter_regex =
    /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
  const [ProfileImage, setProfileImage] = useState();
  const [name, setname] = useState(props?.User?.name);
  const [bio, setbio] = useState(
    props.User?.bio && props.User?.bio != "undefined"
      ? props.User?.bio
      : `hi i'm ${name}  `
  );
  const [sending, SetSending] = useState(false);
  const [ProfileImageView, setProfileImageView] = useState(props.User.pic);
  const [errors, seterrors] = useState({
    name: "",
    bio: "",
    links_: { linkedIn: "", twitter: "", facebook: "", instagram: "" },
  });
  const [links, setlinks] = useState({
    instagram: props.User?.links?.instagram || "",
    facebook: props.User?.links?.facebook || "",
    twitter: props.User?.links?.twitter || "",
    linkedIn: props.User?.links?.linkedIn || "",
  });

  /////////// check name is valide 
  const NameValidation = (e) => {
    if (e.match(/^[a-zA-Z0-9_]{6,}$/)) {
      seterrors({ ...errors, name: "" });
      return true;
    } else {
      seterrors({ ...errors, name: "Type a Valide name !" });
      return false;
    }
  };
  //////////// check is valide Instagram
  const inst_Scan = (e) => {
    if (e == "" || inst_regex.test(e)) {
      seterrors({ ...errors, links_: { ...errors.links_, instagram: "" } });
      return true;
    } else if (!e == "" && !inst_regex.test(e)) {
      seterrors({
        ...errors,
        links_: { ...errors.links_, instagram: "Invalid instagram Url..! " },
      });
      return false;
    }
  };
  ////////////chack is valide  Facebook
  const FaccebookScan = (e) => {
    if (e == "" || Facebook_regex.test(e)) {
      seterrors({ ...errors, links_: { ...errors.links_, facebook: "" } });
      return true;
    } else if (!e == "" && !Facebook_regex.test(e)) {
      seterrors({
        ...errors,
        links_: { ...errors.links_, facebook: "Invalid facebook Url..! " },
      });
      return false;
    }
  };

  //////////// check is valide  Twiter
  const TwiterScan = (e) => {
    if (e == "" || Twiter_regex.test(e)) {
      seterrors({ ...errors, links_: { ...errors.links_, twitter: "" } });
      return true;
    } else if (!e == "" && !Twiter_regex.test(e)) {
      seterrors({
        ...errors,
        links_: { ...errors.links_, twitter: "Invalid twitter Url..! " },
      });
      return false;
    }
  };
  //////////////////linkdEIn
  const LinkdinScan = (e) => {
    if (e == "" || LinkdIn_regex.test(e)) {
      seterrors({ ...errors, links_: { ...errors.links_, linkedIn: "" } });
      return true;
    } else if (!e == "" && !LinkdIn_regex.test(e))
      seterrors({
        ...errors,
        links_: { ...errors.links_, linkedIn: "Invalid linkedInd Url..! " },
      });
    return false;
  };

  /// update the information user 
  const UpdateInfoProfile = async () => {
    try {
      SetSending(true);
      const formData = new FormData();
      formData.append("profileImage", ProfileImage);
      formData.append("bio", bio);
      formData.append("name", name);
      formData.append("id", props.User._id);
      formData.append("links", JSON.stringify(links));
      // formData.append('bio', bio);

      await axios
        .post(`${baseUrl}/users/profile`, formData, {
          headers: {
            Authorization: `Bearer ${Info_User.token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          dispatch({
            type: "succes",
            payload: { message: res.data.message, openSuccess: true },
          });
          dispatch({ type: "CloseDrawer",  });
          SetSending(false);
          props.closeModal();
          UpdateInfo(res?.data?.user);
        });
    } catch (error) {
      console.error("Error Updating user profile data", error);
      SetSending(false);
      dispatch({
        type: "error",
        payload: {
          message: error.response?.data?.message
            ? ""
            : "Server Error Try Again ..!",
          openError: true,
        },
      });
    }
  };

  const UpdateInfo = (user) => {
    const info = localStorage.getItem("info_User");
    const info_decrypted = decryptData(info);
    const newInfo = {
      ...info_decrypted,
      pic: user?.pic || info_decrypted.pic,
      name: user?.name || info_decrypted.name,
      links: user?.links || info_decrypted.links,
      bio: user?.bio || info_decrypted.bio,
    };
    dispatch({ type: "isauth", payload: newInfo });
    const encryptedData = encryptData(newInfo);
    localStorage.setItem("info_User",encryptedData);

  };
  const Validation = () => {
    let [NamaScan, instScan, FaccebookScan_, LinkdinScan_, twitterScan] = [
      NameValidation(name),
      inst_Scan(links.instagram),
      FaccebookScan(links.facebook),
      LinkdinScan(links.linkedIn),
      TwiterScan(links.twitter),
    ];

    if (NamaScan && instScan && FaccebookScan_ && LinkdinScan_ && twitterScan) {
      UpdateInfoProfile();

      return true;
    }

    return false;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageView(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImage = async() => {
    if ( Number.isInteger(Number(ProfileImageView))) {
      alert("You don't have a Picture to remove !");
      return false;
    }
    const confirmation = confirm(
      "Are you sure you want to remove the picture ?"
    );
    if (confirmation) {
      Remove_Picture_Cloud();
      return true;
    }
  };


  ///// Remove the image from cloudinary use server node.js 
  const Remove_Picture_Cloud=async()=>{
    const pic={pic:ProfileImageView}
    await axios.delete(`${baseUrl}/users/remove_Picture`,{data:pic, headers: {
      Authorization: `Bearer ${Info_User.token}`
    }}).then(()=>{
    setProfileImageView(Math.floor((Math.random() * 5)+1 ));
    setProfileImage(Math.floor((Math.random() * 5)+1 ));
    dispatch({
      type: "succes",
      payload: { message:'', openSuccess: true },
    });
  }).catch((err)=>  dispatch({
    type: "error",
    payload: {
      message: "Server Error Try Again ..!",
      openError: true,
    },
  }));
  }

  return (
    <div className="text-white overscroll-auto ">
      <h2 className="  w-full flex justify-between">
        {" "}
        <i className="  text-green-600">
          <EditIcon color="green " />
          &ensp;Edite Profil{" "}
        </i>
        <button
          className="text-red-600 text-xl hover:bg-red-500 hover:text-white rounded-lg p-1"
          onClick={() => props.closeModal()}
        >
          <ClearIcon />
        </button>
      </h2>
      <div className="rounded-lg  grid grid-cols-1  md:grid-cols-8  lg:grid-cols-12   gap-2  border border-gray-300  ml-4  mr-4 w-[98%]  mt-10  pl-4 pt-1.5 bg-neutral-800">
        <div className="flex justify-center md:col-span-1 lg:col-span-2   ">
          {Number.isInteger(Number(ProfileImageView)) ? (
            <AvatarReactjs
              name={props.User?.name ? props.User?.name : "user"}
              fontSize={"large"}
              backgroundColor={
                Number.isInteger(Number(ProfileImageView))
                  ? colors[ProfileImageView]
                  : "red"
              }
              fontColor={ProfileImageView == 3 ? "black" : "azure"}
              width={"50px"}
              height={"50px"}
            />
          ) : (
            <AvatarReactjs
              name={props.User?.name ? props.User?.name : "user"}
              fontSize={"small"}
              src={ProfileImageView}
              width={"50px"}
              height={"50px"}
            />
          )}
        </div>
        <h3 className=" md:col-span-5 lg:col-span-7 ">
          {" "}
          <b>{props.User.name}</b>{" "}
          <p className="text-gray-300">{props.User.email}</p>
        </h3>
        <div className="flex flex-nowrap  justify-center md:justify-end md:col-span-3 gap-4 md:gap1">
          <button className="bg-green-700   h-10  mt-1.5 w-12 md:w-16  mb-1.5 rounded-lg  relative ">
            {" "}
            <input
              type="file"
              accept="image/*"
              className="cursor-pointer opacity-0 w-full h-full md:w-full bg-green-500 md:bg-green md:h-10 absolute"
              onChange={handleImageChange}
            />{" "}
            <u className="pl-4 ">
              <EditIcon />
            </u>
            &ensp;{" "}
          </button>
          <button
            className="bg-red-600  h-10 mt-1.5 mb-1.5 w-12 md:w-16 ml-2 mr-2 rounded-lg   "
            onClick={removeImage}
          >
            {" "}
            <DeleteForeverIcon />
          </button>
        </div>
      </div>
      <br />
      <div className="">
        &ensp; Name
        <div className="flex-initial  pt-2   ml-3">
          <div className="inline-flex w-full  h-10  bg-black">
            <span
              className={`inline-flex  items-center px-3  hover:bg-gray-400 text-sm ${
                errors.name == "" ? "text-white" : "text-red-500"
              } bg-black border border-r-0 border-gray-300 rounded-l-md dark:bg-black  dark:border-gray-600`}
            >
              <i className="">
                <PersonIcon />
              </i>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name ...."
              onChange={(e) => {
                setname(e.target.value);
                NameValidation(e.target.value);
              }}
              value={name}
            ></input>
          </div>
          <p className="text-red-500 text-xm ">{errors.name}</p>
        </div>{" "}
        <br />
        &ensp; About
        <div className="flex-initial  pt-2   ml-3 ">
          <div className="inline-flex w-full  h-10  bg-black">
            <span className="inline-flex  items-center px-3  hover:bg-gray-400 text-sm text-white bg-black border border-r-0 border-gray-300 rounded-l-md dark:bg-black  dark:border-gray-600">
              <i className="">
                <InfoIcon />
              </i>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="About ...."
              onChange={(e) => {
                setbio(e.target.value);
              }}
              value={bio}
            ></input>
          </div>
        </div>{" "}
        <br />
        &ensp; Add your own social media links
        <div
          id="group sosial media"
          className="grid grid-cols-1 md:grid-cols-2 gap-2 "
        >
          <div className="flex-initial  pt-2    ml-3">
            <div className="inline-flex w-full  h-10  bg-black">
              <span
                className={`inline-flex  items-center px-3  hover:bg-gray-400 text-sm ${
                  errors.links_.instagram == "" ||
                  errors.links_.instagram == undefined
                    ? "text-white"
                    : "text-red-500"
                } bg-black border border-r-0 border-gray-300 rounded-l-md dark:bg-black  dark:border-gray-600`}
              >
                <i className="">
                  <Instagram />
                </i>
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Instagram link ..."
                onChange={(e) => {
                  setlinks({ ...links, instagram: e.target.value });
                  inst_Scan(e.target.value);
                }}
                value={links.instagram}
              ></input>
            </div>
            <p className="text-red-500 text-xm ">{errors.links_.instagram}</p>
          </div>

          <div className="flex-initial  pt-2  ml-3  ">
            <div className="inline-flex w-full  h-10  bg-black">
              <span
                className={`inline-flex  items-center px-3  hover:bg-gray-400 text-sm ${
                  errors.links_.facebook == "" ||
                  errors.links_.facebook == undefined
                    ? "text-white"
                    : "text-red-500"
                }  bg-black border border-r-0 border-gray-300 rounded-l-md dark:bg-black  dark:border-gray-600`}
              >
                <i className="">
                  <FacebookIcon />
                </i>
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Facebook link "
                onChange={(e) => {
                  setlinks({ ...links, facebook: e.target.value });
                  FaccebookScan(e.target.value);
                }}
                value={links.facebook}
              ></input>
            </div>
            <p className="text-red-500 text-xm ">{errors.links_.facebook}</p>
          </div>
          <div className="flex-initial  pt-2    ml-3">
            <div className="inline-flex w-full  h-10  bg-black">
              <span
                className={`inline-flex  items-center px-3  hover:bg-gray-400 text-sm ${
                  errors.links_.linkedIn == "" ||
                  errors.links_.linkedIn == undefined
                    ? "text-white"
                    : "text-red-500"
                }  bg-black border border-r-0 border-gray-300 rounded-l-md dark:bg-black  dark:border-gray-600`}
              >
                <i className="">
                  <LinkedInIcon />
                </i>
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="LinkedIn link "
                onChange={(e) => {
                  setlinks({ ...links, linkedIn: e.target.value });
                  LinkdinScan(e.target.value);
                }}
                value={links.linkedIn}
              ></input>
            </div>
            <p className="text-red-500 text-xm ">{errors.links_.linkedIn}</p>
          </div>

          <div className="flex-initial  pt-2    ml-3">
            <div className="inline-flex w-full  h-10  bg-black">
              <span
                className={`inline-flex  items-center px-3  hover:bg-gray-400 text-sm ${
                  errors.links_.twitter == "" ||
                  errors.links_.twitter == undefined
                    ? "text-white"
                    : "text-red-500"
                }  bg-black border border-r-0 border-gray-300 rounded-l-md dark:bg-black  dark:border-gray-600`}
              >
                <i className="">
                  <TwitterIcon />
                </i>
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-md bg-black   border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Twitter link"
                onChange={(e) => {
                  setlinks({ ...links, twitter: e.target.value });
                  TwiterScan(e.target.value);
                }}
                value={links.twitter}
              ></input>
            </div>
            <p className="text-red-500 text-xm  h-3">{errors.links_.twitter}</p>
          </div>
        </div>
      </div>
      <button
        className="w-full bg-green-700 hover-bg-green-400 h-10  mt-6 rounded-lg"
        onClick={Validation}
      >
        <b>{sending ? <CircularProgress /> : "Save Changes"}</b>
      </button>
    </div>
  );
};
