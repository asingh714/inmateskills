import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ name, onChange, placeholder, type, value, className }) => {
  return (
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      className={className}
    />
  );
};

export default FormInput;
