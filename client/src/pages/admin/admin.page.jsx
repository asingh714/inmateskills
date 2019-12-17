import React from "react";

import SinglePrisonInfo from "../../components/single-prison-info/single-prison-info.component"
import "./admin.styles.scss"

class Admin extends React.Component {

  // state = {
  //   selectedImage: null
  // }

  // fileSelectedHandler = event => {
  //   this.setState({
  //     selectedImage: event.target.files[0]
  //   })
  // }


  render() {
    return (
      <div>
        {/* <input type="file" onChange={this.fileSelectedHandler} /> */}
        <SinglePrisonInfo {...this.props} />
      </div>
    );
  }
}

export default Admin;
