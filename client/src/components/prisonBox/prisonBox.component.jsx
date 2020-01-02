import React from "react";

import "./prisonBox.styles.scss";

const PrisonBox = ({ prison, ...props }) => {

  const routeToSinglePrisonProfilePage = (e, id) => {
    e.preventDefault();
    props.history.push(`/prisons/${id}`)
  }


  return (
    <div className="prison-box" onClick={e => routeToSinglePrisonProfilePage(e, prison.id)}>
      <img src={prison.prison_image} alt="Prison" className="prison-box-banner"/>
      <span className="prison-box-title">{prison.name}</span>
      <span className="prison-box-count"> Inmates Available for Hire</span>
      <span className="prison-box-street">{prison.address}</span>
      <span className="prison-box-city-state">{prison.city}, {prison.state}</span>
      <div className="prison-box-button">See More <span id="triangle">&#9658;</span></div>
    </div>
  );
};

export default PrisonBox;
