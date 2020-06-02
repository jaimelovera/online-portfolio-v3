import React, { Component } from "react";
import laptopDeskImg from "../../../img/desk-laptop-bg.jpg";

// Material-UI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const commonStyle = { introTextShadow: "1px 1px 3px rgba(144, 164, 174,0.8)" };

const styles = (theme) => ({
  sectionContainer: {
    backgroundImage: `linear-gradient(to bottom,rgba(144, 164, 174, 0.75), rgba(144, 164, 174, 0.6), rgba(144, 164, 174, 0.5)),url(${laptopDeskImg})`,
    backgroundSize: "cover",
    paddingTop: 100,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 120,
      borderRadius: "0 0 50% 50%/4%",
    },
  },
  myNameIs: {
    textShadow: commonStyle.introTextShadow,
  },
  jaimeLovera: {
    fontFamily: '"Nunito", sans-serif',
    fontWeight: 800,
    textShadow: commonStyle.introTextShadow,
  },
  shortInfo: {
    fontFamily: '"Quicksand", sans-serif',
    textShadow: commonStyle.introTextShadow,
  },
  longInfo: {
    maxWidth: 500,
    padding: "20px 0 160px 0",
    textShadow: commonStyle.introTextShadow,
  },
});

class Intro extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={`section-container ${classes.sectionContainer}`}>
        <div className="content-container">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1" className={classes.myNameIs}>
                Hi, my name is
              </Typography>
              <Typography variant="h1" className={classes.jaimeLovera}>
                Jaime Lovera.
              </Typography>
              <Typography variant="h2" className={classes.shortInfo}>
                I build things for the web.
              </Typography>
              <Typography variant="body1" className={classes.longInfo}>
                Nisl altera incorrupte per at, no per exerci nusquam iracundia,
                cu pro lobortis ocurreret. Pri at cetero suscipit. Per at
                denique ancillae argumentum, ei sint inermis omittantur vix.
                Latine qualisque erroribus ut cum.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);
