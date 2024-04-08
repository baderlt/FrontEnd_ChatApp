import axios from "axios";
import { baseUrl } from "../../../touls";

const AddNewChat = (body, token) => {
  return new Promise((resolve, reject) => {
     axios
      .post(`${baseUrl}/Chats/`, body, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export default AddNewChat;
