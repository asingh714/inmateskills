import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signup-form.styles.scss";

class SignupForm extends React.Component {
  state = {
    username: "",
    name: "",
    password: "",
    confirmPassword: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  routeToLoginPage = () => {
    this.props.history.push(`/login`);
  };

  render() {
    return (
      <form>
        <FormInput
          name="name"
          onChange={this.handleInputChange}
          placeholder="Name"
          type="text"
          value={this.state.name}
        />
        <FormInput
          name="username"
          onChange={this.handleInputChange}
          placeholder="Username"
          type="text"
          value={this.state.username}
        />
        <FormInput
          name="password"
          onChange={this.handleInputChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
        />
        <FormInput
          name="confirmPassword"
          onChange={this.handleInputChange}
          placeholder="Confirm Password"
          type="password"
          value={this.state.confirmPassword}
        />
        <CustomButton text="Submit" />
        <span onClick={this.routeToLoginPage}>Already have an account?</span>
      </form>
    );
  }
}

export default SignupForm;
