import React from "react";


import SinglePrisonInfo from "../../components/single-prison-info/single-prison-info.component"
import Inmates from "../../components/inmates/inmates.component"
import InmateForm from "../../components/inmate-form/inmate-form.component"

import "./admin.styles.scss"

class Admin extends React.Component {
  render() {
    return (
      <div>
        <SinglePrisonInfo isAdmin {...this.props} />
        <Inmates isAdmin {...this.props} />
        <InmateForm {...this.props} />
      </div>
    );
  }
}

export default (Admin);
