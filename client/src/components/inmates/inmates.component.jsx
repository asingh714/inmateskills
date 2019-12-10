import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchInmates } from "../../redux/actions/inmates.action";

class Inmates extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchInmates(id);
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.props.inmates.length} Inmates Available for Hire</span>
        </div>
    <div>{this.props.inmates.map(inmate => <h2>{inmate.name}</h2>)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inmates: state.inmates.inmates
  };
};

export default connect(mapStateToProps, { fetchInmates })(Inmates);
