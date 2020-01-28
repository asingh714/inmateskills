import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { validate } from "../../utils/validateForm";
import { loginPrison } from "../../redux/actions/user.action";

import "./login-signup-form.styles.scss";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
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
        loginError: this.props.loggingError });
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const errors = validate(username, password);
    if (Object.keys(errors).length === 0) {
      this.props.loginPrison(this.state);
    } else {
      this.setState({
        ...this.state,
        errors: errors
      });
    }
  };

  routeToSignUpPage = () => {
    this.props.history.push(`/signup`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-signup-form">
        {this.props.loggingError && (
          <span className="form-error">{this.props.loggingError}</span>
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

        <span onClick={this.routeToSignUpPage} className="login-signup-route">
          Don't have an account?
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

export default connect(mapStateToProps, { loginPrison })(LoginForm);
