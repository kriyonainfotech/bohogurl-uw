import axios from "axios";

const api = axios.create({
  baseURL: "https://bohogurl.org", // Backend server URL
});

// Adding Authorization Header Automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
