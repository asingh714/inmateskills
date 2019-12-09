import { combineReducers } from "redux";

import prisonsReducer from "../redux/reducers/prisons.reducers";

const rootReducer = combineReducers({
  prisons: prisonsReducer
});

export default rootReducer;
