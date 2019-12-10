import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchInmates } from "../../redux/actions/inmates.action";
import InmateBox from "../inmateBox/inmateBox.component";

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
        <div>
          {this.props.inmates.map(inmate => (
            <InmateBox key={inmate.id} prisonId={this.props.match.params.id} inmate={inmate} {...this.props}/>
          ))}
        </div>
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
