import React from "react";
import ProjectCardGridItem from "./ProjectCardGridItem";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Project Images/Gifs
import game2048Img from "../../../img/projects/game-2048/2048Game.png";
import invDebtVizImg from "../../../img/projects/investment-debt-vizualizer/investment-debt-visualizer.png";
import musicLyricFinderImg from "../../../img/projects/music-lyric-finder/music-lyric-finder.png";
import perFinBlogImg from "../../../img/projects/personal-finance-blog/personal-finance-blog.png";
import twitterCloneImg from "../../../img/projects/twitter-clone/twitter-clone.png";

const styles = (theme) => ({
  sectionContainer: {
    paddingTop: 100,
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
            image={game2048Img}
            demoGif={""}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={invDebtVizImg}
            demoGif={""}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={musicLyricFinderImg}
            demoGif={""}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={perFinBlogImg}
            demoGif={""}
            title="Hello"
            body="the body"
            technologies="JavaScript, Firebase, React"
            gitHubLink="/"
            visitLink="/"
          />
          <ProjectCardGridItem
            image={twitterCloneImg}
            demoGif={""}
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
