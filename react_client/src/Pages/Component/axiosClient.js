import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://localhost:7217/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = `http://localhost:3000/Login`;
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
