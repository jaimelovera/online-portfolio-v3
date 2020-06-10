import React from "react";
import Technologies from "./Technologies";

import MyHoverLink from "../../../util/MyHoverLink";
import ProfileImg from "../../../img/profile-photo.jpg";
import WebDevImg from "../../../img/web-development.png";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  sectionContainer: {
    overflow: "hidden",
  },
  profileImg: {
    zIndex: 1,
    position: "relative",
    width: "100%",
    height: "auto",
    maxWidth: 275,
    margin: "40px 0 40px 0",
    border: `4px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
  },
  profileImgBorder: {
    zIndex: 0,
    position: "absolute",
    backgroundColor: theme.palette.primary.main,
    width: "50vw",
    height: "2px",
    top: "50%",
    left: "50%",
  },
  webDevImg: {
    width: "100%",
    height: "auto",
    maxWidth: 400,
  },
  technologiesContainer: {
    padding: "20px 0 40px 0",
    alignItems: "center",
  },
});

function About(props) {
  const { classes } = props;

  const aboutMarkup = (
    <Typography variant="body1">
      Hi, I'm a graduate from <MyHoverLink href="/">UCSD</MyHoverLink>
      's Management Science program. During my time there I leveraged a program
      named MatLab to solve mathematical problems. This was my first
      introduction to 'for loops' and the ability to systematically program a
      computer to make decisions. As my interest grew, I began adding computer
      science courses to my curriculum. This helped me build a strong foundation
      of computer science topics and best practices. Since graduation, I have
      worked as a data analyst, collaborating with a team of software developers
      to help build a data driven product. In addition to the experience I have
      gained in my professional role, I have continued my education through a
      self-taught curriculum. I'm passionate about building for the web, and
      excited for the future of web development!
    </Typography>
  );

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Typography variant="h4">About Me</Typography>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item>{aboutMarkup}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <div style={{ position: "relative" }}>
                  <div className={classes.profileImgBorder} />
                  <img
                    src={ProfileImg}
                    alt="Profile"
                    className={classes.profileImg}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item className={classes.technologiesContainer}>
                <Technologies />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center">
              <Grid item>
                <img
                  src={WebDevImg}
                  alt="Laptop"
                  className={classes.webDevImg}
                />
                <Typography
                  variant="subtitle1"
                  style={{
                    maxWidth: "80%",
                    textAlign: "center",
                    margin: "0 auto 0 auto",
                  }}
                >
                  I build responsive websites that work for all device sizes!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
