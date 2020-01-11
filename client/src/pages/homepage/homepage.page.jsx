import React, { Component } from "react";

import "./homepage.styles.scss";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <main className="hero-container">
          <h1 className="main-header">We help find jobs for soon to be released inmates</h1>
          <h2 className="sub-header">
            A platform for prisons to broadcast skills of inmates, to help them
            become more employable after prison
          </h2>
        </main>
      </div>
    );
  }
}
