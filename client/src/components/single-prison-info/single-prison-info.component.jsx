import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import CustomButton from "../../components/custom-button/custom-button.component";
import { fetchSinglePrison } from "../../redux/actions/prisons.actions";
import { fetchSingleAdminPrison } from "../../redux/actions/user.action";

import {
  togglePrisonForm,
  toggleDeletePrisonModal
} from "../../redux/actions/forms.action";

import "./single-prison-info.styles.scss";

class SinglePrisonInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.prisonId;
    if (this.props.isAdmin) {
      this.props.fetchSingleAdminPrison(id);
    } else {
      this.props.fetchSinglePrison(id);
    }
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps:", prevProps.prisonUpdated)
    console.log("Props:", this.props.prisonUpdated)

    if (
      this.props.prisonUpdated !== prevProps.prisonUpdated ||
      this.props.singleAdminPrison !== prevProps.singleAdminPrison
    ) {
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
    } = this.props.isAdmin ? this.props.singleAdminPrison : this.props.prison;

    return (
      <>
        {this.props.isFetchingSinglePrison ? (
          <Loader
            type="Oval"
            color="#4c63b6"
            height={80}
            width={80}
            className="circle-loader"
          />
        ) : (
          <div
            className={`${
              this.props.isAdmin ? "admin-prison-container" : null
            }`}
          >
            {prison_image ? (
              <img src={prison_image} alt="Prison" className="prison-banner" />
            ) : null}

            {this.props.isAdmin ? (
              <div className="edit-delete-button-container">
                <CustomButton
                  type="button"
                  text="Edit"
                  handleClick={this.props.togglePrisonForm}
                  className="small-round-button purple"
                />
                <CustomButton
                  type="button"
                  text="Delete"
                  handleClick={this.props.toggleDeletePrisonModal}
                  className="small-round-button lightpurple"
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
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    prison: state.prisons.prison,
    prisonUpdated: state.user.prisonUpdated,
    singleAdminPrison: state.user.singleAdminPrison,
    isFetchingSinglePrison: state.prisons.isFetchingSinglePrison
  };
};

export default connect(mapStateToProps, {
  fetchSinglePrison,
  togglePrisonForm,
  toggleDeletePrisonModal,
  fetchSingleAdminPrison
})(SinglePrisonInfo);
