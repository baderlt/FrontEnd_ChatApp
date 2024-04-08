import axios from "axios";
import { baseUrl } from "../../touls";


const GetNotifications = (token,id) => {
  return new Promise((resolve, reject) => {
     axios
      .get(`${baseUrl}/notifications/${id}`,  {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export default GetNotifications;
