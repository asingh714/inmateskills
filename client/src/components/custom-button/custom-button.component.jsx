import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ text, type, handleClick }) => {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default CustomButton;
