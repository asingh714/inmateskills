import React, { Component } from "react";
import { connect } from "react-redux";

import PrisonBox from "../prisonBox/prisonBox.component";
import "./prisons.styles.scss";
import { fetchPrisons } from "../../redux/actions/prisons.actions";

class Prisons extends Component {
  componentDidMount() {
    this.props.fetchPrisons();
  }

  render() {
    return (
      <div>
        {this.props.prisons.map(prison => {
          return <PrisonBox prison={prison} key={prison.id} {...this.props} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prisons: state.prisons.prisons
  };
};

export default connect(mapStateToProps, { fetchPrisons })(Prisons);
