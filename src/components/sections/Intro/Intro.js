import React, { Component } from "react";
import styles from "./Intro.module.css";
import laptopImg from "../../../img/laptop.png";

// Material-UI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Intro extends Component {
  render() {
    return (
      <div className={`section-container ${styles.sectionContainer}`}>
        <div className="content-container">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">Hi, my name is</Typography>
              <Typography variant="h2">Jaime Lovera.</Typography>
              <Typography variant="h2">I build things for the web.</Typography>
              <Typography variant="body1" className={styles.introBody}>
                I am a blah blah blah and I do the blah blah balh with the blah
                blah blah tools and I also work in the area blah blah blah.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <img src={laptopImg} alt="laptop" className={styles.laptopImg} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Intro;
