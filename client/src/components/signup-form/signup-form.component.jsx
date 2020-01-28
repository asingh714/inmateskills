import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { validate } from "../../utils/validateForm";
import { registerPrison } from "../../redux/actions/user.action";

import "../login-form/login-signup-form.styles.scss";

class SignupForm extends React.Component {
  state = {
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
    errors: {},
    loginError: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      let id = this.props.id;
      this.props.history.push(`/admin/${id}`);
    }
    if (this.props.loggingError !== prevProps.loggingError) {
      this.setState({
        ...this.state,
        loginError: this.props.loggingError
      });
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, username, password, confirmPassword } = this.state;
    const errors = validate(username, password, name, confirmPassword);
    if (Object.keys(errors).length === 0) {
      this.props.registerPrison({
        name,
        username,
        password
      });
    } else {
      this.setState({
        ...this.state,
        errors: errors
      });
    }
  };

  routeToLoginPage = () => {
    this.props.history.push(`/login`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-signup-form">
        {this.props.loggingError && (
          <span className="form-error">{this.props.loggingError}</span>
        )}
        <FormInput
          name="name"
          onChange={this.handleInputChange}
          placeholder="Prison Name"
          type="text"
          value={this.state.name}
          className="login-signup-input"
        />
        {this.state.errors.name && (
          <span className="form-error">{this.state.errors.name}</span>
        )}
        <FormInput
          name="username"
          onChange={this.handleInputChange}
          placeholder="Username"
          type="text"
          value={this.state.username}
          className="login-signup-input"
        />
        {this.state.errors.username && (
          <span className="form-error">{this.state.errors.username}</span>
        )}
        <FormInput
          name="password"
          onChange={this.handleInputChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
          className="login-signup-input"
        />
        {this.state.errors.password && (
          <span className="form-error">{this.state.errors.password}</span>
        )}
        <FormInput
          name="confirmPassword"
          onChange={this.handleInputChange}
          placeholder="Confirm Password"
          type="password"
          value={this.state.confirmPassword}
          className="login-signup-input"
        />
        {this.state.errors.confirmPassword && (
          <span className="form-error">
            {this.state.errors.confirmPassword}
          </span>
        )}
        {this.props.isLoggingIn ? (
          <Loader
            type="ThreeDots"
            color="#4c63b6"
            height={80}
            width={80}
            className="loading-dots"
          />
        ) : (
          <CustomButton text="Submit" className="wide-purple-submit" />
        )}
        <span onClick={this.routeToLoginPage} className="login-signup-route">
          Already have an account?
        </span>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.user.loggedInUser.id,
    isLoggingIn: state.user.isLoggingIn,
    loggingError: state.user.loggingError
  };
};

export default connect(mapStateToProps, { registerPrison })(SignupForm);
