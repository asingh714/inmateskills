import { combineReducers } from "redux";

import prisonsReducer from "../redux/reducers/prisons.reducers";
import inmatesReducer from "../redux/reducers/inmates.reducers";
import userReducer from "../redux/reducers/user.reducer";

const rootReducer = combineReducers({
  prisons: prisonsReducer,
  inmates: inmatesReducer,
  user: userReducer
});

export default rootReducer;
