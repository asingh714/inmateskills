import React from "react";

import SinglePrisonInfo from "../../components/single-prison-info/single-prison-info.component";
import Inmates from "../../components/inmates/inmates.component";

import "./single-selected-prison.styles.scss";

class SingleSelectedPrisonPage extends React.Component {

  render() {
    return (
      <div>
        <SinglePrisonInfo {...this.props} />
        <Inmates {...this.props} />
      </div>
    );
  }
}

export default SingleSelectedPrisonPage;
