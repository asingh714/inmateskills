import React from "react";

import SignUpForm from "../../components/signup-form/signup-form.component";
import "./signup.styles.scss";

const SignupPage = ({ ...props }) => {
  return (
    <div className="signup-form-container">
      <SignUpForm {...props} />
    </div>
  );
};

export default SignupPage;
