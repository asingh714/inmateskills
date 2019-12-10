import axios from "axios";


export const INMATE_FETCH_START = "INMATE_FETCH_START";
export const INMATE_FETCH_SUCCESS = "INMATE_FETCH_SUCCESS";
export const INMATE_FETCH_FAILURE = "INMATE_FETCH_FAILURE";

export const fetchInmates = id => dispatch => {
  dispatch({ type: INMATE_FETCH_START });

  axios
    .get(`https://inmate-skills.herokuapp.com/api/prisons/${id}/inmates`)
    .then(res => {
      dispatch({ type: INMATE_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: INMATE_FETCH_FAILURE });
    });
};
