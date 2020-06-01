import React, { Component } from "react";
import styles from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={`section-container ${styles.aboutContainer}`}>
        <div className="content-container">
          <h1>Hello from About.</h1>
        </div>
      </div>
    );
  }
}

export default About;
