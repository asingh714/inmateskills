import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";
import { deleteInmate } from "../../redux/actions/inmates.action";

import "./inmateBox.styles.scss";

const InmateBox = ({ inmate, prisonId, deleteInmate, ...props }) => {
  const routeToSingleInmateProfilePage = (e, inmateId) => {
    e.preventDefault();
    props.history.push(`/prisons/${prisonId}/inmates/${inmateId}`);
  };

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
          <CustomButton type="button" text="Edit" />
        </div>
      ) : (
        <span>See More</span>
      )}
    </div>
  );
};

export default connect(null, { deleteInmate })(InmateBox);
