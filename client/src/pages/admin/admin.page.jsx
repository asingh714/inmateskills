import React from "react";

import SinglePrisonInfo from "../../components/single-prison-info/single-prison-info.component";
import Inmates from "../../components/inmates/inmates.component";
import InmateForm from "../../components/inmate-form/inmate-form.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./admin.styles.scss";

class Admin extends React.Component {
  state = {
    formIsHidden: true
  };

  showForm = () => {
    const { formIsHidden } = this.state;
    this.setState({
      formIsHidden: !formIsHidden
    });
  };

  render() {
    return (
      <div>
        <SinglePrisonInfo isAdmin {...this.props} />
        <CustomButton
          type="button"
          text="Add Inmate"
          handleClick={this.showForm}
        />
        <Inmates isAdmin {...this.props} />
        {this.state.formIsHidden ? null : <InmateForm {...this.props} />}
      </div>
    );
  }
}

export default Admin;
