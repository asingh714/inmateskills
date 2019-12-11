import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./login-form.styles.scss";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  routeToSignUpPage = () => {
    this.props.history.push(`/signup`);
  };

  render() {
    return (
      <form>
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
          type="text"
          value={this.state.password}
        />
        <CustomButton text="Submit" />
        <span onClick={() => this.routeToSignUpPage()}>Don't have an account?</span>
      </form>
    );
  }
}

export default LoginForm;
