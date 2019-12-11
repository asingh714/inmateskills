import {
  PRISONS_FETCH_START,
  PRISONS_FETCH_SUCCESS,
  PRISONS_FETCH_FAILURE,
  SINGLE_PRISON_FETCH_START,
  SINGLE_PRISON_FETCH_SUCCESS,
  SINGLE_PRISON_FETCH_FAILURE,
} from "../actions/prisons.actions";

const initialState = {
  prisons: [],
  isFetchingPrisons: false,
  fetchingPrisonsError: "",
  prison: {},
  isFetchingSinglePrison: false,
  fetchingSinglePrisonError: "",
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
    case SINGLE_PRISON_FETCH_START:
      return {
        ...state,
        prison: {},
        isFetchingSinglePrison: true,
        fetchingSinglePrisonError: ""
      };
    case SINGLE_PRISON_FETCH_SUCCESS:
      return {
        ...state,
        prison: action.payload,
        isFetchingSinglePrison: false,
        fetchingSinglePrisonError: ""
      };
    case SINGLE_PRISON_FETCH_FAILURE:
      return {
        ...state,
        prison: {},
        isFetchingSinglePrison: false,
        fetchingSinglePrisonError: action.payload
      };
    default:
      return state;
  }
};

export default prisonsReducers;
