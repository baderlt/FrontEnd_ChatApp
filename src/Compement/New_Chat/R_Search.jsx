
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RecentSearch=({refrech})=>{
    let [Serched,setSearched]=useState([]);
    let [removed,setremoved]=useState(false);
    const Info_User = useSelector((state) => state.Auth_check.user_Info);

///////// intialisation liste of serched item 
    useEffect(()=>{ 
        const s=JSON.parse(localStorage.getItem('searched'));
        setSearched(s || [])
    },[refrech,removed])

/////// this function for remove item serched 
    const removeItem=(index)=>{
    ////// remove teh item by index 
       Serched[Info_User.name].splice(index,1);
      ///// update the list in localstorage 
      localStorage.setItem('searched',JSON.stringify({...Serched}));
      setremoved(!removed);
   
    }




    return <div className="mt-2">
        <h2 className="text-gray-300 px-4">Search history</h2>
    {Serched[Info_User.name] &&  Serched[Info_User.name].length >=1   ? Serched[Info_User.name].map((item,index)=>{
        return <div key={index} className="flex flex-col text-white gap-2  py-2 px-4 ">
        
 <span className="flex h-12 p-4 bg-gray-900 hover:bg-gray-800 rounded-lg  content-center items-center justify-between"><p>{item} </p><button className="w-8 flex items-center h-8 hover:bg-red-400  justify-center rounded-lg " onClick={()=>{removeItem(index)}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></button></span>

</div> 
    }):'... '}

    </div>
}
export default RecentSearch;
