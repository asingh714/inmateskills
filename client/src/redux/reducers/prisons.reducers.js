import {
  PRISONS_FETCH_START,
  PRISONS_FETCH_SUCCESS,
  PRISONS_FETCH_FAILURE
} from "../actions/prisons.actions";

const initialState = {
  prisons: [],
  isFetchingPrisons: false,
  fetchingPrisonsError: ""
};

const prisonsReducers = (state = initialState, action) => {
  switch (action.type) {
    case PRISONS_FETCH_START:
      return {
        ...state,
        prisons: [],
        isFetchingPrisons: true,
        fetchingPrisonsError: ""
      };
    case PRISONS_FETCH_SUCCESS:
      return {
        ...state,
        prisons: action.payload,
        isFetchingPrisons: false,
        fetchingPrisonsError: ""
      };
    case PRISONS_FETCH_FAILURE:
      return {
        ...state,
        prisons: [],
        isFetchingPrisons: false,
        fetchingPrisonsError: action.payload
      };
    default:
      return state;
  }
};

export default prisonsReducers;
