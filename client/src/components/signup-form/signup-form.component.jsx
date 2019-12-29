import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { registerPrison } from "../../redux/actions/user.action";

import "../login-form/login-signup-form.styles.scss";

class SignupForm extends React.Component {
  state = {
    username: "",
    name: "",
    password: "",
    confirmPassword: ""
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
    const { name, username, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      this.props.registerPrison({
        name,
        username,
        password
      });
    }
  };

  routeToLoginPage = () => {
    this.props.history.push(`/login`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-signup-form">
        <FormInput
          name="name"
          onChange={this.handleInputChange}
          placeholder="Prison Name"
          type="text"
          value={this.state.name}
          className="login-signup-input"
        />
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
        <FormInput
          name="confirmPassword"
          onChange={this.handleInputChange}
          placeholder="Confirm Password"
          type="password"
          value={this.state.confirmPassword}
          className="login-signup-input"
        />
        <CustomButton text="Submit" className="login-signup-submit" />
        <span onClick={this.routeToLoginPage} className="login-signup-route">
          Already have an account?
        </span>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.user.id
  };
};

export default connect(mapStateToProps, { registerPrison })(SignupForm);
