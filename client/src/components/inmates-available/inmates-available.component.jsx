import React from "react";
import { connect } from "react-redux";

import "./inmates-available.styles.scss";

const InmatesAvailable = props => {
  return (
    // <div>
      <span className="inmate-text">
        <span id="inmate-number">{props.inmates.length}</span> Inmates Available
        for Hire
      </span>
    // </div>
  );
};

const mapStateToProps = state => {
  return {
    inmates: state.inmates.inmates
  };
};

export default connect(mapStateToProps, {})(InmatesAvailable);
