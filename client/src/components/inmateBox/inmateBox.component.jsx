import React from "react";

import "./inmateBox.styles.scss";

const InmateBox = ({ inmate, prisonId, ...props }) => {
  const routeToSingleInmateProfilePage = (e, inmateId) => {
    e.preventDefault();
    props.history.push(`/prisons/${prisonId}/inmates/${inmateId}`);
  };

  return (
    <div
      className="box"
      onClick={props.isAdmin ? null : e => routeToSingleInmateProfilePage(e, inmate.id)}
    >
      <img src={inmate.inmate_image} alt="Inmate" />
      <span>{inmate.name}</span>
      <span>{inmate.availability ? "Available" : "Not Available"}</span>
      <span>{inmate.release_date}</span>
      {props.isAdmin ? (
        <div>
          <button>delete</button> <button>edit</button>
        </div>
      ) : (
        <span>See More</span>
      )}
    </div>
  );
};

export default InmateBox;
