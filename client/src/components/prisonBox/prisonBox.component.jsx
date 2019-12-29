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
      <span>{prison.name}</span>
      <span> Inmates Available for Hire</span>
      <span>{prison.address}</span>
      <span>{prison.city}</span>
      <span>{prison.state}</span>
    </div>
  );
};

export default PrisonBox;
