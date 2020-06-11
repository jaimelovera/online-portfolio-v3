import React from "react";
import ProjectCardGridItem from "./ProjectCardGridItem";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Project Images
import game2048Img from "../../../img/projects/2048Game.png";
import invDebtVizImg from "../../../img/projects/investment-debt-visualizer.png";
import musicLyricFinderImg from "../../../img/projects/music-lyric-finder.png";
import perFinBlogImg from "../../../img/projects/personal-finance-blog.png";
import twitterCloneImg from "../../../img/projects/twitter-clone.png";

const styles = (theme) => ({
  ...theme.globalStyles,
  sectionContainer: {},
  projectsTitle: {
    margin: "0 0 20px 0",
  },
});

function Projects(props) {
  const { classes } = props;

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Grid container direction="column" alignItems="stretch">
          <Grid item className={classes.projectsTitle}>
            <Typography variant="h4" className={classes.textShadowWhite}>
              Projects
            </Typography>
            <hr />
          </Grid>
        </Grid>
        <Grid container alignItems="stretch" spacing={3}>
          <ProjectCardGridItem
            image={twitterCloneImg}
            title="Twitter Clone"
            body="A full stack web app that implements features similar to that of Twitter."
            technologies="Firebase, Express, React, React Router, Axios, Redux, JavaScript, Material-UI, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/twitter-clone"
            visitLink="https://twitter-clone-b442b.web.app/"
          />
          <ProjectCardGridItem
            image={perFinBlogImg}
            title="Personal Finance Blog"
            body="A responsive Django web app I developed to encourage people to save and invest."
            technologies="Django, Python, React, JavaScript, Bootstrap, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/personal-finance-blog"
            visitLink="https://jaimelv6.pythonanywhere.com/"
          />
          <ProjectCardGridItem
            image={musicLyricFinderImg}
            title="Music Lyric Finder"
            body="A react web application for searching music lyrics using Reacts built in context API along with the Musixmatch public API."
            technologies="React, React Router, React Context API, Axios"
            gitHubLink="https://github.com/jaimelovera/music-lyric-finder"
            visitLink="https://music-lyric-finder.netlify.app/"
          />
          <ProjectCardGridItem
            image={invDebtVizImg}
            title="Investment Visualizer"
            body="An Interactive data visualization tool that estimates growth of an investment over time."
            technologies="React, Recharts, JavaScript, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/investment-debt-visualizer"
            visitLink="https://investment-debt-visualizer.netlify.app/"
          />
          <ProjectCardGridItem
            image={game2048Img}
            title="2048 Game Clone"
            body="A JavaScript implementation of the popular 2048 Game. 🎮"
            technologies="JavaScript, Bootstrap, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/2048-game"
            visitLink="https://jaimelovera.github.io/2048-game/"
          />
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Projects);
