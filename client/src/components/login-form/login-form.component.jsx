import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./login-form.styles.scss";

const LoginForm = ({...props}) => {

  const routeToSignUpPage = () => {
    props.history.push(`/signup`)
  }

  return (
    <form>
      <FormInput placeholder="Username" />
      <FormInput placeholder="Password" />
      <CustomButton text="Submit" />
      <span onClick={() => routeToSignUpPage()}>Don't have an account?</span>
    </form>
  );
};

export default LoginForm;
