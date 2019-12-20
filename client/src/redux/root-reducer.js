import { combineReducers } from "redux";

import prisonsReducer from "../redux/reducers/prisons.reducers";
import inmatesReducer from "../redux/reducers/inmates.reducers";
import userReducer from "../redux/reducers/user.reducer";
import formsReducer from "../redux/reducers/forms.reducers"

const rootReducer = combineReducers({
  prisons: prisonsReducer,
  inmates: inmatesReducer,
  user: userReducer,
  forms: formsReducer
});

export default rootReducer;
