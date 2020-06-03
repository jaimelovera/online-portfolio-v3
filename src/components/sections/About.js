import React, { Fragment } from "react";
import ProfileImg from "../../img/profile-photo.jpg";
import LaptopImg from "../../img/laptop.png";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

// Technologies Icons
import JavaScriptSvg from "../../img/technologies/javascript.svg";
import PythonSvg from "../../img/technologies/python.svg";
import ReactSvg from "../../img/technologies/react.svg";
import MySQLSvg from "../../img/technologies/mysql.svg";
import MongoDBSvg from "../../img/technologies/mongodb.svg";
import ExpressSvg from "../../img/technologies/express.svg";
import NodeJSSvg from "../../img/technologies/nodejs.svg";
import HTML5Svg from "../../img/technologies/html5.svg";
import CSS3Svg from "../../img/technologies/css3.svg";
import DjangoSvg from "../../img/technologies/django.svg";
import BootStrapSvg from "../../img/technologies/bootstrap.svg";
import MaterialUISvg from "../../img/technologies/material-ui.svg";
import ReduxSvg from "../../img/technologies/redux.svg";
import FirebaseSvg from "../../img/technologies/firebase.svg";

const styles = (theme) => ({
  sectionContainer: {
    paddingTop: 80,
  },
  profileImg: {
    maxWidth: 350,
    height: "auto",
    borderRadius: 10,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  laptopImg: {
    maxWidth: 350,
    height: "auto",
  },
  techLogo: {
    width: "60%",
    height: "auto",
    maxWidth: 52,
    maxHeight: 52,
    padding: "5px 0 5px 0",
  },
  technologiesSection: {
    paddingTop: 30,
  },
});

function About(props) {
  const { classes } = props;

  const aboutMarkup = (
    <Fragment>
      <Typography variant="h4">About Me</Typography>
      <hr />
      <Typography variant="body1">
        Nisl altera incorrupte per at, no per exerci nusquam iracundia, cu pro
        lobortis ocurreret. Pri at cetero suscipit. Per at denique ancillae
        argumentum, ei sint inermis omittantur vix. Latine qualisque erroribus
        ut cum. Nisl altera incorrupte per at, no per exerci nusquam iracundia,
        cu pro lobortis ocurreret. Pri at cetero suscipit. Per at denique
        ancillae argumentum, ei sint inermis omittantur vix. Latine qualisque
        erroribus ut cum. Nisl altera incorrupte per at, no per exerci nusquam
        iracundia, cu pro lobortis ocurreret. Pri at cetero suscipit. Per at
        denique ancillae argumentum, ei sint inermis omittantur vix. Latine
        qualisque erroribus ut cum.
      </Typography>
      <hr />
    </Fragment>
  );

  const gridLogoItem = (src, alt) => {
    return (
      <Grid item xs={3} sm={2}>
        <Tooltip title={alt.split(" ")[0]} placement="bottom" arrow>
          <img src={src} alt={alt} className={classes.techLogo} />
        </Tooltip>
      </Grid>
    );
  };

  const technologiesMarkUp = (
    <Fragment>
      <Typography variant="h6" className={classes.technologiesSection}>
        Technologies I've worked with the most:
      </Typography>
      <Grid container>
        {gridLogoItem(ReactSvg, "React Logo")}
        {gridLogoItem(JavaScriptSvg, "JavaScript Logo")}
        {gridLogoItem(HTML5Svg, "HTML5 Logo")}
        {gridLogoItem(CSS3Svg, "CSS3 Logo")}
        {gridLogoItem(PythonSvg, "Python Logo")}
        {gridLogoItem(MySQLSvg, "MySQL Logo")}
      </Grid>
      <Typography variant="h6" className={classes.technologiesSection}>
        Technologies I've been working with recently:
      </Typography>
      <Grid container>
        {gridLogoItem(MaterialUISvg, "Material-UI Logo")}
        {gridLogoItem(FirebaseSvg, "Firebase Logo")}
        {gridLogoItem(MongoDBSvg, "MongoDB Logo")}
        {gridLogoItem(NodeJSSvg, "NodeJS Logo")}
        {gridLogoItem(ExpressSvg, "Express Logo")}
        {gridLogoItem(ReduxSvg, "Redux Logo")}
      </Grid>
      <Typography variant="h6" className={classes.technologiesSection}>
        Technologies I've used in the past:
      </Typography>
      <Grid container>
        {gridLogoItem(BootStrapSvg, "Bootstrap Logo")}
        {gridLogoItem(DjangoSvg, "Django Logo")}
      </Grid>
    </Fragment>
  );

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item>{aboutMarkup}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center">
              <Grid item>
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className={classes.profileImg}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item>{technologiesMarkUp}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center">
              <Grid item>
                <img
                  src={LaptopImg}
                  alt="Laptop"
                  className={classes.laptopImg}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
