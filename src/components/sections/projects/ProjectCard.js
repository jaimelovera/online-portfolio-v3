import React from "react";
import PropTypes from "prop-types";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({});

function ProjectCard(props) {
  const { classes } = props;

  return (
    <Card style={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={""}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
