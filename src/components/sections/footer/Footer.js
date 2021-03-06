import React from "react";
import PropTypes from "prop-types";
import MyHoverLink from "../../../util/MyHoverLink";

import logoImg from "../../../img/name-logo.png";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const styles = (theme) => ({
  sectionContainer: {
    padding: 20,
    backgroundImage: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[100],
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 60,
    },
  },
  footerLinkIcon: {
    fontSize: "2em",
    margin: "40px 12px 40px 12px",
    position: "relative",
    transition: "top linear 0.2s",
    "&:hover": {
      top: -2,
    },
  },
  logoImg: {
    padding: 15,
    height: 45,
    width: "auto",
    MozTransition: "all 0.2s ease-in",
    OTransition: "all 0.2s ease-in",
    WebkitTransition: "all 0.2s ease-in",
    transition: "all 0.2s ease-in",
    "&:hover": {
      filter: "saturate(250%)",
    },
  },
});

function Footer(props) {
  const { classes, projectGitHubLink, gitHubLink, linkedInLink } = props;

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Grid container direction="column" justify="center" alignItems="center">
          <Hidden lgUp>
            <Grid item xs={12}>
              <Link href={gitHubLink} target="_blank" underline="none">
                <GitHubIcon
                  className={classes.footerLinkIcon}
                  color="secondary"
                />
              </Link>
              <Link href={linkedInLink} target="_blank" underline="none">
                <LinkedInIcon
                  className={classes.footerLinkIcon}
                  color="secondary"
                />
              </Link>
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <Grid
              container
              direction="row-reverse"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <MyHoverLink
                  href={projectGitHubLink}
                  color="secondary"
                  variant="body1"
                >
                  Designed & Built by Jaime Lovera
                </MyHoverLink>
              </Grid>
              <Grid item>
                <a href="/">
                  <img src={logoImg} alt="Logo" className={classes.logoImg} />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Footer.propTypes = {
  projectGitHubLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired,
};

export default withStyles(styles)(Footer);
