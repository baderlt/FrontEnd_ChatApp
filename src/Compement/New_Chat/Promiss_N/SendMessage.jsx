import axios from "axios";
import { baseUrl } from "../../../touls";

const SendMessage=(data,token)=>{
    return new Promise((resolve, reject) => {
         axios
        .post(
          `${baseUrl}/messages/`,
          {body:data },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
}
export default SendMessage;