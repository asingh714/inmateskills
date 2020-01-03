import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { singleFetchInmate } from "../../redux/actions/inmates.action";
import CustomButton from "../custom-button/custom-button.component";
import ContactModal from "../contact-modal/contact-modal.component";

import "./single-inmate-info.styles.scss";

class SingleInmateInfo extends React.Component {
  componentDidMount() {
    const { prisonId, inmateId } = this.props.match.params;
    this.props.singleFetchInmate(prisonId, inmateId);
  }

  render() {
    const { prisonId, inmateId } = this.props.match.params;
    const {
      name,
      availability,
      release_date,
      inmate_info,
      inmate_image
    } = this.props.inmate;
    return (
      <>
        <div className="single-inmate-info-container">
          <img
            src={inmate_image}
            alt="Inmate Profile"
            className="single-inmate-info-image"
          />
          <span className="single-inmate-info-name">{name}</span>
          <span className="single-inmate-info-availability">
            {availability ? "Available" : "Not Available"}
          </span>
          <span className="single-inmate-info-release_date">
            Release Date:{" "}
            {moment(release_date)
              .utc()
              .format("MMM Do YYYY")}
          </span>
          <span className="single-inmate-info-inmate_info">{inmate_info}</span>
          <CustomButton text="Contact" className="single-inmate-info-contact-button"/>
        </div>
        <ContactModal prisonId={prisonId} inmateId={inmateId} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    inmate: state.inmates.inmate
  };
};

export default connect(mapStateToProps, { singleFetchInmate })(
  SingleInmateInfo
);
