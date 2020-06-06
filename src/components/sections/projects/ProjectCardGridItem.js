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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import CloseIcon from "@material-ui/icons/Close";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

const styles = (theme) => ({
  card: {
    position: "relative",
    top: 0,
    transition: "top linear 0.1s",
    "&:hover": {
      top: -8,
    },
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
  cardLinkIcons: {
    padding: "4px 12px 12px 12px",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectCard(props) {
  const {
    classes,
    image,
    demoGif,
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

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea disabled>
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
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <CardActions className={classes.cardLinkIcons}>
            <Tooltip title="Play Demo" placement="top" arrow>
              <IconButton onClick={handleClickOpen}>
                <OndemandVideoIcon color="primary" />
              </IconButton>
            </Tooltip>
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
              <img
                src={demoGif}
                alt="Project demo"
                className={classes.dialogImg}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
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
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  demoGif: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  visitLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectCard);
