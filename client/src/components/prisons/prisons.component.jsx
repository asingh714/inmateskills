import React, { Component } from 'react'
import { connect } from "react-redux";

import "./prisons.styles.scss"; 
import {fetchPrisons} from "../../redux/actions/prisons.actions"

class Prisons extends Component {

  componentDidMount() {
    this.props.fetchPrisons();
  }
  
  
  render() {
    return (
      <div>
        HI 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    prisons: state.prisons.prisons
  }
}

export default connect(
  mapStateToProps,
  { fetchPrisons }
)(Prisons); 