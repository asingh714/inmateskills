import React from "react";

import SingleInmateInfo from "../../components/single-inmate-info/single-inmate-info.component";

import "./single-selected-inmate-profile.styles.scss";

const SingleSelectedInmateProfile = ({ ...props }) => {
  return (
    <div className="single-inmate-profile-container">
      <SingleInmateInfo isAdmin={false} {...props} />
    </div>
  );
};

export default SingleSelectedInmateProfile;
