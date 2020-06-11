import React, { Component } from "react";
import laptopDeskImg from "../../../img/desk-laptop-bg.jpg";
import laptopDeskMobileImg from "../../../img/desk-laptop-bg-mobile.jpg";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  ...theme.globalStyles,
  sectionContainer: {
    padding: 0,
  },
  sectionContainerTopLayer: {
    padding: "100px 20px 0 20px",
    backgroundImage: `linear-gradient(to bottom,rgba(144, 164, 174, 0.85), rgba(144, 164, 174, 0.85)),url(${laptopDeskMobileImg})`,
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 120,
      borderRadius: "0 0 50% 50%/4%",
      backgroundImage: `linear-gradient(to bottom,rgba(144, 164, 174, 0.8), rgba(144, 164, 174, 0.8)),url(${laptopDeskImg})`,
    },
  },
  myNameIs: {
    fontWeight: 400,
  },
  jaimeLovera: {
    fontWeight: 800,
    position: "relative",
    transform: "translateY(calc(-100vh - 100px))",
  },
  jaimeLoveraAnimate: {
    animation: "slideFromY 1.75s forwards",
    animationDelay: "1s",
  },
  shortInfo: {
    position: "relative",
    transform: "translateX(calc(-100vw - 1000px))",
  },
  shortInfoAnimate: {
    animation: "slideFromX 3s forwards",
    animationDelay: "2.75s",
  },
  longInfo: {
    maxWidth: 500,
    padding: "20px 0 140px 0",
    position: "relative",
    transform: "translateX(calc(-100vw - 500px))",
  },
  longInfoAnimate: {
    animation: "slideFromX 1.5s forwards",
    animationDelay: "4.25s",
  },
});

class Intro extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.pageLoaded === true) {
      return true;
    }
  }

  render() {
    const { classes, pageLoaded } = this.props;

    return (
      <div className={`section-container ${classes.sectionContainer}`}>
        <div
          className={`section-container ${classes.sectionContainerTopLayer}`}
        >
          <div className="content-container">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  variant="body1"
                  className={`${classes.myNameIs} ${classes.textShadowPrimary}`}
                >
                  Hi, my name is
                </Typography>
                <Typography
                  variant="h1"
                  className={`${classes.jaimeLovera} ${
                    classes.textShadowPrimary
                  } ${pageLoaded && classes.jaimeLoveraAnimate}`}
                >
                  Jaime Lovera.
                </Typography>
                <Typography
                  variant="h2"
                  className={`${classes.shortInfo} ${
                    classes.textShadowPrimary
                  } ${pageLoaded && classes.shortInfoAnimate}`}
                >
                  I build things for the web.
                </Typography>
                <Typography
                  variant="body1"
                  className={`${classes.longInfo} ${
                    classes.textShadowPrimary
                  } ${pageLoaded && classes.longInfoAnimate}`}
                >
                  I'm an aspiring software developer based in San Diego, CA
                  specializing in building exceptional websites, applications,
                  and anything else that lives on the web.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);
