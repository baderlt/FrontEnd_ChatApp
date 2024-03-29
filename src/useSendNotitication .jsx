import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "./touls";



const useSendNotitication =(notifications,Info_User) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        window.onbeforeunload=(e)=>{
            (async()=>{
                try {
                    const Notification_Socket = notifications?.filter((item) => item?.date);
                    if (Notification_Socket?.length > 0) {
                        await axios.post(`${baseUrl}/notifications/AddMany`, Notification_Socket, {
                          headers: { Authorization: `Bearer ${Info_User.token}` },
                });
            }
              } catch (error) {
                dispatch({
                    type: 'error',
                    payload: { message: 'Server was shut down, try again!', openError: true },
                });
            }
         })()
        }
        return ()=>{
            return ()=>"clear"
        }
    },[notifications])
}

export default useSendNotitication;
