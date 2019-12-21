import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";
import { fetchSinglePrison } from "../../redux/actions/prisons.actions";
import { togglePrisonForm } from "../../redux/actions/forms.action";

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
        {prison_image ? <img src={prison_image} alt="Prison" /> : null}
        {prison_image && name ? null : (
          <CustomButton
            type="button"
            text="Add Profile"
            handleClick={this.props.togglePrisonForm}
          />
        )}
        {this.props.isAdmin && prison_image && name ? (
          <div>
            <CustomButton
              type="button"
              text="Edit Profile"
              handleClick={this.props.togglePrisonForm}
            />
            <button>Delete</button>
          </div>
        ) : null}

        <h1>{name}</h1>
        <span>{address}</span>
        <span>{city}</span>
        <span>{state}</span>
        <span>{zip_code}</span>
        <span>{prison_info}</span>
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
  togglePrisonForm
})(SinglePrisonInfo);
