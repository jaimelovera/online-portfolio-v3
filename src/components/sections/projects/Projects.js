import React from "react";
import ProjectCard from "./ProjectCard";
import WebDevImg from "../../../img/web-development.png";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  sectionContainer: {
    paddingTop: 50,
  },
});

function Projects(props) {
  const { classes } = props;

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <ProjectCard />
      </div>
    </div>
  );
}

export default withStyles(styles)(Projects);
