import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import PrisonBox from "../prisonBox/prisonBox.component";
import "./prisons.styles.scss";
import { fetchPrisons } from "../../redux/actions/prisons.actions";

class Prisons extends Component {
  state = {
    value: this.props.prisonStates[0]
  };

  componentDidMount() {
    this.props.fetchPrisons();
  }

  handleChange = event => {
    if (event.target.value !== "Unknown") {
      this.setState({ value: event.target.value });
    } else {
      this.setState({ value: null });
    }
  };

  render() {
    return (
      <div className="prisons-container">
        {this.props.isFetchingPrisons ? (
          <Loader
            type="Oval"
            color="#4c63b6"
            height={80}
            width={80}
            className="circle-loader"
          />
        ) : (
          <div className="prison-box-dropdown-container">
            <select value={this.state.value} onChange={this.handleChange}>
              {this.props.prisonStates.map(state => {
                return (
                  <option value={state}>
                    {state === null ? "Unknown" : state}
                  </option>
                );
              })}
            </select>
            <div className="prison-box-container">
              {this.props.prisons.map(prison => {
                if (prison.state === this.state.value) {
                  return (
                    <PrisonBox
                      prison={prison}
                      key={prison.id}
                      {...this.props}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prisons: state.prisons.prisons,
    isFetchingPrisons: state.prisons.isFetchingPrisons,
    prisonStates: state.prisons.prisonStates
  };
};

export default connect(mapStateToProps, { fetchPrisons })(Prisons);
