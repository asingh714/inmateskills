import React from "react";
import { connect } from "react-redux";

import { fetchSinglePrison } from "../../redux/actions/prisons.actions";
import "./single-prison-info.styles.scss";

class SinglePrisonInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.prisonId;
    this.props.fetchSinglePrison(id);
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
        <img src={prison_image} alt="Prison" />
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
    prison: state.prisons.prison
  };
};

export default connect(mapStateToProps, { fetchSinglePrison })(
  SinglePrisonInfo
);
