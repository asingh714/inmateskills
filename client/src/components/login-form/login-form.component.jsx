import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { loginPrison } from "../../redux/actions/user.action";

import "./login-signup-form.styles.scss";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      let id = this.props.id;
      this.props.history.push(`/admin/${id}`);
    }
  }

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
      <form onSubmit={this.handleSubmit} className="login-signup-form">
        <FormInput
          name="username"
          onChange={this.handleInputChange}
          placeholder="Username"
          type="text"
          value={this.state.username}
          className="login-signup-input"
        />
        <FormInput
          name="password"
          onChange={this.handleInputChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
          className="login-signup-input"
        />
        {this.props.isLoggingIn ? (
          <Loader type="ThreeDots" color="#4c63b6" height={80} width={80} className="loading-dots"/>
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
  };
};

export default connect(mapStateToProps, { loginPrison })(LoginForm);
