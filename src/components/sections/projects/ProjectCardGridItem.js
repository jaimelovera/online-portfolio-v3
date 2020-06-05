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
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const styles = (theme) => ({
  card: {},
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

function ProjectCard(props) {
  const { classes, image, title, body, visitLink, gitHubLink } = props;
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
      </Fragment>
    );
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClickOpen}>
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
          <CardActions>{visitLinks(gitHubLink, visitLink)}</CardActions>
        </Grid>
      </Card>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle disableTypography>
          <Typography variant="h6">{title}</Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>{visitLinks(gitHubLink, visitLink)}</MuiDialogActions>
      </Dialog>
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
