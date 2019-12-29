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
      <form onSubmit={this.handleSubmit} className="login-form">
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
        <CustomButton text="Submit" className="login-signup-submit"/>
        <span onClick={this.routeToSignUpPage} className="login-route-text">Don't have an account?</span>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.user.id
  };
};

export default connect(mapStateToProps, { loginPrison })(LoginForm);
