import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://inmate-api.herokuapp.com/api/prisons",
    headers: {
      Authorization: token
    }
  })
}
