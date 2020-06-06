import React from "react";
import laptopDeskImg from "../../../img/desk-laptop-bg.jpg";
import laptopDeskMobileImg from "../../../img/desk-laptop-bg-mobile.jpg";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  sectionContainer: {
    backgroundImage: `linear-gradient(to bottom,rgba(144, 164, 174, 0.85), rgba(144, 164, 174, 0.85)),url(${laptopDeskMobileImg})`,
    backgroundSize: "cover",
    paddingTop: 100,
    paddingBottom: 0,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 120,
      borderRadius: "0 0 50% 50%/4%",
      backgroundImage: `linear-gradient(to bottom,rgba(144, 164, 174, 0.8), rgba(144, 164, 174, 0.8)),url(${laptopDeskImg})`,
    },
  },
  textShadowPrimary: {
    textShadow: "#90a4ae 1px 0 10px",
  },
  myNameIs: {
    fontWeight: 400,
  },
  jaimeLovera: {
    fontWeight: 800,
  },
  shortInfo: {},
  longInfo: {
    maxWidth: 500,
    padding: "20px 0 140px 0",
  },
});

function Intro(props) {
  const { classes } = props;

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
            <Typography
              variant="body1"
              className={`${classes.myNameIs} ${classes.textShadowPrimary}`}
            >
              Hi, my name is
            </Typography>
            <Typography
              variant="h1"
              className={`${classes.jaimeLovera} ${classes.textShadowPrimary}`}
            >
              Jaime Lovera.
            </Typography>
            <Typography
              variant="h2"
              className={`${classes.shortInfo} ${classes.textShadowPrimary}`}
            >
              I build things for the web.
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.longInfo} ${classes.textShadowPrimary}`}
            >
              Nisl altera incorrupte per at, no per exerci nusquam iracundia, cu
              pro lobortis ocurreret. Pri at cetero suscipit. Per at denique
              ancillae argumentum, ei sint inermis omittantur vix. Latine
              qualisque erroribus ut cum.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Intro);