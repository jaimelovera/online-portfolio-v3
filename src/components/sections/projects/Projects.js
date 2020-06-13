import React from "react";
import ProjectCardGridItem from "./ProjectCardGridItem";
import MyHoverLink from "../../../util/MyHoverLink";

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
import thisWebsiteImg from "../../../img/projects/this-website.png";

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
            technologies="React, Redux, Material-UI, Firebase, Express, React Router, Axios, JavaScript, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/twitter-clone"
            visitLink="https://twitter-clone-b442b.web.app/"
          >
            Create an account, upload a photo, customize your profile details,
            make posts, interact with other users, get notifications, and easily
            delete your account.
          </ProjectCardGridItem>
          <ProjectCardGridItem
            image={perFinBlogImg}
            title="Personal Finance Blog"
            technologies="Django, Python, Bootstrap, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/personal-finance-blog"
            visitLink="https://jaimelv6.pythonanywhere.com/"
          >
            Search for articles by category or by phrase. Comment, like, and
            share articles. As the admin, easily add, edit, and delete content.
          </ProjectCardGridItem>
          <ProjectCardGridItem
            image={thisWebsiteImg}
            title="Personal Portfolio"
            technologies="React, Material-UI, JavaScript, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/online-portfolio-v3"
            visitLink="https://www.jaimelovera.com/"
          >
            <p>
              A place to learn more about the portfolio owner<i>(me)</i> and to
              see projects that the individual has been working on.
            </p>
            <p>
              Previous Iterations:{" "}
              <MyHoverLink href="https://jaimelovera.github.io/online-portfolio-v1/index.html">
                v1
              </MyHoverLink>
              ,{" "}
              <MyHoverLink href="https://jaimelovera.github.io/online-portfolio-v2/">
                v2
              </MyHoverLink>
            </p>
          </ProjectCardGridItem>
          <ProjectCardGridItem
            image={musicLyricFinderImg}
            title="Music Lyric Finder"
            technologies="React, React Router, React Context API, Axios, JavaScript, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/music-lyric-finder"
            visitLink="https://music-lyric-finder.netlify.app/"
          >
            View the top 10 trending songs and search for music lyrics using the
            Musixmatch public API.
          </ProjectCardGridItem>
          <ProjectCardGridItem
            image={invDebtVizImg}
            title="Investment Visualizer"
            technologies="React, Recharts, JavaScript, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/investment-debt-visualizer"
            visitLink="https://investment-debt-visualizer.netlify.app/"
          >
            See how your money will grow over time with compounded interest. Or,
            see how long it will take to pay off your loan and how much in
            interest you will pay.
          </ProjectCardGridItem>
          <ProjectCardGridItem
            image={game2048Img}
            title="2048 Game Clone"
            technologies="JavaScript, Bootstrap, HTML, CSS"
            gitHubLink="https://github.com/jaimelovera/2048-game"
            visitLink="https://jaimelovera.github.io/2048-game/"
          >
            Join the numbers and get to the 2048 tile. Play using your keyboard
            arrow keys, or swipe on a touch screen device. Visit the original
            game <MyHoverLink href="https://play2048.co/">here</MyHoverLink>.
          </ProjectCardGridItem>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Projects);
