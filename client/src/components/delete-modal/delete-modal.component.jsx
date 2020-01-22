import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./delete-modal.styles.scss";

const DeleteModal = ({ text, handleNo, handleYes }) => {
  return (
    <>
      <span>{text}</span>
      <CustomButton text="Yes" type="button" handleClick={handleYes} />
      <CustomButton text="No" type="button" handleClick={handleNo} />
    </>
  );
};

export default DeleteModal;
