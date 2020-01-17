import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { contactInmate } from "../../redux/actions/inmates.action";

import "./contact-modal.styles.scss";

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

  handleSubmit = event => {
    event.preventDefault();
    const prisonId = this.props.prisonId;
    const inmateId = this.props.inmateId;

    this.props.contactInmate(prisonId, inmateId, this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <span className="close-button" onClick={this.props.toggleContact}>&#9747;</span>
        <FormInput
          name="name"
          onChange={this.handleInputChange}
          placeholder="Name"
          type="text"
          value={this.state.name}
          className="contact-input"
        />
        <FormInput
          name="email"
          onChange={this.handleInputChange}
          placeholder="Email"
          type="text"
          value={this.state.email}
          className="contact-input"
        />
        <FormInput
          name="phone_number"
          onChange={this.handleInputChange}
          placeholder="Phone Number"
          type="text"
          value={this.state.phone_number}
          className="contact-input"
        />
        <textarea
          name="job_details"
          onChange={this.handleInputChange}
          placeholder="Job Details"
          type="text"
          value={this.state.job_details}
          className="large-input"
        />
        <CustomButton text="Submit" className="contact-form-button" />
      </form>
    );
  }
}

export default connect(null, { contactInmate })(ContactModal);
