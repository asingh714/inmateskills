import {
  TOGGLE_INMATE_FORM,
  TOGGLE_PRISON_FORM,
  TOGGLE_DELETE_PRISON_MODAL,
  TOGGLE_DELETE_INMATE_MODAL
} from "../actions/forms.action";

const initialState = {
  inmateFormIsHidden: true,
  prisonFormIsHidden: true,
  deleteModalIsHidden: true,
  deleteInmateModalIsHidden: true,
  idToDelete: null
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
    case TOGGLE_DELETE_PRISON_MODAL:
      return {
        ...state,
        deleteModalIsHidden: !state.deleteModalIsHidden
      };
    case TOGGLE_DELETE_INMATE_MODAL:
      return {
        ...state,
        deleteInmateModalIsHidden: !state.deleteInmateModalIsHidden,
        idToDelete: action.id
      };
    default:
      return state;
  }
};

export default formsReducer;
