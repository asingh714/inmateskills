import {
  PRISON_LOGIN_START,
  PRISON_LOGIN_SUCCESS,
  PRISON_LOGIN_FAILURE,
  PRISON_REGISTER_START,
  PRISON_REGISTER_SUCCESS,
  PRISON_REGISTER_FAILURE
} from "../actions/user.action";

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  username: "",
  id: null,
  name: "",
  error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRISON_LOGIN_START:
    case PRISON_REGISTER_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        username: "",
        id: null,
        name: "",
        error: ""
      };
    case PRISON_LOGIN_SUCCESS:
    case PRISON_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        username: action.payload.username,
        name: action.payload.name,
        id: action.payload.id, 
        error: ""
      };
    case PRISON_LOGIN_FAILURE:
    case PRISON_REGISTER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        username: "",
        id: null,
        name: "",
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
