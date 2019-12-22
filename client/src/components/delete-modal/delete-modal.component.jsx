import React from 'react'
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { toggleDeletePrisonModal } from "../../redux/actions/forms.action";

import "./delete-modal.styles.scss";

const DeleteModal = ({text, toggleDeletePrisonModal}) => {
  return (
    <>
      <span>{text}</span>
      <CustomButton text="Yes" type="button" handleClick={() => {}} />
      <CustomButton text="No" type="button" handleClick={toggleDeletePrisonModal} />
    </>
  )
}

export default connect(null, {toggleDeletePrisonModal})(DeleteModal); 