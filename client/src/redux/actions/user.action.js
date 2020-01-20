import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { DELETE_INMATE_FAILURE } from "./inmates.action";

export const PRISON_LOGIN_START = "PRISON_LOGIN_START";
export const PRISON_LOGIN_SUCCESS = "PRISON_LOGIN_SUCCESS";
export const PRISON_LOGIN_FAILURE = "PRISON_LOGIN_FAILURE";

export const loginPrison = credentials => dispatch => {
  dispatch({ type: PRISON_LOGIN_START });

  axiosWithAuth()
    .post("/login", credentials)
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
  .post("/register", credentials)
  .then(res => {
    localStorage.setItem("token", res.data.token);
    dispatch({ type: PRISON_LOGIN_SUCCESS, payload: res.data });
  })
  .catch(error => {
    dispatch({ type: PRISON_LOGIN_FAILURE, payload: error.message });
  });
}

export const UPDATE_PRISON_START = "UPDATE_PRISON_START"
export const UPDATE_PRISON_SUCCESS = "UPDATE_PRISON_SUCCESS"
export const UPDATE_PRISON_FAILURE = "UPDATE_PRISON_FAILURE"

export const editPrison = (id, prisonInfo) => dispatch => {
  dispatch({ type: UPDATE_PRISON_START })

  axiosWithAuth()
  .put(`/${id}`, prisonInfo)
  .then(response => {
    console.log(response) 
    dispatch({ type: UPDATE_PRISON_SUCCESS, payload: response.data })
  })
  .catch(error => {
    console.log(error)
    dispatch({ type: UPDATE_PRISON_FAILURE })
  })
}

export const DELETE_PRISON_START = "DELETE_PRISON_START"
export const DELETE_PRISON_SUCCESS = "DELETE_PRISON_SUCCESS"
export const DELETE_PRISON_FAILURE = "DELETE_PRISON_FAILURE"

export const deletePrison = (id) => dispatch => {
  dispatch({ type: DELETE_PRISON_START })

  axiosWithAuth()
  .delete(`/${id}`)
  .then(response => {
    console.log(response)
    dispatch({ type: DELETE_PRISON_SUCCESS })
  })
  .catch(error => {
    console.log(error)
    dispatch({ type: DELETE_INMATE_FAILURE })
  })
}


export const SINGLE_ADMIN_PRISON_FETCH_START = "SINGLE_ADMIN_PRISON_FETCH_START";
export const SINGLE_ADMIN_PRISON_FETCH_SUCCESS = "SINGLE_ADMIN_PRISON_FETCH_SUCCESS";
export const SINGLE_ADMIN_PRISON_FETCH_FAILURE = "SINGLE_ADMIN_PRISON_FETCH_FAILURE";

export const fetchSingleAdminPrison = id => dispatch => {
  dispatch({ type: SINGLE_ADMIN_PRISON_FETCH_START });

  axiosWithAuth()
    .get(`https://inmate-skills.herokuapp.com/api/prisons/admin/${id}`)
    .then(res => {
      dispatch({ type: SINGLE_ADMIN_PRISON_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: SINGLE_ADMIN_PRISON_FETCH_FAILURE });
    });
};
