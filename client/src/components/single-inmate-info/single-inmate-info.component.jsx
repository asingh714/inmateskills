import React from 'react'
import { connect } from "react-redux";

import {singleFetchInmate} from "../../redux/actions/inmates.action";
import "./single-inmate-info.styles.scss";

class SingleInmateInfo extends React.Component {
  componentDidMount() {
    const {id, inmateId} = this.props.match.params;
    this.props.singleFetchInmate(id, inmateId)
  }
  
  render() {
    const {name, availability, release_date, inmate_info, inmate_image} = this.props.inmate
    return (
      <div>
        <img src={inmate_image} alt="Inmate Profile"/>
        <span>{name}</span>
        <span>{availability ? "Available" : "Not Available"}</span>
        <span>{release_date}</span>
        <span>{inmate_info}</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inmate: state.inmates.inmate
  }
}

export default connect(mapStateToProps, {singleFetchInmate})(SingleInmateInfo)