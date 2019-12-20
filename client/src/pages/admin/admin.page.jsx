import React from "react";
import { connect } from "react-redux";

import SinglePrisonInfo from "../../components/single-prison-info/single-prison-info.component";
import Inmates from "../../components/inmates/inmates.component";
import InmateForm from "../../components/inmate-form/inmate-form.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {toggleInmateForm} from "../../redux/actions/forms.action"

import "./admin.styles.scss";

class Admin extends React.Component {
  // state = {
  //   formIsHidden: true
  // };

  // showForm = () => {
  //   const { formIsHidden } = this.state;
  //   this.setState({
  //     formIsHidden: !formIsHidden
  //   });
  // };

  render() {
    return (
      <div>
        <SinglePrisonInfo isAdmin {...this.props} />
        <CustomButton
          type="button"
          text="Add Inmate"
          handleClick={this.props.toggleInmateForm}
        />
        <Inmates isAdmin {...this.props} />
        {this.props.inmateFormIsHidden ? null : <InmateForm {...this.props} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inmateFormIsHidden: state.forms.inmateFormIsHidden
  }
}

export default connect(mapStateToProps, {toggleInmateForm} )(Admin);
