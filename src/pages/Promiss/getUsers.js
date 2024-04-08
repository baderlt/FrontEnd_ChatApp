import axios from "axios";
import { baseUrl } from "../../touls";


const getUsers = (token) => {
  return new Promise((resolve, reject) => {
     axios
      .get(`${baseUrl}/users/`,  {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export default getUsers;
