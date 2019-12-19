import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchInmates } from "../../redux/actions/inmates.action";
import InmateBox from "../inmateBox/inmateBox.component";

class Inmates extends Component {
  componentDidMount() {
    const id = this.props.match.params.prisonId;
    this.props.fetchInmates(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.inmatePosted !== prevProps.inmatePosted) {
      const id = this.props.match.params.prisonId;
      this.props.fetchInmates(id);
    }
  }
  

  render() {
    return (
      <div>
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
    inmatePosted: state.inmates.inmatePosted

  };
};

export default connect(mapStateToProps, { fetchInmates })(Inmates);
