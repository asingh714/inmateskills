import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { loginPrison } from "../../redux/actions/user.action";

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

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginPrison(this.state);
  };

  routeToSignUpPage = () => {
    this.props.history.push(`/signup`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <CustomButton text="Submit" />
        <span onClick={this.routeToSignUpPage}>
          Don't have an account?
        </span>
      </form>
    );
  }
}

export default connect(null, { loginPrison })(LoginForm);
