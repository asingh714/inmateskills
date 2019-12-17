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
      let id = this.props.id
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

const mapStateToProps = state => {
  return {
    id: state.user.id
  }
}

export default connect(mapStateToProps, { loginPrison })(LoginForm);
