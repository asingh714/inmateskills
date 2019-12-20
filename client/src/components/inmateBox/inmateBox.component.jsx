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
      className="box"
      onClick={
        props.isAdmin ? null : e => routeToSingleInmateProfilePage(e, inmate.id)
      }
    >
      <img src={inmate.inmate_image} alt="Inmate" />
      <span>{inmate.name}</span>
      <span>{inmate.availability ? "Available" : "Not Available"}</span>
      <span>{inmate.release_date}</span>
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
