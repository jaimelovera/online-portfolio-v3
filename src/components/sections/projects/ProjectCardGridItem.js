import React, { Fragment } from "react";
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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const styles = (theme) => ({
  card: {
    position: "relative",
    top: 0,
    transition: "top linear 0.1s",
    "&:hover": {
      top: -8,
    },
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.info,
  },
  dialogImg: {
    width: "100%",
    height: "auto",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectCard(props) {
  const {
    classes,
    image,
    gif,
    title,
    body,
    technologies,
    visitLink,
    gitHubLink,
  } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const visitLinks = (gitHubLink, visitLink) => {
    return (
      <Fragment>
        <Tooltip title="GitHub" placement="top" arrow>
          <IconButton href={gitHubLink} target="_blank">
            <GitHubIcon color="info" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Visit" placement="top" arrow>
          <IconButton href={visitLink} target="_blank">
            <LaunchIcon color="info" />
          </IconButton>
        </Tooltip>
      </Fragment>
    );
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Tooltip title="View a quick demo!" placement="top" arrow>
          <CardActionArea onClick={handleClickOpen}>
            <CardMedia component="img" image={image} alt={title} />
            <CardContent style={{ paddingBottom: 0 }}>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography variant="body1" color="secondary">
                {body}
              </Typography>
              <div style={{ paddingTop: 10 }}>
                <Typography variant="caption" color="textSecondary">
                  {technologies}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Tooltip>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <CardActions style={{ padding: 2 }}>
            {visitLinks(gitHubLink, visitLink)}
          </CardActions>
        </Grid>
      </Card>

      <Dialog
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
      >
        <DialogTitle disableTypography>
          <Typography variant="h6">{title} - Demo</Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item>
              <img src={gif} alt="Project demo" className={classes.dialogImg} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>{visitLinks(gitHubLink, visitLink)}</DialogActions>
      </Dialog>
    </Grid>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  visitLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectCard);
