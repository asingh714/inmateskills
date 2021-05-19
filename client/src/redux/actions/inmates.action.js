import axios from "axios";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const INMATE_FETCH_START = "INMATE_FETCH_START";
export const INMATE_FETCH_SUCCESS = "INMATE_FETCH_SUCCESS";
export const INMATE_FETCH_FAILURE = "INMATE_FETCH_FAILURE";
// const Link = "http://localhost:5000";
const Link = "https://inmate-api.herokuapp.com";
export const fetchInmates = (prisonId) => (dispatch) => {
  dispatch({ type: INMATE_FETCH_START });

  axios
    .get(`${Link}/api/prisons/${prisonId}/inmates`)
    .then((res) => {
      dispatch({ type: INMATE_FETCH_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: INMATE_FETCH_FAILURE });
    });
};

export const SINGLE_INMATE_FETCH_START = "SINGLE_INMATE_FETCH_START";
export const SINGLE_INMATE_FETCH_SUCCESS = "SINGLE_INMATE_FETCH_SUCCESS";
export const SINGLE_INMATE_FETCH_FAILURE = "SINGLE_INMATE_FETCH_FAILURE";

export const singleFetchInmate = (prisonId, inmateId) => (dispatch) => {
  dispatch({ type: SINGLE_INMATE_FETCH_START });

  axios
    .get(`${Link}/api/prisons/${prisonId}/inmates/${inmateId}`)
    .then((response) => {
      dispatch({ type: SINGLE_INMATE_FETCH_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: SINGLE_INMATE_FETCH_FAILURE });
    });
};

export const CONTACT_INMATE_START = "CONTACT_INMATE_START";
export const CONTACT_INMATE_SUCCESS = "CONTACT_INMATE_SUCCESS";
export const CONTACT_INMATE_FAILURE = "CONTACT_INMATE_FAILURE";

export const contactInmate =
  (prisonId, inmateId, contactInfo) => (dispatch) => {
    dispatch({ type: CONTACT_INMATE_START });

    axios
      .post(
        `${Link}/api/prisons/${prisonId}/inmate/${inmateId}/contact`,
        contactInfo
      )
      .then((response) => {
        dispatch({ type: CONTACT_INMATE_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: CONTACT_INMATE_FAILURE });
      });
  };

export const ADD_INMATE_START = "ADD_INMATE_START";
export const ADD_INMATE_SUCCESS = "ADD_INMATE_SUCCESS";
export const ADD_INMATE_FAILURE = "ADD_INMATE_FAILURE";

export const addInmate = (inmate) => (dispatch) => {
  dispatch({ type: ADD_INMATE_START });

  axiosWithAuth()
    .post(`/addInmate`, inmate)
    .then((response) => {
      console.log(response);
      dispatch({ type: ADD_INMATE_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: ADD_INMATE_FAILURE });
    });
};

export const DELETE_INMATE_START = "DELETE_INMATE_START";
export const DELETE_INMATE_SUCCESS = "DELETE_INMATE_SUCCESS";
export const DELETE_INMATE_FAILURE = "DELETE_INMATE_FAILURE";

export const deleteInmate = (id) => (dispatch) => {
  dispatch({ type: DELETE_INMATE_START });

  axiosWithAuth()
    .delete(`/deleteInmate/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_INMATE_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DELETE_INMATE_FAILURE });
    });
};

export const EDIT_INMATE_START = "EDIT_INMATE_START";
export const EDIT_INMATE_SUCCESS = "EDIT_INMATE_SUCCESS";
export const EDIT_INMATE_FAILURE = "EDIT_INMATE_FAILURE";

export const editInmate = (id, updatedInmate) => (dispatch) => {
  dispatch({ type: EDIT_INMATE_START });

  axiosWithAuth()
    .put(`/updateInmate/${id}`, updatedInmate)
    .then((res) => {
      console.log(res);
      dispatch({ type: EDIT_INMATE_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: EDIT_INMATE_FAILURE });
    });
};
