import {
  PRISON_LOGIN_START,
  PRISON_LOGIN_SUCCESS,
  PRISON_LOGIN_FAILURE
} from "../actions/user.action";

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  username: "",
  error: ""
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case PRISON_LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        username: "",
        error: ""
      }
    case PRISON_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        username: action.payload,
        error: ""
      }
    case PRISON_LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        username: "",
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer;