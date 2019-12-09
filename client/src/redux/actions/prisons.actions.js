import axios from "axios";

export const PRISONS_FETCH_START = "PRISONS_FETCH_START";
export const PRISONS_FETCH_SUCCESS = "PRISONS_FETCH_SUCCESS";
export const PRISONS_FETCH_FAILURE = "PRISONS_FETCH_FAILURE";

export const fetchPrisons = () => dispatch => {
  dispatch({ type: PRISONS_FETCH_START });

  axios
    .get("https://inmate-skills.herokuapp.com/api/prisons")
    .then(res => {
      dispatch({ type: PRISONS_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: PRISONS_FETCH_FAILURE });
    });
};
