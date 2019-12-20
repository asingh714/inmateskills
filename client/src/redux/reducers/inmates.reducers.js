import {
  INMATE_FETCH_START,
  INMATE_FETCH_SUCCESS,
  INMATE_FETCH_FAILURE,
  SINGLE_INMATE_FETCH_START,
  SINGLE_INMATE_FETCH_SUCCESS,
  SINGLE_INMATE_FETCH_FAILURE,
  ADD_INMATE_START,
  ADD_INMATE_SUCCESS,
  ADD_INMATE_FAILURE,
  DELETE_INMATE_START,
  DELETE_INMATE_SUCCESS,
  DELETE_INMATE_FAILURE,
  EDIT_INMATE_START,
  EDIT_INMATE_SUCCESS,
  EDIT_INMATE_FAILURE,
  TOGGLE_IS_INMATE_EDITING
} from "../actions/inmates.action";

const initialState = {
  inmates: [],
  isFetchingInmates: false,
  fetchingInmatesError: "",
  inmate: {},
  isFetchingSingleInmate: false,
  fetchingSingleInmateError: "",
  inmatePosted: false,
  inmateDeleted: false,
  inmateEdited: false,
  inmateToBeEdited: false
};

const inmatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INMATE_FETCH_START:
      return {
        ...state,
        inmates: [],
        isFetchingInmates: true,
        fetchingInmatesError: ""
      };
    case INMATE_FETCH_SUCCESS:
      return {
        ...state,
        inmates: action.payload,
        isFetchingInmates: false,
        fetchingInmatesError: ""
      };
    case INMATE_FETCH_FAILURE:
      return {
        ...state,
        inmates: [],
        isFetchingInmates: false,
        fetchingInmatesError: action.payload
      };
    case SINGLE_INMATE_FETCH_START:
      return {
        ...state,
        inmate: {},
        isFetchingSingleInmate: true,
        fetchingSingleInmateError: ""
      };
    case SINGLE_INMATE_FETCH_SUCCESS:
      return {
        ...state,
        inmate: action.payload,
        isFetchingSingleInmate: false,
        fetchingSingleInmateError: ""
      };
    case SINGLE_INMATE_FETCH_FAILURE:
      return {
        ...state,
        inmate: {},
        isFetchingSingleInmate: false,
        fetchingSingleInmateError: action.payload
      };
    case ADD_INMATE_START:
    case ADD_INMATE_FAILURE:
      return {
        ...state,
        inmatePosted: false
      };
    case ADD_INMATE_SUCCESS:
      return {
        ...state,
        inmatePosted: true
      };
    case DELETE_INMATE_START:
    case DELETE_INMATE_FAILURE:
      return {
        ...state,
        inmateDeleted: false
      };
    case DELETE_INMATE_SUCCESS:
      return {
        ...state,
        inmateDeleted: true
      };
    case EDIT_INMATE_START:
    case EDIT_INMATE_FAILURE:
      return {
        ...state,
        inmateEdited: false
      };
    case EDIT_INMATE_SUCCESS:
      return {
        ...state,
        inmateEdited: true
      };
    case TOGGLE_IS_INMATE_EDITING:
      return {
        ...state,
        inmateToBeEdited: !state.inmateToBeEdited
      };
    default:
      return state;
  }
};

export default inmatesReducer;
