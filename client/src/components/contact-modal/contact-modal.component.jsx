import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { contactInmate } from "../../redux/actions/inmates.action";
import { toggleContactModal } from "../../redux/actions/forms.action";

import "./contact-modal.styles.scss";
import { validateContact } from "../../utils/validateForm";

class ContactModal extends React.Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    job_details: "",
    errors: {}
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { prisonId, inmateId } = this.props;
    const { name, email, phone_number, job_details } = this.state;
    const contact_info = { name, email, phone_number, job_details };

    const errors = validateContact(name, email, phone_number);
    if (Object.keys(errors).length === 0) {
      this.props.contactInmate(prisonId, inmateId, contact_info);
      this.props.toggleContactModal();
    } else {
      this.setState({
        ...this.state,
        errors
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <span className="close-button" onClick={this.props.toggleContactModal}>
          &#9747;
        </span>

        {this.state.errors.name && (
          <span className="form-error">{this.state.errors.name}</span>
        )}
        <FormInput
          name="name"
          onChange={this.handleInputChange}
          placeholder="Name"
          type="text"
          value={this.state.name}
          className="contact-input"
        />
        {this.state.errors.email && (
          <span className="form-error">{this.state.errors.email}</span>
        )}
        <FormInput
          name="email"
          onChange={this.handleInputChange}
          placeholder="Email"
          type="text"
          value={this.state.email}
          className="contact-input"
        />
        {this.state.errors.phone_number && (
          <span className="form-error">{this.state.errors.phone_number}</span>
        )}
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

export default connect(null, { contactInmate, toggleContactModal })(
  ContactModal
);
