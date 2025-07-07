import axios from "axios";

export const axiosInstance = axios.create({
baseURL:"http://localhost:5001/api",
withCredentials:true, //by adding this we are sending cookies with every request from client

})