import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thinkboard.codewithmmd.ir/api",
});

export default axiosInstance;