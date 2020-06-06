import React from "react";
import PropTypes from "prop-types";

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
    backgroundImage: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[100],
    paddingTop: 5,
    paddingBottom: 25,
  },
  footerLinkIcon: {
    fontSize: "2em",
    margin: "40px 12px 12px 12px",
    position: "relative",
    transition: "top linear 0.2s",
    "&:hover": {
      top: -2,
    },
  },
  footerByLink: {
    marginTop: 20,
    "&:hover": {
      borderBottom: "1px solid #000",
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
            <div className={classes.footerByLink}>
              <Link
                href={projectGitHubLink}
                target="_blank"
                underline="none"
                color="secondary"
                variant="body1"
              >
                Designed & Built by Jaime Lovera
              </Link>
            </div>
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
