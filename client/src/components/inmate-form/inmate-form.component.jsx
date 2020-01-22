import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { addInmate, editInmate } from "../../redux/actions/inmates.action";
import { toggleInmateForm } from "../../redux/actions/forms.action";

import "./inmate-form.styles.scss";

class InmateForm extends React.Component {
  state = {
    name: "",
    availability: false,
    inmate_image: null,
    // resume: null,
    release_date: "",
    inmate_info: ""
  };

  componentDidMount() {
    const inmateId = this.props.match.params.inmateId;
    const inmate = this.props.inmates.find(
      inmate => `${inmate.id}` === inmateId
    );

    if (this.props.inmateToBeEdited) {
      this.setState({
        name: inmate.name,
        availability: inmate.availability,
        inmate_image: inmate.inmate_image,
        release_date: inmate.release_date,
        inmate_info: inmate.inmate_info
      });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const inmateId = this.props.match.params.inmateId;
  //   const inmate = this.props.inmates.find(inmate => `${inmate.id}` === inmateId);

  //   if (this.props.inmateToBeEdited && prevProps.inmateToBeEdited !== this.props.inmateToBeEdited) {
  //     this.setState({
  //       name: inmate.name,
  //       availability: inmate.availability,
  //       inmate_image: inmate.inmate_image,
  //       release_date: inmate.release_date,
  //       inmate_info: inmate.inmate_info
  //     });
  //   }
  // }

  resetForm = event => {
    event.preventDefault();
    this.setState({
      name: "",
      availability: false,
      inmate_image: null,
      // resume: null,
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
    formData.append("name", this.state.name);
    formData.append("availability", this.state.availability);
    formData.append("inmate_image", this.state.inmate_image);
    // formData.append("resume", this.state.resume);
    formData.append("release_date", this.state.release_date);
    formData.append("inmate_info", this.state.inmate_info);
    const inmateId = this.props.match.params.inmateId;

    if (this.props.inmateToBeEdited) {
      this.props.editInmate(inmateId, formData);
    } else {
      this.props.addInmate(formData);
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
        <span className="close-button" onClick={this.props.toggleInmateForm}>&#9747;</span>
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

        <FormInput
          name="release_date"
          onChange={this.handleInputChange}
          type="date"
          value={this.state.release_date}
          className="date-input"
        />

        <label className="file-label">
          <span className="file-input">Inmate Image</span>
          <input type="file" onChange={this.fileSelectedHandler} />
        </label>
        {/* <label>
          Resume
          <input type="file" onChange={this.fileSelectedHandler} />
        </label> */}

        <textarea
          name="inmate_info"
          onChange={this.handleInputChange}
          placeholder="Inmate Information"
          type="text"
          value={this.state.inmate_info}
          className="inmate_info_textarea"
        ></textarea>

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
    inmateToBeEdited: state.inmates.inmateToBeEdited
  };
};

export default connect(mapStateToProps, { addInmate, editInmate, toggleInmateForm })(InmateForm);
