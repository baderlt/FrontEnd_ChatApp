import { colors } from "@mui/material";
import AvatarReactjs from "avatar-reactjs";


const Calling_User=({calingUser,DeclineCall})=>{
return (
    <div
          className="caling absolute top-2 left-[42%]  bg-slate-700 z-50 rounded-lg w-[400px]"
          style={{ zIndex: 1000 }}
        >
          <div className="pl-2 pr-2 ">
            <div
              className={`p-2 flex flex-nowrap border-b-2 mt-1 border-gray-600/50 w-full`}
            >
              {Number.isInteger(Number(calingUser.pic)) ? (
                <AvatarReactjs
                  name={calingUser.name ? calingUser.name : "user"}
                  fontSize={"large"}
                  backgroundColor={
                    Number.isInteger(Number(calingUser.pic))
                      ? colors[calingUser.pic]
                      : "red"
                  }
                  fontColor={calingUser.pic == 3 ? "black" : "azure"}
                  width={"50px"}
                  height={"50px"}
                />
              ) : (
                <AvatarReactjs
                  name={calingUser.name ? calingUser.name : "user"}
                  fontSize={"large"}
                  src={calingUser.pic}
                  width={"50px"}
                  height={"50px"}
                />
              )}

              <div className=" w-full grid grid-rows-2 grid-cols-4">
                <span
                  className="flex flex-row col-span-3 "
                  style={{ width: "100%" }}
                >
                  <h2 className=" text-white pl-0 col-span-4 basis-1/2 ">
                    &ensp; &ensp;{calingUser.name}
                  </h2>
                </span>
                <span className="row-span-2 flex justify-between items-center">
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
                    &ensp; Calling ...
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
     
)
}
export default Calling_User;