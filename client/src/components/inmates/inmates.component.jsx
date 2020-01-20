import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchInmates } from "../../redux/actions/inmates.action";
import InmateBox from "../inmateBox/inmateBox.component";

import "./inmates.styles.scss";

class Inmates extends Component {
  componentDidMount() {
    const id = this.props.match.params.prisonId;
    this.props.fetchInmates(id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { inmatePosted, inmateDeleted, inmateEdited } = this.props;
    if (
      inmatePosted !== prevProps.inmatePosted ||
      inmateDeleted !== prevProps.inmateDeleted || inmateEdited !== prevProps.inmateEdited
    ) {
      const id = this.props.match.params.prisonId;
      this.props.fetchInmates(id);
    }
  }

  render() {
    return (
      <div className={`${this.props.isAdmin ? "admin-inmate-container" : "inmates-row-container"}`}>
        {this.props.inmates.map(inmate => (
          <InmateBox
            key={inmate.id}
            prisonId={this.props.match.params.prisonId}
            inmate={inmate}
            {...this.props}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inmates: state.inmates.inmates,
    inmatePosted: state.inmates.inmatePosted,
    inmateDeleted: state.inmates.inmateDeleted,
    inmateEdited: state.inmates.inmateEdited
  };
};

export default connect(mapStateToProps, { fetchInmates })(Inmates);
