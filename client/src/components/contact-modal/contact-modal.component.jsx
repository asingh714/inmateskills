import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./contact-modal.styles.scss"

class ContactModal extends React.Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    job_details: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
          name="email"
          onChange={this.handleInputChange}
          placeholder="Email"
          type="text"
          value={this.state.email}
        />
         <FormInput
          name="phone_number"
          onChange={this.handleInputChange}
          placeholder="Phone Number"
          type="text"
          value={this.state.phone_number}
        />
         <FormInput
          name="job_details"
          onChange={this.handleInputChange}
          placeholder="Job Details"
          type="text"
          value={this.state.job_details}
        />
        <CustomButton text="Submit" />
      </form>
    );
  }
}

export default ContactModal;
