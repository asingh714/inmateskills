import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import Loader from "react-loader-spinner";

import CustomButton from "../custom-button/custom-button.component";
import ContactModal from "../contact-modal/contact-modal.component";

import { singleFetchInmate } from "../../redux/actions/inmates.action";
import { toggleContactModal } from "../../redux/actions/forms.action"
import "./single-inmate-info.styles.scss";

class SingleInmateInfo extends React.Component {
  // add to form reducer
  state = {
    isVisible: false
  };

  componentDidMount() {
    const { prisonId, inmateId } = this.props.match.params;
    this.props.singleFetchInmate(prisonId, inmateId);
  }

  toggleContact = event => {
    event.preventDefault();

    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

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
        {this.props.isFetchingSingleInmate ? (
          <Loader
            type="Oval"
            color="#4c63b6"
            height={80}
            width={80}
            className="circle-loader"
          />
        ) : (
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
              <span className="single-inmate-info-inmate_info">
                {inmate_info}
              </span>
              <CustomButton
                text="Contact"
                className="med-cyan-button"
                handleClick={this.props.toggleContactModal}
              />
            </div>
            <div className={`${!this.props.contactModalIsHidden ? "bg-container" : ""}`}>
              {!this.props.contactModalIsHidden && (
                <ContactModal
                  prisonId={prisonId}
                  inmateId={inmateId}
                  // toggleContact={this.toggleContact}
                />
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    inmate: state.inmates.inmate,
    isFetchingSingleInmate: state.inmates.isFetchingSingleInmate,
    contactModalIsHidden: state.forms.contactModalIsHidden
  };
};

export default connect(mapStateToProps, { singleFetchInmate, toggleContactModal })(
  SingleInmateInfo
);
