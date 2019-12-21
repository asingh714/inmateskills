import {
  PRISON_LOGIN_START,
  PRISON_LOGIN_SUCCESS,
  PRISON_LOGIN_FAILURE,
  PRISON_REGISTER_START,
  PRISON_REGISTER_SUCCESS,
  PRISON_REGISTER_FAILURE,
  UPDATE_PRISON_START,
  UPDATE_PRISON_SUCCESS,
  UPDATE_PRISON_FAILURE
} from "../actions/user.action";

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  loggingError: "",
  loggedInUser: {},
  updateError: ""
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
        updateError: ""
      };
    case UPDATE_PRISON_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        loggedInUser: action.payload,
        updateError: ""
      };
    case UPDATE_PRISON_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        updateError: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
