import {
  TOGGLE_INMATE_FORM,
  TOGGLE_PRISON_FORM,
  TOGGLE_DELETE_PRISON_MODAL,
  TOGGLE_DELETE_INMATE_MODAL,
  TOGGLE_CONTACT_MODAL
} from "../actions/forms.action";

const initialState = {
  inmateFormIsHidden: true,
  prisonFormIsHidden: true,
  deleteModalIsHidden: true,
  deleteInmateModalIsHidden: true,
  contactModalIsHidden: true,
  idToEdit: null,
  idToDelete: null
};

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INMATE_FORM:
      return {
        ...state,
        inmateFormIsHidden: !state.inmateFormIsHidden,
        idToEdit: action.id
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
    case TOGGLE_CONTACT_MODAL:
      return {
        ...state,
        contactModalIsHidden: !state.contactModalIsHidden
      }
    default:
      return state;
  }
};

export default formsReducer;
