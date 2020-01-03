import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";
import { deleteInmate, toggleIsInmateEditing } from "../../redux/actions/inmates.action";
import { toggleInmateForm } from "../../redux/actions/forms.action";


import "./inmateBox.styles.scss";

const InmateBox = ({ inmate, prisonId, deleteInmate, toggleInmateForm, toggleIsInmateEditing, ...props }) => {
  const routeToSingleInmateProfilePage = (e, inmateId) => {
    e.preventDefault();
    props.history.push(`/prisons/${prisonId}/inmates/${inmateId}`);
  };


  const routeToUpdateInmateandToggleInmateForm = (e, inmateId) => {
    e.preventDefault()
    toggleInmateForm()
    toggleIsInmateEditing()
    props.history.push(`/admin/${prisonId}/updateInmate/${inmateId}`)
  }

  return (
    <div
      className="inmate-box-row"
      onClick={
        props.isAdmin ? null : e => routeToSingleInmateProfilePage(e, inmate.id)
      }
    >
      <img src={inmate.inmate_image} alt="Inmate" className="inmate-box-row-image"/>
      <span className="inmate-box-row-name">{inmate.name}</span>
      <span className="inmate-box-row-availability">{inmate.availability ? "Available" : "Not Available"}</span>
      <span className="inmate-box-row-date">{inmate.release_date}</span>
      {props.isAdmin ? (
        <div>
          <CustomButton
            type="button"
            text="Delete"
            handleClick={() => deleteInmate(inmate.id)}
          />
          <CustomButton
            type="button"
            text="Edit"
            handleClick={(e) => routeToUpdateInmateandToggleInmateForm(e, inmate.id)}
          />
        </div>
      ) : (
        <span>See More</span>
      )}
    </div>
  );
};

export default connect(null, { deleteInmate, toggleInmateForm, toggleIsInmateEditing })(InmateBox);
