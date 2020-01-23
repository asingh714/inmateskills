import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import CustomButton from "../../components/custom-button/custom-button.component";
import {
  deleteInmate,
} from "../../redux/actions/inmates.action";
import {
  toggleInmateForm,
  toggleDeleteInmateModal
} from "../../redux/actions/forms.action";

import "./inmateBox.styles.scss";

const InmateBox = ({
  inmate,
  prisonId,
  deleteInmate,
  toggleInmateForm,
  toggleDeleteInmateModal,
  isAdmin,
  ...props
}) => {
  const routeToSingleInmateProfilePage = (e, inmateId) => {
    e.preventDefault();
    props.history.push(`/prisons/${prisonId}/inmates/${inmateId}`);
  };

  return (
    <div
      className={`${isAdmin ? "inmate-box" : "inmate-row"}`}
      onClick={
        isAdmin ? null : e => routeToSingleInmateProfilePage(e, inmate.id)
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
        <span className="inmate-box-row-info">{inmate.inmate_info}</span>
      </div>
      {isAdmin ? (
        <div className="inmate-button-container">
          <CustomButton
            type="button"
            text="Delete"
            handleClick={() => toggleDeleteInmateModal(inmate.id)}
            className="purple-text-btn"
          />
          <CustomButton
            type="button"
            text="Edit"
            handleClick={() => toggleInmateForm(inmate.id)}
            className="small-round-cyan"
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
  toggleDeleteInmateModal
})(InmateBox);
