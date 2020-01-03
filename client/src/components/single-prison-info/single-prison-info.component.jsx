import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";
import { fetchSinglePrison } from "../../redux/actions/prisons.actions";
import {
  togglePrisonForm,
  toggleDeletePrisonModal
} from "../../redux/actions/forms.action";

import "./single-prison-info.styles.scss";

class SinglePrisonInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.prisonId;
    this.props.fetchSinglePrison(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.prisonUpdated !== prevProps.prisonUpdated) {
      const id = this.props.match.params.prisonId;
      this.props.fetchSinglePrison(id);
    }
  }

  render() {
    const {
      name,
      address,
      city,
      state,
      zip_code,
      prison_info,
      prison_image
    } = this.props.prison;
    return (
      <div>
        {prison_image ? (
          <img src={prison_image} alt="Prison" className="prison-banner" />
        ) : null}

        {this.props.isAdmin ? (
          <div>
            <CustomButton
              type="button"
              text="Edit Profile"
              handleClick={this.props.togglePrisonForm}
            />
            <CustomButton
              type="button"
              text="Delete Profile"
              handleClick={this.props.toggleDeletePrisonModal}
            />
          </div>
        ) : null}

        <div className="prison-info-container">
          <h1 className="prison-name">{name}</h1>
          <span className="prison-address">
            {address} {city}, {state} {zip_code}
          </span>
          <span className="prison-info">{prison_info}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prison: state.prisons.prison,
    prisonUpdated: state.user.prisonUpdated
  };
};

export default connect(mapStateToProps, {
  fetchSinglePrison,
  togglePrisonForm,
  toggleDeletePrisonModal
})(SinglePrisonInfo);
