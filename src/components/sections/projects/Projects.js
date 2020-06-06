import React from "react";
import ProjectCardGridItem from "./ProjectCardGridItem";
import WebDevImg from "../../../img/desk-laptop-bg.jpg";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  sectionContainer: {
    paddingTop: 60,
  },
  projectsTitle: {
    margin: "0 0 20px 0",
  },
});

function Projects(props) {
  const { classes } = props;

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item className={classes.projectsTitle}>
            <Typography variant="h4">Projects</Typography>
            <hr />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          <ProjectCardGridItem
            image={WebDevImg}
            demoGif={WebDevImg}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={WebDevImg}
            demoGif={WebDevImg}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={WebDevImg}
            demoGif={WebDevImg}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={WebDevImg}
            demoGif={WebDevImg}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={WebDevImg}
            demoGif={WebDevImg}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={WebDevImg}
            demoGif={WebDevImg}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Projects);
