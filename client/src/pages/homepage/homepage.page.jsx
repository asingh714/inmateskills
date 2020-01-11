import React, { Component } from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import Employee_Img from "../../assets/images/Employee_img.png";
import Prison_Img from "../../assets/images/Prison_img.png";
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
            <img
              src={Employee_Img}
              alt="Employee Office"
              className="how-it-works-image"
            />
            <div className="list-container-right">
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

        <div className="how-it-works-section">
          <h2 className="how-it-works-header">How it works for employees</h2>
          <div className="image-list-container">
            <div className="list-container-left">
              <ol>
                <li>Sign up for Prisoner Skills and set up your account</li>
                <li>Add unlimited inmate profiles to your account</li>
                <li>
                  Wait for potential employees to contact you for candidates
                  they are interested in
                </li>
              </ol>
              <CustomButton text="Get Started" />
            </div>
            <img src={Prison_Img} alt="Prison" className="how-it-works-image" />
          </div>
        </div>
      </div>
    );
  }
}
