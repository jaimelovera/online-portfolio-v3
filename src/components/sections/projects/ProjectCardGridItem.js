import React from "react";
import PropTypes from "prop-types";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const styles = (theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    top: 0,
    transition: "top linear 0.1s",
    "&:hover": {
      top: -8,
    },
  },
  cardChild: {
    textAlign: "center",
    paddingBottom: 0,
  },
});

function ProjectCard(props) {
  const {
    classes,
    children,
    image,
    title,
    technologies,
    visitLink,
    gitHubLink,
  } = props;

  const [imgLoaded, setImgLoaded] = React.useState(false);

  const handleImgLoaded = () => {
    setImgLoaded(true);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardChild}>
          <CardActionArea href={visitLink} target="_blank">
            {!imgLoaded && (
              <CircularProgress
                size={140}
                thickness={1}
                style={{ padding: 20 }}
              />
            )}
            <CardMedia
              component="img"
              image={image}
              alt={title}
              onLoad={handleImgLoaded}
              style={{ display: imgLoaded ? "initial" : "none" }}
            />
          </CardActionArea>
          <Typography gutterBottom variant="h5" style={{ paddingTop: 14 }}>
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="secondary"
            style={{ textAlign: "left" }}
          >
            {children}
          </Typography>
        </CardContent>
        <CardContent
          className={classes.cardChild}
          style={{ paddingTop: 14, paddingBottom: 0 }}
        >
          <Typography variant="caption" color="textSecondary">
            {technologies}
          </Typography>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Tooltip title="Visit" placement="top" arrow>
              <IconButton href={visitLink} target="_blank">
                <LaunchIcon color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Code" placement="top" arrow>
              <IconButton href={gitHubLink} target="_blank">
                <GitHubIcon color="primary" />
              </IconButton>
            </Tooltip>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  visitLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectCard);
