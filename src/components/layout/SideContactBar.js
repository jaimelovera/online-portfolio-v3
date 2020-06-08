import React from "react";
import PropTypes from "prop-types";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const styles = (theme) => ({
  container: {
    width: 40,
    position: "fixed",
    bottom: 0,
    left: 25,
    zIndex: 10,
  },
  endLine: {
    backgroundColor: theme.palette.secondary.main,
    width: 1,
    height: "100px",
    marginTop: 10,
  },
  linkIconButton: {
    margin: 4,
    backgroundColor: "#DCF3FF",
    border: "1px solid #000",
    position: "relative",
    transition: "top linear 0.2s",
    "&:hover": {
      backgroundColor: "#FFF",
      right: -2,
    },
  },
});

function SideContactBar(props) {
  const { classes, gitHubLink, linkedInLink, email } = props;

  return (
    <Hidden mdDown>
      <div className={classes.container}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Tooltip title="GitHub" placement="right" arrow>
              <IconButton
                href={gitHubLink}
                target="_blank"
                className={classes.linkIconButton}
              >
                <GitHubIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="LinkedIn" placement="right" arrow>
              <IconButton
                href={linkedInLink}
                target="_blank"
                className={classes.linkIconButton}
              >
                <LinkedInIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Email" placement="right" arrow>
              <IconButton
                href={`mailto:${email}`}
                className={classes.linkIconButton}
              >
                <MailOutlineIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <div className={classes.endLine}></div>
          </Grid>
        </Grid>
      </div>
    </Hidden>
  );
}

SideContactBar.propTypes = {
  gitHubLink: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default withStyles(styles)(SideContactBar);
