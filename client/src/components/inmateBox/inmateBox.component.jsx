import React from "react";

import "./inmateBox.styles.scss";

const InmateBox = ({ inmate, prisonId, ...props }) => {

  const routeToSingleInmateProfilePage = (e, inmateId) => {
    e.preventDefault();
    props.history.push(`/prisons/${prisonId}/inmates/${inmateId}`)
  }


  return (
    <div className="box" onClick={e => routeToSingleInmateProfilePage(e, inmate.id)}>
      <img src={inmate.inmate_image} alt="Inmate" />
      <span>{inmate.name}</span>
      <span>{inmate.availability ? "Available" : "Not Available"}</span>
      <span>{inmate.release_date}</span>
    </div>
  );
};

export default InmateBox;
