import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { editPrison } from "../../redux/actions/user.action";

import "./prison-form.styles.scss";

class PrisonForm extends React.Component {
  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    prison_info: "",
    prison_image: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileSelectedHandler = event => {
    this.setState({
      prison_image: event.target.files[0]
    });
  };

  handleSubmit = event => {
    const { prisonId } = this.props.match.params;
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("address", this.state.address);
    formData.append("city", this.state.city);
    formData.append("state", this.state.state);
    formData.append("zip_code", this.state.zip_code);
    formData.append("prison_info", this.state.prison_info);
    formData.append("prison_image", this.state.prison_image);

    this.props.editPrison(prisonId, formData);
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
        <FormInput
          name="address"
          onChange={this.handleInputChange}
          placeholder="Address"
          type="text"
          value={this.state.address}
        />
        <FormInput
          name="city"
          onChange={this.handleInputChange}
          placeholder="City"
          type="text"
          value={this.state.city}
        />
        <FormInput
          name="state"
          onChange={this.handleInputChange}
          placeholder="State"
          type="text"
          value={this.state.state}
        />
        <FormInput
          name="zip_code"
          onChange={this.handleInputChange}
          placeholder="Zip Code"
          type="text"
          value={this.state.zip_code}
        />
        <label>
          Inmate Image
          <input type="file" onChange={this.fileSelectedHandler} />
        </label>
        <FormInput
          name="prison_info"
          onChange={this.handleInputChange}
          placeholder="Prison Details"
          type="text"
          value={this.state.prison_info}
        />
        <CustomButton
          text="Submit"
          type="submit"
          handleClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default connect(null, { editPrison })(PrisonForm);
