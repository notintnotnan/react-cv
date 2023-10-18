import axios from "axios";

const apiDefautlInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// apiDefautlInstance.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     return error.response.data;
//   }
// );

export { apiDefautlInstance };
