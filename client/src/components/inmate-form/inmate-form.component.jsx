import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { addInmate } from "../../redux/actions/inmates.action"
import "./inmate-form.styles.scss";

class InmateForm extends React.Component {
  state = {
    name: "",
    availability: false,
    inmate_image: null,
    resume: null,
    release_date: "",
    inmate_info: ""
  };

  resetForm = event => {
    event.preventDefault();
    this.setState({
      name: "",
      availability: false,
      inmate_image: null,
      resume: null,
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

  // LEFT OFF HERE --> have to test 
  handleSubmit = event => {
    event.preventDefault()
    this.props.addInmate(this.state)
  };

  fileSelectedHandler = event => {
    this.setState({
      inmate_image: event.target.files[0],
      resume: event.target.files[1]
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
        <label>
          Resume
          <input type="file" onChange={this.fileSelectedHandler} />
        </label>
        <textarea
          name="inmate_info"
          onChange={this.handleInputChange}
          placeholder="Inmate Information"
          type="text"
          value={this.state.inmate_info}
        ></textarea>
        <CustomButton text="Clear" onClick={this.resetForm} />
        <CustomButton text="Submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default connect( null, { addInmate })(InmateForm);
