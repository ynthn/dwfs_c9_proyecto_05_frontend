import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://dwfs-c9-proyecto-05-backend.onrender.com"
   //baseURL: "http://localhost:8000"
})

export default axiosClient;