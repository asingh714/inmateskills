import {
  PRISON_LOGIN_START,
  PRISON_LOGIN_SUCCESS,
  PRISON_LOGIN_FAILURE,
  PRISON_REGISTER_START,
  PRISON_REGISTER_SUCCESS,
  PRISON_REGISTER_FAILURE,
  UPDATE_PRISON_START,
  UPDATE_PRISON_SUCCESS,
  UPDATE_PRISON_FAILURE,
  DELETE_PRISON_START,
  DELETE_PRISON_SUCCESS,
  DELETE_PRISON_FAILURE,
  SINGLE_ADMIN_PRISON_FETCH_START,
  SINGLE_ADMIN_PRISON_FETCH_SUCCESS,
  SINGLE_ADMIN_PRISON_FETCH_FAILURE,
  PRISON_LOGOUT_START,
  PRISON_LOGOUT_SUCCESS
} from "../actions/user.action";

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false || localStorage.getItem("token") ? true : false,
  loggingError: "",
  loggedInUser: {},
  prisonUpdated: false,
  updateError: "",
  prisonDeleted: false,
  isFetchingSingleAdminPrison: false,
  singleAdminPrison: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRISON_LOGIN_START:
    case PRISON_REGISTER_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        loggedInUser: {},
        loggingError: ""
      };
    case PRISON_LOGIN_SUCCESS:
    case PRISON_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        loggedInUser: action.payload,
        loggingError: ""
      };
    case PRISON_LOGIN_FAILURE:
    case PRISON_REGISTER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        loggedInUser: {},
        loggingError: action.payload
      };
    case UPDATE_PRISON_START:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        prisonUpdated: false,
        updateError: ""
      };
    case UPDATE_PRISON_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        prisonUpdated: true,
        updateError: ""
      };
    case UPDATE_PRISON_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        prisonUpdated: false,
        updateError: action.payload
      };
    case DELETE_PRISON_START:
    case DELETE_PRISON_FAILURE:
      return {
        ...state,
        prisonDeleted: false
      };
    case DELETE_PRISON_SUCCESS:
      return {
        ...state,
        prisonDeleted: true
      };
    case SINGLE_ADMIN_PRISON_FETCH_START:
      return {
        ...state,
        isFetchingSingleAdminPrison: true,
        singleAdminPrison: {}
      };
    case SINGLE_ADMIN_PRISON_FETCH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetchingSingleAdminPrison: false,
        singleAdminPrison: action.payload
      };
    case SINGLE_ADMIN_PRISON_FETCH_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isFetchingSingleAdminPrison: false,
        singleAdminPrison: {}
      };
    case PRISON_LOGOUT_START:
      return {
        ...state,
        isLoggedIn: true
      };
    case PRISON_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default userReducer;
