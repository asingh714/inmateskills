import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const PRISON_LOGIN_START = "PRISON_LOGIN_START";
export const PRISON_LOGIN_SUCCESS = "PRISON_LOGIN_SUCCESS";
export const PRISON_LOGIN_FAILURE = "PRISON_LOGIN_FAILURE";

export const loginPrison = credentials => dispatch => {
  dispatch({ type: PRISON_LOGIN_START });

  axiosWithAuth()
    .post("/prisons/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: PRISON_LOGIN_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: PRISON_LOGIN_FAILURE, payload: error.message });
    });
};


export const PRISON_REGISTER_START = "PRISON_REGISTER_START";
export const PRISON_REGISTER_SUCCESS = "PRISON_REGISTER_SUCCESS";
export const PRISON_REGISTER_FAILURE = "PRISON_REGISTER_FAILURE";

export const registerPrison = credentials => dispatch => {
  dispatch({ type: PRISON_REGISTER_START });

  axiosWithAuth()
  .post("/prisons/register", credentials)
  .then(res => {
    localStorage.setItem("token", res.data.token);
    dispatch({ type: PRISON_LOGIN_SUCCESS, payload: res.data });
  })
  .catch(error => {
    dispatch({ type: PRISON_LOGIN_FAILURE, payload: error.message });
  });
}