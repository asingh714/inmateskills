import React from "react";
import { connect } from "react-redux";

import SinglePrisonInfo from "../../components/single-prison-info/single-prison-info.component";
import Inmates from "../../components/inmates/inmates.component";
import PrisonForm from "../../components/prison-form/prison-form.component";
import InmateForm from "../../components/inmate-form/inmate-form.component";
import DeleteModal from "../../components/delete-modal/delete-modal.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { toggleInmateForm } from "../../redux/actions/forms.action";

import "./admin.styles.scss";

class Admin extends React.Component {
  render() {
    return (
      <div className="admin-container">
        <SinglePrisonInfo isAdmin {...this.props} />
        {this.props.prisonFormIsHidden ? null : <PrisonForm {...this.props} />}
        <div className="button-container">
          <CustomButton
            type="button"
            text="Add Inmate"
            handleClick={this.props.toggleInmateForm}
            className="small-round-button purple"
          />
        </div>
        <Inmates isAdmin {...this.props} />
        {this.props.inmateFormIsHidden ? null : <InmateForm {...this.props} />}
        {this.props.deleteModalIsHidden ? null : (
          <DeleteModal
            text="Are you sure you want to delete this profile?"
            id={this.props.match.params.prisonId}
            {...this.props}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inmateFormIsHidden: state.forms.inmateFormIsHidden,
    prisonFormIsHidden: state.forms.prisonFormIsHidden,
    deleteModalIsHidden: state.forms.deleteModalIsHidden
  };
};

export default connect(mapStateToProps, { toggleInmateForm })(Admin);
