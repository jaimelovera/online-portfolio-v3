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

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const styles = (theme) => ({
  card: {},
});

function ProjectCard(props) {
  const { classes, image, title, body, visitLink, gitHubLink } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea href={visitLink} target="_blank">
          <CardMedia component="img" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <CardActions>
            <IconButton href={gitHubLink} target="_blank">
              <Tooltip title="GitHub" placement="top" arrow>
                <GitHubIcon />
              </Tooltip>
            </IconButton>
            <IconButton href={visitLink} target="_blank">
              <Tooltip title="Visit" placement="top" arrow>
                <LaunchIcon />
              </Tooltip>
            </IconButton>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  visitLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectCard);
