import React from 'react'
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { toggleDeletePrisonModal } from "../../redux/actions/forms.action";
import { deletePrison } from "../../redux/actions/user.action"

import "./delete-modal.styles.scss";

const DeleteModal = ({text, toggleDeletePrisonModal, deletePrison, id, props}) => {

  const handleDelete = (id) => {
    deletePrison(id)
    toggleDeletePrisonModal()
    props.history.push("/prisons")
    localStorage.removeItem('token')
  }

  return (
    <>
      <span>{text}</span>
      <CustomButton text="Yes" type="button" handleClick={handleDelete} />
      <CustomButton text="No" type="button" handleClick={toggleDeletePrisonModal} />
    </>
  )
}

export default connect(null, {toggleDeletePrisonModal, deletePrison})(DeleteModal); 