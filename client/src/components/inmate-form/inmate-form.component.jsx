import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { addInmate, editInmate } from "../../redux/actions/inmates.action";
import { toggleInmateForm } from "../../redux/actions/forms.action";
import { validateAddInmate } from "../../utils/validateForm";

import "./inmate-form.styles.scss";

class InmateForm extends React.Component {
  state = {
    name: this.props.inmateToEdit ? this.props.inmateToEdit.name : "",
    availability: this.props.inmateToEdit
      ? this.props.inmateToEdit.availability
      : false,
    inmate_image: this.props.inmateToEdit
      ? this.props.inmateToEdit.inmate_image
      : null,
    release_date: this.props.inmateToEdit
      ? this.props.inmateToEdit.release_date
      : "",
    inmate_info: this.props.inmateToEdit
      ? this.props.inmateToEdit.inmate_info
      : "",
      errors: {}
  };

  resetForm = event => {
    event.preventDefault();
    this.setState({
      name: "",
      availability: false,
      inmate_image: null,
      release_date: "",
      inmate_info: ""
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let formData = new FormData();
    const { name, availability, inmate_image, release_date, inmate_info} = this.state;
    
    formData.append("name", name);
    formData.append("availability", availability);
    formData.append("inmate_image", inmate_image);
    formData.append("release_date", release_date);
    formData.append("inmate_info", inmate_info);
    
    const errors = validateAddInmate(release_date)
    
    if (Object.keys(errors).length === 0) {

      if (this.props.idToEdit) {
        this.props.editInmate(this.props.idToEdit, formData);
        this.props.toggleInmateForm(null);
      } else {
        this.props.addInmate(formData);
        this.props.toggleInmateForm(null);
      }
    } else {
      this.setState({
        ...this.state,
        errors: errors
      })
    }

    this.setState({
      name: "",
      availability: false,
      inmate_image: null,
      resume: null,
      release_date: "",
      inmate_info: ""
    });
  };

  fileSelectedHandler = event => {
    this.setState({
      inmate_image: event.target.files[0]
    });
  };

  render() {
    return (
      <form encType="multipart/form-data" className="inmate-form-container">
        <span
          className="close-button"
          onClick={() => this.props.toggleInmateForm(null)}
        >
          &#9747;
        </span>
        <FormInput
          name="name"
          onChange={this.handleInputChange}
          placeholder="Name"
          type="text"
          value={this.state.name}
          className="contact-input"
        />
        <label className="avail-label">
          <input
            checked={this.state.availability}
            name="availability"
            onChange={this.handleInputChange}
            type="checkbox"
            className="avail-checkbox"
          />
          <span>Available for work</span>
        </label>
        <label className="date-label">
          <span className="date-text">*Release Date</span>
          <FormInput
            name="release_date"
            onChange={this.handleInputChange}
            type="date"
            value={this.state.release_date}
            className="date-input"
          />
        </label>
        {this.state.errors.date && (
          <span className="form-error">{this.state.errors.date}</span>
        )}

        <label className="file-label">
          <span className="file-input">Inmate Image</span>
          <input type="file" onChange={this.fileSelectedHandler} />
        </label>

        <textarea
          name="inmate_info"
          onChange={this.handleInputChange}
          placeholder="Inmate Information"
          type="text"
          value={this.state.inmate_info}
          className="inmate_info_textarea"
        ></textarea>

        <span className="required-text">*Required</span>

        <div className="inmate-btn-container">
          <CustomButton
            text="Clear"
            type="button"
            handleClick={this.resetForm}
            className="med-btn light"
          />
          <CustomButton
            text="Submit"
            type="submit"
            handleClick={this.handleSubmit}
            className="med-btn dark"
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    inmates: state.inmates.inmates,
    idToEdit: state.forms.idToEdit,
    inmateToEdit: state.forms.idToEdit
      ? state.inmates.inmates.find(inmate => inmate.id === state.forms.idToEdit)
      : null
  };
};

export default connect(mapStateToProps, {
  addInmate,
  editInmate,
  toggleInmateForm
})(InmateForm);
