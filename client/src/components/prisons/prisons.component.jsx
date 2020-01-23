import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import PrisonBox from "../prisonBox/prisonBox.component";
import "./prisons.styles.scss";
import { fetchPrisons } from "../../redux/actions/prisons.actions";

class Prisons extends Component {
  componentDidMount() {
    this.props.fetchPrisons();
  }

  render() {
    return (
      <>
        {this.props.isFetchingPrisons ? (
          <Loader type="Oval" color="#4c63b6" height={80} width={80} className="circle-loader" />
        ) : (
          <div className="prisons-container">
            {this.props.prisons.map(prison => {
              return (
                <PrisonBox prison={prison} key={prison.id} {...this.props} />
              );
            })}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    prisons: state.prisons.prisons,
    isFetchingPrisons: state.prisons.isFetchingPrisons
  };
};

export default connect(mapStateToProps, { fetchPrisons })(Prisons);
