import axios from "axios";

export const INMATE_FETCH_START = "INMATE_FETCH_START";
export const INMATE_FETCH_SUCCESS = "INMATE_FETCH_SUCCESS";
export const INMATE_FETCH_FAILURE = "INMATE_FETCH_FAILURE";

export const fetchInmates = prisonId => dispatch => {
  dispatch({ type: INMATE_FETCH_START });

  axios
    .get(`https://inmate-skills.herokuapp.com/api/prisons/${prisonId}/inmates`)
    .then(res => {
      dispatch({ type: INMATE_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: INMATE_FETCH_FAILURE });
    });
};

export const SINGLE_INMATE_FETCH_START = "SINGLE_INMATE_FETCH_START";
export const SINGLE_INMATE_FETCH_SUCCESS = "SINGLE_INMATE_FETCH_SUCCESS";
export const SINGLE_INMATE_FETCH_FAILURE = "SINGLE_INMATE_FETCH_FAILURE";

export const singleFetchInmate = (prisonId, inmateId) => dispatch => {
  dispatch({ type: SINGLE_INMATE_FETCH_START });

  axios
    .get(
      `https://inmate-skills.herokuapp.com/api/prisons/${prisonId}/inmates/${inmateId}`
    )
    .then(res => {
      dispatch({ type: SINGLE_INMATE_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: SINGLE_INMATE_FETCH_FAILURE });
    });
};
