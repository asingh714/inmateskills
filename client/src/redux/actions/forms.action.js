export const TOGGLE_INMATE_FORM = "TOGGLE_INMATE_FORM";

export const toggleInmateForm = (id) => {
  return {
    type: TOGGLE_INMATE_FORM,
    id: id 
  };
};

export const TOGGLE_PRISON_FORM = "TOGGLE_PRISON_FORM"

export const togglePrisonForm = () => {
  return {
    type: TOGGLE_PRISON_FORM
  }
}


export const TOGGLE_DELETE_PRISON_MODAL = "TOGGLE_DELETE_PRISON_MODAL"

export const toggleDeletePrisonModal = () => {
  return {
    type: TOGGLE_DELETE_PRISON_MODAL
  }
}
 
export const TOGGLE_DELETE_INMATE_MODAL = "TOGGLE_DELETE_INMATE_MODAL"

export const toggleDeleteInmateModal = (id) => {
  return {
    type: TOGGLE_DELETE_INMATE_MODAL,
    id: id
  }
}