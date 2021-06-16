import React from "react";
import GridTechLogoItem from "./GridTechLogoItem";

// Material-UI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Technologies Icons
import PythonSvg from "../../../img/technologies/python.svg";
import FlaskSvg from "../../../img/technologies/flask.svg";
import DjangoSvg from "../../../img/technologies/django.svg";
import LinuxSvg from "../../../img/technologies/linux.svg";
import MySQLSvg from "../../../img/technologies/mysql.svg";
import GitSvg from "../../../img/technologies/git.svg";
import AirflowSvg from "../../../img/technologies/airflow.svg";
import JavaScriptSvg from "../../../img/technologies/javascript.svg";
import HTML5Svg from "../../../img/technologies/html5.svg";
import CSS3Svg from "../../../img/technologies/css3.svg";
import ReactSvg from "../../../img/technologies/react.svg";
import BootstrapSvg from "../../../img/technologies/bootstrap.svg";

function Technologies() {
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
      <hr style={{ marginBottom: 15 }} />
      <Grid container spacing={1}>
        <GridTechLogoItem src={PythonSvg} alt="Python Logo" />
        <GridTechLogoItem src={FlaskSvg} alt="Flask Logo" />
        <GridTechLogoItem src={DjangoSvg} alt="Django Logo" />
        <GridTechLogoItem src={LinuxSvg} alt="Linux Logo" />
        <GridTechLogoItem src={MySQLSvg} alt="MySQL Logo" />
        <GridTechLogoItem src={GitSvg} alt="Git Logo" />
        <GridTechLogoItem src={AirflowSvg} alt="Airflow Logo" />
        <GridTechLogoItem src={JavaScriptSvg} alt="JavaScript Logo" />
        <GridTechLogoItem src={HTML5Svg} alt="HTML5 Logo" />
        <GridTechLogoItem src={CSS3Svg} alt="CSS3 Logo" />
        <GridTechLogoItem src={ReactSvg} alt="React Logo" />
        <GridTechLogoItem src={BootstrapSvg} alt="Bootstrap Logo" />
      </Grid>
    </div>
  );
}
export default Technologies;
