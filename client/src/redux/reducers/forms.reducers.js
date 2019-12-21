import { TOGGLE_INMATE_FORM, TOGGLE_PRISON_FORM } from "../actions/forms.action";

const initialState = {
  inmateFormIsHidden: true,
  prisonFormIsHidden: true
};

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INMATE_FORM:
      return {
        ...state,
        inmateFormIsHidden: !state.inmateFormIsHidden
      };
      case TOGGLE_PRISON_FORM:
          return {
            ...state,
            prisonFormIsHidden: !state.prisonFormIsHidden
          };
    default:
      return state;
  }
};

export default formsReducer;
