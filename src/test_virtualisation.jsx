// import React from "react";
// import AvatarReactjs from "avatar-reactjs";
// import { FixedSizeList } from "react-window";
// import { colors } from "./touls";
// import { Time_Date, getDayOrDate } from "./Compement/Touls_Date";
// const VirtualizedListMessages_Render=({FilterMessages,Info_User,info_chat,UserProfilePic,toggle})=>{

//     // const data =new Array(200).fill('eeee');
//     console.log(FilterMessages);
//     const hight=window.screen.height - 350;
//     const renderRow = ({ index }) => (
//         <div
//         key={index}
//         className={
//           FilterMessages[index].SenderId != Info_User._id
//             ? " col-start-1 col-end-11 p-0 rounded-lg  "
//             : "col-start-3 col-end-13 p-0 rounded-lg "
//         }
//       >
//         <div
//           className={`${
//             getDayOrDate(
//               FilterMessages[index - 1]?.createdAt
//             ) == getDayOrDate(FilterMessages[index].createdAt)
//               ? "hidden"
//               : ""
//           }  ${
//             FilterMessages[index].SenderId != Info_User._id
//               ? "text-right"
//               : "  w-[100%]"
//           }  `}
//         >
//           <div
//             className={`${
//               toggle
//                 ? " bg-gray-900 text-gray-200"
//                 : " bg-gray-200 text-gray-700"
//             } rounded-lg w-48 text-center ${
//                 FilterMessages[index].SenderId != Info_User._id
//                 ? "ml-[50%]"
//                 : " ml-[30%]"
//             } mb-1.5 `}
//           >
//             {" "}
//             {getDayOrDate(FilterMessages[index].createdAt)}
//           </div>
//         </div>
//         <div
//           className={
//             FilterMessages[index].SenderId != Info_User._id
//               ? "flex flex-row items-center"
//               : "flex items-center justify-start flex-row-reverse "
//           }
//         >
//           {FilterMessages[index].SenderId != Info_User._id ? (
//             <div
//               className={`${
//                 FilterMessages[index - 1]?.SenderId !==
//                 FilterMessages[index].SenderId ||
//                 getDayOrDate(
//                   FilterMessages[index - 1]?.createdAt
//                 ) != getDayOrDate(FilterMessages[index].createdAt)
//                   ? "flex items-center justify-center   flex-shrink-0 "
//                   : ` invisible `
//               } `}
//             >
//               {Number.isInteger(
//                 Number(info_chat?.pic)
//               ) ? (
//                 <AvatarReactjs
//                   name={
//                     info_chat?.name
//                       ? info_chat?.name
//                       : "user"
//                   }
//                   fontSize={"small"}
//                   backgroundColor={
//                     Number.isInteger(
//                       Number(info_chat?.pic)
//                     )
//                       ? colors[info_chat?.pic]
//                       : "red"
//                   }
//                   fontColor={
//                     info_chat?.pic == 3
//                       ? "black"
//                       : "azure"
//                   }
//                   width={"35px"}
//                   height={"35px"}
//                 />
//               ) : (
//                 <AvatarReactjs
//                   name={
//                     info_chat?.name
//                       ? info_chat?.name
//                       : "user"
//                   }
//                   fontSize={"small"}
//                   src={UserProfilePic}
//                   width={"35px"}
//                   height={"35px"}
//                 />
//               )}
//             </div>
//           ) : (
//             ""
//           )}

//           <div
//             className={
//                 FilterMessages[index].SenderId != Info_User._id
//                 ? ` ml-2 text-sm ${toggle ? "left-dark" :"bg-white"} shadow rounded-lg`
//                 : ` mr-3 flex flex-row text-sm ${toggle ? "right-dark" :"bg-indigo-100"}   shadow rounded-lg`
//             }
//           >
//             <div className=" py-0.5  px-4 pl-2 ">
//               <p
//                 className={` "pb-1 font-mono pr-6  text-base/6 "`}
//               >
//                 {FilterMessages[index].message}
//               </p>
//               <div
//                 className={ `${toggle ? 'text-white': 'text-gray-500'}  text-right  ${
//                   FilterMessages[index + 1]?.SenderId !=
//                   FilterMessages[index].SenderId ||
//                   (getDayOrDate(
//                     FilterMessages[index + 1]?.createdAt
//                   ) != getDayOrDate(FilterMessages[index].createdAt) &&
//                     FilterMessages[index + 1]?.SenderId ==
//                     FilterMessages[index].SenderId)
//                     ? " pb-4"
//                     : "hidden"
//                 }`}
//                 style={{
//                   fontSize: 9,
//                   height: "3px",
//                 }}
//               >
//                 <p className="basis-full pt-0.5   text-right">
//                   {Time_Date(FilterMessages[index].createdAt)} am
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//     console.log(FilterMessages);
// return VirtualizedListMessages(FilterMessages.length,renderRow,hight);
// }

// const VirtualizedListMessages = (len,renderRow,hight) => (

//     <FixedSizeList
//       height={500}
//       width={500}
//       itemCount={len}
//       itemSize={7} 
//     >
//       {renderRow}
//     </FixedSizeList>

// );

// export default VirtualizedListMessages_Render;