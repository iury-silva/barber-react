import axios from "axios";
import { toast } from "react-toastify";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.data.statusCode === 500) {
      toast.error(error.response.data.message);
      return Promise.reject(error);
    }
    toast.error(error.response.data.message.split(":")[1]);
    return Promise.reject(error);
  }
);




export default api;
