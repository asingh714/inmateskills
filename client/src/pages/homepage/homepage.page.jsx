import React, { Component } from "react";

import Employee_Img from "../../assets/images/Employee_img.png";
import "./homepage.styles.scss";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <main className="hero-container">
          <h1 className="main-header">
            We help find jobs for soon to be released inmates
          </h1>
          <h2 className="sub-header">
            A platform for prisons to broadcast skills of inmates, to help them
            become more employable after prison
          </h2>
        </main>
        <div className="how-it-works-section">
          <h2 className="how-it-works-header">How it works for employees</h2>
          <div className="image-list-container">
            <img src={Employee_Img} alt="Employee Office" className="how-it-works-image" />
            <div className="list-container">
              <ol>
                <li>
                  Employees can browse through local prisons without signing up
                </li>
                <li>Look through a list of inmate profiles per prison</li>
                <li>
                  Interested? Use the form in the profile to contact the
                  candidate and prison.
                </li>
              </ol>
              <span className="brown-prisons-link">
                Browse Prisons<span id="triangle">&#9658;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
