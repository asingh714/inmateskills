import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./form.styles.scss";

const Form = () => {
  return (
    <form>
      <FormInput placeholder="Username" />
      <FormInput placeholder="Password" />
      <CustomButton text="Submit" />
      <span>Don't have an account?</span>
    </form>
  );
};

export default Form;
