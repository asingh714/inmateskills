import React, { Component } from 'react'

import LoginForm from "../../components/login-form/login-form.component";
import "./login.styles.scss"

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-form-container">
        <LoginForm {...this.props} /> 
      </div>
    )
  }
}
