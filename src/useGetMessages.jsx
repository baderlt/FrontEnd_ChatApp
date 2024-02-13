import { useEffect, useState } from "react";
import { baseUrl } from "./touls";
import axios from "axios";
import { useSelector } from "react-redux";

const UseGetMessages=(info,refresh)=>{
    const [Messages,SetMessages]=useState();
    const Info_User = useSelector((state) => state.Auth_check.user_Info);

    async function chat_box_Messages(id_Chat) {
        const messages = await axios.get(
          `${baseUrl}/messages/${id_Chat}`,
          { headers: { Authorization: `Bearer ${Info_User.token}` } }
        );
        if(messages.error) console.log('Error Server 501 ')
        if (messages.data) { 
          SetMessages(messages.data);
       };
      }

      useEffect(() => {
        if(info !=undefined)  chat_box_Messages(info?.id_Chat);
      }, [info,refresh]);
      //console.log(Messages,FilterMessages,info,refresh)

      return Messages;

}
export default UseGetMessages