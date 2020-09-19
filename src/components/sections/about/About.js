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
  ...theme.globalStyles,
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

  const aboutMarkup = () => {
    const udemy = (
      <MyHoverLink href="https://www.udemy.com/">Udemy</MyHoverLink>
    );
    const freeCodeCamp = (
      <MyHoverLink href="https://www.freecodecamp.org/">
        freeCodeCamp
      </MyHoverLink>
    );
    const ucsd = <MyHoverLink href="https://ucsd.edu/">UCSD</MyHoverLink>;
    const linkedin = (
      <MyHoverLink href={props.linkedInLink}>LinkedIn</MyHoverLink>
    );

    return (
      <Typography variant="body1" className={classes.textShadowWhite}>
        <p>
          I'm a graduate from the Management Science program at {ucsd}, a
          quantitative major in applied economics with a strong focus on
          statistical analysis and mathematics. During my time there, I used a
          program called MatLab to solve constraint problems. This was my
          introduction to 'for loops' and the ability to systematically program
          a computer to make decisions. I was fascinated. I began adding
          computer science courses to my curriculum. I studied topics ranging
          from data structures to lower level programming with Assembly.
        </p>
        <p>
          Since graduating, I have held multiple roles helping build data driven products. Visit my {linkedin} profile to see
          what my peers have to say about me!
        </p>
        <p>
          In addition to the experience I have gained in my professional roles,
          I have continued my education by building interesting projects, and
          through a self-taught curriculum leveraging resources such as {udemy},{" "}
          {freeCodeCamp}, and many others.
        </p>
        <p>
          I'm passionate about web applications, but more specifically, I'm
          passionate about helping build the complex data infrastructures that
          power today's modern web applications. The rapid advances in
          technology makes this a field that requires constant learning, which
          is something that I look forward to!
        </p>
      </Typography>
    );
  };

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Typography variant="h4" className={classes.textShadowWhite}>
          About Me
        </Typography>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <Grid container>
              <Grid item>{aboutMarkup()}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
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
                  variant="body2"
                  style={{
                    maxWidth: "80%",
                    textAlign: "center",
                    margin: "0 auto 0 auto",
                  }}
                  className={classes.textShadowWhite}
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
