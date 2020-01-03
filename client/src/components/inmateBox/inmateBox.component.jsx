import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import CustomButton from "../../components/custom-button/custom-button.component";
import {
  deleteInmate,
  toggleIsInmateEditing
} from "../../redux/actions/inmates.action";
import { toggleInmateForm } from "../../redux/actions/forms.action";

import "./inmateBox.styles.scss";

const InmateBox = ({
  inmate,
  prisonId,
  deleteInmate,
  toggleInmateForm,
  toggleIsInmateEditing,
  ...props
}) => {
  const routeToSingleInmateProfilePage = (e, inmateId) => {
    e.preventDefault();
    props.history.push(`/prisons/${prisonId}/inmates/${inmateId}`);
  };

  const routeToUpdateInmateandToggleInmateForm = (e, inmateId) => {
    e.preventDefault();
    toggleInmateForm();
    toggleIsInmateEditing();
    props.history.push(`/admin/${prisonId}/updateInmate/${inmateId}`);
  };

  return (
    <div
      className="inmate-box-row"
      onClick={
        props.isAdmin ? null : e => routeToSingleInmateProfilePage(e, inmate.id)
      }
    >
      <img
        src={inmate.inmate_image}
        alt="Inmate"
        className="inmate-box-row-image"
      />
      <div className="text-container">
        <span className="inmate-box-row-name">{inmate.name}</span>
        <span className="inmate-box-row-availability">
          {inmate.availability ? "Available" : "Not Available"}
        </span>
        <span className="inmate-box-row-date">
          {moment(inmate.release_date)
            .utc()
            .format("MMM Do YYYY")}
        </span>
      </div>
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
            handleClick={e =>
              routeToUpdateInmateandToggleInmateForm(e, inmate.id)
            }
          />
        </div>
      ) : (
        <div className="inmate-box-row-btn-container">
          <span className="inmate-box-row-btn">
            See More <span id="triangle">&#9658;</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default connect(null, {
  deleteInmate,
  toggleInmateForm,
  toggleIsInmateEditing
})(InmateBox);
