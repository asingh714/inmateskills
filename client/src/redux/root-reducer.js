import { combineReducers } from "redux";

import prisonsReducer from "../redux/reducers/prisons.reducers";
import inmatesReducer from "../redux/reducers/inmates.reducers";

const rootReducer = combineReducers({
  prisons: prisonsReducer,
  inmates: inmatesReducer
});

export default rootReducer;
