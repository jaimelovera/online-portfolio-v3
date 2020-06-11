import React, { Fragment } from "react";
import GridTechLogoItem from "./GridTechLogoItem";

// Material-UI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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

function Technologies() {
  return (
    <Fragment>
      <Typography variant="h6">Worked with the most:</Typography>
      <Grid container spacing={1}>
        <GridTechLogoItem src={ReactSvg} alt="React Logo" />
        <GridTechLogoItem src={JavaScriptSvg} alt="JavaScript Logo" />
        <GridTechLogoItem src={HTML5Svg} alt="HTML5 Logo" />
        <GridTechLogoItem src={CSS3Svg} alt="CSS3 Logo" />
        <GridTechLogoItem src={PythonSvg} alt="Python Logo" />
        <GridTechLogoItem src={MySQLSvg} alt="MySQL Logo" />
      </Grid>
      <Typography variant="h6">Working with recently:</Typography>
      <Grid container spacing={1}>
        <GridTechLogoItem src={MaterialUISvg} alt="Material-UI Logo" />
        <GridTechLogoItem src={FirebaseSvg} alt="Firebase Logo" />
        <GridTechLogoItem src={MongoDBSvg} alt="MongoDB Logo" />
        <GridTechLogoItem src={NodeJSSvg} alt="NodeJS Logo" />
        <GridTechLogoItem src={ExpressSvg} alt="Express Logo" />
        <GridTechLogoItem src={ReduxSvg} alt="Redux Logo" />
      </Grid>
      <Typography variant="h6">Used in the past:</Typography>
      <Grid container spacing={1}>
        <GridTechLogoItem src={BootStrapSvg} alt="Bootstrap Logo" />
        <GridTechLogoItem src={DjangoSvg} alt="Django Logo" />
      </Grid>
    </Fragment>
  );
}
export default Technologies;
