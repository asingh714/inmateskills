import axios from "axios";
const Link = "http://localhost:5000";
// const Link = "https://inmate-api.herokuapp.com";
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: `${Link}/api/prisons`,
    headers: {
      Authorization: token,
    },
  });
};
