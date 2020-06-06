import React, { Fragment } from "react";
import ProfileImg from "../../../img/profile-photo.jpg";
import WebDevImg from "../../../img/web-development.png";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

// Technologies Icons
import JavaScriptSvg from "../../../img/technologies/javascript.svg";
import BootStrapSvg from "../../../img/technologies/bootstrap.svg";
import MaterialUISvg from "../../../img/technologies/material-ui.svg";
import FirebaseSvg from "../../../img/technologies/firebase.svg";
import MongoDBSvg from "../../../img/technologies/mongodb.svg";
import ExpressSvg from "../../../img/technologies/express.svg";
import DjangoSvg from "../../../img/technologies/django.svg";
import PythonSvg from "../../../img/technologies/python.svg";
import NodeJSSvg from "../../../img/technologies/nodejs.svg";
import ReactSvg from "../../../img/technologies/react.svg";
import MySQLSvg from "../../../img/technologies/mysql.svg";
import HTML5Svg from "../../../img/technologies/html5.svg";
import ReduxSvg from "../../../img/technologies/redux.svg";
import CSS3Svg from "../../../img/technologies/css3.svg";

const styles = (theme) => ({
  sectionContainer: {
    paddingTop: 80,
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
  techLogo: {
    width: "100%",
    height: "auto",
    maxWidth: 38,
    maxHeight: 38,
    padding: "5px 0 5px 0",
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
      Nisl altera incorrupte per at, no per exerci nusquam iracundia, cu pro
      lobortis ocurreret. Pri at cetero suscipit. Per at denique ancillae
      argumentum, ei sint inermis omittantur vix. Latine qualisque erroribus ut
      cum. Nisl altera incorrupte per at, no per exerci nusquam iracundia, cu
      pro lobortis ocurreret. Pri at cetero suscipit. Per at denique ancillae
      argumentum, ei sint inermis omittantur vix. Latine qualisque erroribus ut
      cum. Nisl altera incorrupte per at, no per exerci nusquam iracundia, cu
      pro lobortis ocurreret. Pri at cetero suscipit. Per at denique ancillae
      argumentum, ei sint inermis omittantur vix. Latine qualisque erroribus ut
      cum.
    </Typography>
  );

  const gridTechLogoItem = (src, alt) => {
    return (
      <Grid item xs={2}>
        <Tooltip title={alt.split(" ")[0]} placement="top" arrow>
          <img src={src} alt={alt} className={classes.techLogo} />
        </Tooltip>
      </Grid>
    );
  };

  const technologiesMarkUp = (
    <Fragment>
      <Typography variant="h6">
        Technologies I've worked with the most:
      </Typography>
      <Grid container spacing={1}>
        {gridTechLogoItem(ReactSvg, "React Logo")}
        {gridTechLogoItem(JavaScriptSvg, "JavaScript Logo")}
        {gridTechLogoItem(HTML5Svg, "HTML5 Logo")}
        {gridTechLogoItem(CSS3Svg, "CSS3 Logo")}
        {gridTechLogoItem(PythonSvg, "Python Logo")}
        {gridTechLogoItem(MySQLSvg, "MySQL Logo")}
      </Grid>
      <Typography variant="h6" className={classes.technologiesSection}>
        Technologies I've been working with recently:
      </Typography>
      <Grid container spacing={1}>
        {gridTechLogoItem(MaterialUISvg, "Material-UI Logo")}
        {gridTechLogoItem(FirebaseSvg, "Firebase Logo")}
        {gridTechLogoItem(MongoDBSvg, "MongoDB Logo")}
        {gridTechLogoItem(NodeJSSvg, "NodeJS Logo")}
        {gridTechLogoItem(ExpressSvg, "Express Logo")}
        {gridTechLogoItem(ReduxSvg, "Redux Logo")}
      </Grid>
      <Typography variant="h6" className={classes.technologiesSection}>
        Technologies I've used in the past:
      </Typography>
      <Grid container spacing={1}>
        {gridTechLogoItem(BootStrapSvg, "Bootstrap Logo")}
        {gridTechLogoItem(DjangoSvg, "Django Logo")}
      </Grid>
    </Fragment>
  );

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Typography variant="h4">About Me</Typography>
        <hr />
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item>{aboutMarkup}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center">
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
                {technologiesMarkUp}
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
