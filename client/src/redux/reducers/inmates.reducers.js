import {
  INMATE_FETCH_START,
  INMATE_FETCH_SUCCESS,
  INMATE_FETCH_FAILURE,
  SINGLE_INMATE_FETCH_START,
  SINGLE_INMATE_FETCH_SUCCESS,
  SINGLE_INMATE_FETCH_FAILURE
} from "../actions/inmates.action";

const initialState = {
  inmates: [],
  isFetchingInmates: false,
  fetchingInmatesError: "",
  inmate: {},
  isFetchingSingleInmate: false,
  fetchingSingleInmateError: ""
}

const inmatesReducer = (state = initialState, action) => {
  switch(action.type) {
    case INMATE_FETCH_START:
      return {
        ...state,
        inmates: [],
        isFetchingInmates: true,
        fetchingInmatesError: ""
      }
    case INMATE_FETCH_SUCCESS:
      return {
        ...state,
        inmates: action.payload,
        isFetchingInmates: false,
        fetchingInmatesError: ""
      }
    case INMATE_FETCH_FAILURE:
      return {
        ...state,
        inmates: [],
        isFetchingInmates: false,
        fetchingInmatesError: action.payload
      }
    case SINGLE_INMATE_FETCH_START:
      return {
        ...state,
        inmate: {},
        isFetchingSingleInmate: true,
        fetchingSingleInmateError: ""
      }
    case SINGLE_INMATE_FETCH_SUCCESS:
      return {
        ...state,
        inmate: action.payload,
        isFetchingSingleInmate: false,
        fetchingSingleInmateError: ""
      }
    case SINGLE_INMATE_FETCH_FAILURE:
      return {
        ...state,
        inmate: {},
        isFetchingSingleInmate: false,
        fetchingSingleInmateError: action.payload
      }
    default:
      return state
  }
}

export default inmatesReducer; 