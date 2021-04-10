import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://inmate--skills.herokuapp.com/api/prisons",
    headers: {
      Authorization: token
    }
  })
}
