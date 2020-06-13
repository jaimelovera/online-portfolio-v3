import React from "react";
import GridTechLogoItem from "./GridTechLogoItem";

// Material-UI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Technologies Icons
import JavaScriptSvg from "../../../img/technologies/javascript.svg";
import BootStrapSvg from "../../../img/technologies/bootstrap.svg";
import MaterialUISvg from "../../../img/technologies/material-ui.svg";
import FirebaseSvg from "../../../img/technologies/firebase.svg";
import DjangoSvg from "../../../img/technologies/django.svg";
import PythonSvg from "../../../img/technologies/python.svg";
import ReactSvg from "../../../img/technologies/react.svg";
import MySQLSvg from "../../../img/technologies/mysql.svg";
import HTML5Svg from "../../../img/technologies/html5.svg";
import ReduxSvg from "../../../img/technologies/redux.svg";
import CSS3Svg from "../../../img/technologies/css3.svg";

function Technologies() {
  const typeHeadingStyles = { paddingTop: 6 };
  const containerStyles = {
    backgroundColor: "#FFF",
    border: "1px solid #000",
    borderRadius: 5,
    padding: "12px 25px",
  };

  return (
    <div style={containerStyles}>
      <Grid container justify="center">
        <Typography variant="h5">Technologies</Typography>
      </Grid>
      <hr />
      <Typography variant="h6" style={typeHeadingStyles}>
        Most Used:
      </Typography>
      <Grid container spacing={2}>
        <GridTechLogoItem src={ReactSvg} alt="React Logo" />
        <GridTechLogoItem src={JavaScriptSvg} alt="JavaScript Logo" />
        <GridTechLogoItem src={HTML5Svg} alt="HTML5 Logo" />
        <GridTechLogoItem src={CSS3Svg} alt="CSS3 Logo" />
        <GridTechLogoItem src={PythonSvg} alt="Python Logo" />
        <GridTechLogoItem src={MySQLSvg} alt="MySQL Logo" />
      </Grid>
      <Typography variant="h6" style={typeHeadingStyles}>
        Recently Used:
      </Typography>
      <Grid container spacing={2}>
        <GridTechLogoItem src={MaterialUISvg} alt="Material-UI Logo" />
        <GridTechLogoItem src={FirebaseSvg} alt="Firebase Logo" />
        <GridTechLogoItem src={ReduxSvg} alt="Redux Logo" />
      </Grid>
      <Typography variant="h6" style={typeHeadingStyles}>
        Previously Used:
      </Typography>
      <Grid container spacing={2}>
        <GridTechLogoItem src={BootStrapSvg} alt="Bootstrap Logo" />
        <GridTechLogoItem src={DjangoSvg} alt="Django Logo" />
      </Grid>
    </div>
  );
}
export default Technologies;
