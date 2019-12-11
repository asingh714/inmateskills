import React from 'react'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signup-form.styles.scss";

const SignupForm = ({...props}) => {

  const routeToLoginPage = () => {
    props.history.push(`/login`)
  }

  return (
    <form>
      <FormInput placeholder="Name"/>
      <FormInput placeholder="Username" />
      <FormInput placeholder="Password" />
      <FormInput placeholder="Confirm Password" />
      <CustomButton text="Submit" />
      <span onClick={() => routeToLoginPage()}>Already have an account?</span>
    </form>
  )

}

export default SignupForm;