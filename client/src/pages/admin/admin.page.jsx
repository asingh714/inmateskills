import React from "react";
import { connect } from "react-redux";

import SinglePrisonInfo from "../../components/single-prison-info/single-prison-info.component";
import Inmates from "../../components/inmates/inmates.component";
import PrisonForm from "../../components/prison-form/prison-form.component";
import InmateForm from "../../components/inmate-form/inmate-form.component";
import DeleteModal from "../../components/delete-modal/delete-modal.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { deletePrison } from "../../redux/actions/user.action";
import { deleteInmate } from "../../redux/actions/inmates.action";

import {
  toggleInmateForm,
  toggleDeletePrisonModal,
  toggleDeleteInmateModal
} from "../../redux/actions/forms.action";

import "./admin.styles.scss";

class Admin extends React.Component {
  handlePrisonDelete = () => {
    let id = this.props.match.params.prisonId;
    this.props.deletePrison(id);
    toggleDeletePrisonModal();
    this.props.history.push("/prisons");
    localStorage.removeItem("token");
  };

  handleInmateDelete = () => {
    this.props.deleteInmate(this.props.idToDelete);
    this.props.toggleDeleteInmateModal(null)
  };

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

        <div
          className={`${!this.props.inmateFormIsHidden ? "bg-container" : ""}`}
        >
          {this.props.inmateFormIsHidden ? null : (
            <InmateForm {...this.props} />
          )}
        </div>

        {this.props.deleteModalIsHidden ? null : (
          <DeleteModal
            text="Are you sure you want to delete your prison profile?"
            handleYes={this.handlePrisonDelete}
            handleNo={this.props.toggleDeletePrisonModal}
            {...this.props}
          />
        )}

        {this.props.deleteInmateModalIsHidden ? null : (
          <DeleteModal
            text="Are you sure you want to delete this inmate profile?"
            handleYes={this.handleInmateDelete}
            handleNo={() => this.props.toggleDeleteInmateModal(null)}
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
    deleteModalIsHidden: state.forms.deleteModalIsHidden,
    deleteInmateModalIsHidden: state.forms.deleteInmateModalIsHidden,
    idToDelete: state.forms.idToDelete
  };
};

export default connect(mapStateToProps, {
  toggleInmateForm,
  deletePrison,
  toggleDeletePrisonModal,
  toggleDeleteInmateModal,
  deleteInmate
})(Admin);
