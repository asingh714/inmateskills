import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { addInmate } from "../../redux/actions/inmates.action";

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

  resetForm = event => {
    console.log(event.target);
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
    this.props.addInmate(formData);

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
    // console.log(event.target.files);
    this.setState({
      inmate_image: event.target.files[0],
      // resume: event.target.files[1]
    });
  };

  render() {
    return (
      <form encType="multipart/form-data">
        <FormInput
          name="name"
          onChange={this.handleInputChange}
          placeholder="Name"
          type="text"
          value={this.state.name}
        />
        <label>
          Availability
          <input
            checked={this.state.availability}
            name="availability"
            onChange={this.handleInputChange}
            type="checkbox"
          />
        </label>

        <label>
          Inmate Image
          <input type="file" onChange={this.fileSelectedHandler} />
        </label>
        {/* <label>
          Resume
          <input type="file" onChange={this.fileSelectedHandler} />
        </label> */}
        <FormInput
          name="release_date"
          onChange={this.handleInputChange}
          type="date"
          value={this.state.release_date}
        />

        <textarea
          name="inmate_info"
          onChange={this.handleInputChange}
          placeholder="Inmate Information"
          type="text"
          value={this.state.inmate_info}
        ></textarea>
        <CustomButton text="Reset" type="button" handleClick={this.resetForm} />
        <CustomButton text="Submit" type="submit" handleClick={this.handleSubmit} />
      </form>
    );
  }
}

export default connect(null, { addInmate })(InmateForm);
