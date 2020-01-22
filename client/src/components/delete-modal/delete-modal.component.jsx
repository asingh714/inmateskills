import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./delete-modal.styles.scss";

const DeleteModal = ({ text, handleNo, handleYes, className }) => {
  return (
    <div className={className}>
      <span className="text">{text}</span>
      <div className="delete-button-container">
        <CustomButton text="Yes" type="button" handleClick={handleYes} className="small-round-button purple"/>
        <CustomButton text="No" type="button" handleClick={handleNo} className="small-round-button lightpurple"/>
      </div>
    </div>
  );
};

export default DeleteModal;
