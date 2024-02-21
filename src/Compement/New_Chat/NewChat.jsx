
import Recent from "./Recent";
import Users_Search from "./Users_Search";

const NewChat = () => {
  return (
    <div
      className=" w-full flex-row flex bg-black justify-center mt-12"
      style={{ height: "calc(100vh - 48px )", boxSizing: "border-box" }} >
      <div className={` w-[30%] h-full overflow-y-auto pl-4 pt-4`}>
        
      <Recent/>

      </div>


      <div className=" h-full w-[35%] min-w-[200px] overflow-y-auto">
<Users_Search/>
      </div>
      <div className="bg-gray-900 h-full  w-[35%] min-w-[200px]">Profile</div>
    </div>
  );
};
export default NewChat;
