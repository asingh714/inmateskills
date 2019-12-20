import { TOGGLE_INMATE_FORM } from "../actions/forms.action";

const initialState = {
  inmateFormIsHidden: true,
};

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INMATE_FORM:
      return {
        ...state,
        inmateFormIsHidden: !state.inmateFormIsHidden
      };
    default:
      return state;
  }
};

export default formsReducer;
