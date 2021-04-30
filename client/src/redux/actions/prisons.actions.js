import axios from "axios";

export const PRISONS_FETCH_START = "PRISONS_FETCH_START";
export const PRISONS_FETCH_SUCCESS = "PRISONS_FETCH_SUCCESS";
export const PRISONS_FETCH_FAILURE = "PRISONS_FETCH_FAILURE";

export const fetchPrisons = () => (dispatch) => {
  dispatch({ type: PRISONS_FETCH_START });

  axios
    .get("https://inmate-skills.herokuapp.com/api/prisons")
    .then((res) => {
      dispatch({ type: PRISONS_FETCH_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: PRISONS_FETCH_FAILURE });
    });
};

export const SINGLE_PRISON_FETCH_START = "SINGLE_PRISON_FETCH_START";
export const SINGLE_PRISON_FETCH_SUCCESS = "SINGLE_PRISON_FETCH_SUCCESS";
export const SINGLE_PRISON_FETCH_FAILURE = "SINGLE_PRISON_FETCH_FAILURE";

export const fetchSinglePrison = (id) => (dispatch) => {
  dispatch({ type: SINGLE_PRISON_FETCH_START });

  axios
    .get(`https://inmate-skills.herokuapp.com/api/prisons/${id}`)
    .then((res) => {
      dispatch({ type: SINGLE_PRISON_FETCH_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: SINGLE_PRISON_FETCH_FAILURE });
    });
};
