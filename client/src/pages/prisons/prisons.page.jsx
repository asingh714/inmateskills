import React, { Component } from "react";

import Prisons from "../../components/prisons/prisons.component";
import "./prisons.styles.scss";

export default class PrisonPage extends Component {
  render() {
    return <Prisons {...this.props} />;
  }
}
