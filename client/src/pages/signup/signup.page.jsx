import React from 'react'

import SignUpForm from "../../components/signup-form/signup-form.component";
import "./signup.styles.scss";

const SignupPage = ({...props}) => {
  return <SignUpForm {...props} />
}

export default SignupPage