import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import AvatarReactjs from "avatar-reactjs";
import { baseUrl, colors } from "../../touls";
const Profile_User=(props)=>{
    const links = props?.User?.links ? JSON.parse(props?.User?.links) : null;
    return (<>
    <h2 className="text-xl text-gray-300 flex flex-row gap-2 mt-2 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg>Profile</h2>
    {props.User ?  
<div>

    
<div className="w-40 h-40 rounded-full mx-auto border-4 border-white  t bottom-0">
              {Number.isInteger(Number(props.User?.pic)) ? (
                <AvatarReactjs
                  name={props.User?.name ? props.User?.name : "user"}
                  fontSize={"large"}
                  backgroundColor={
                    Number.isInteger(Number(props.User?.pic))
                      ? colors[props.User?.pic]
                      : "red"
                  }
                  fontColor={props?.User?.pic == 3 ? "black" : "azure"}
                  width={"153px"}
                  height={"153px"}
                />
              ) : (
                <AvatarReactjs
                  name={props.User?.name ? props.User?.name : "user"}
                  fontSize={"large"}
                  src={`${baseUrl}/users/${props?.User?.pic}`}
                  width={"153px"}
                  height={"153px"}
                />
              )}
            </div>
          

          <div className="p-4 ">
            {/* User information */}
            <h2 className="text-2xl font-semibold mt-6">
              <FontAwesomeIcon icon={faUser} size="" /> &ensp;{props.User?.name}
            </h2>

            <h3 className="text-gray-200 mt-10">
              <InfoIcon />  &ensp;
              {!props.User?.bio || props.User?.bio == "undefined"
                ? `Hi i'am ${props.User?.name}`
                : props.User.bio}
            </h3>
      
            {/* Add more user information as needed */}
            <br />
            <br />
            <div className=" flex md:gap-4  lg:gap-6 gap-2 items-center justify-center">
              {links?.instagram ? (
                <a href={links?.instagram} className=" ">
                  <Instagram fontSize="large" color="error" />
                </a>
              ) : (
                ""
              )}
              {links?.facebook ? (
                <a href={links?.facebook} className="">
                  <FacebookIcon fontSize="large" color="primary" />
                </a>
              ) : (
                ""
              )}
              {links?.linkedIn ? (
                <a href={links?.linkedIn} className="">
                  <LinkedInIcon fontSize="large" color="info" />
                </a>
              ) : (
                ""
              )}
              {links?.twitter ? (
                <a href={links?.twitter} className="">
                  <TwitterIcon fontSize="large" color="info" />
                </a>
              ) : (
                ""
              )}
            </div>

    <div className=" flex flex-row flex-wrap h-10 mt-10  items-center justify-center gap-4">
        <button className="bg-blue-700 p-2  w-40" style={{borderRadius:'4px'}} >Message</button>
        <button className="bg-blue-700 p-2  w-40" style={{borderRadius:'4px'}} onClick={()=>{}}>New Chat</button>

    </div>
    </div>
    </div>
            :  <div className="flex items-center justify-center mt-40 "> <img src="Happy.png" alt="Happy " className="w-[30%] h-[30%]" /></div>}
    </>)
}
export default Profile_User;