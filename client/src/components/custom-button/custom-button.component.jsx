import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ text, type, handleClick, className }) => {
  return (
    <button type={type} onClick={handleClick} className={className}>
      {text}
    </button>
  );
};

export default CustomButton;
