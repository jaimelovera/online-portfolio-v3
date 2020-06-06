import React from "react";

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
    paddingTop: 50,
    paddingBottom: 75,
  },
  footerLinkIcons: {
    fontSize: "2em",
    margin: "40px 12px 12px 12px",
    color: theme.palette.grey[100],
    "&:hover": {
      color: theme.palette.grey[400],
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
  const { classes } = props;

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Grid container direction="column" justify="center" alignItems="center">
          <Hidden lgUp>
            <Grid item xs={12}>
              <Link
                href="https://github.com/jaimelovera"
                target="_blank"
                underline="none"
              >
                <GitHubIcon className={classes.footerLinkIcons} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jaimelovera/"
                target="_blank"
                underline="none"
              >
                <LinkedInIcon className={classes.footerLinkIcons} />
              </Link>
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <div className={classes.footerByLink}>
              <Link
                href="https://github.com/jaimelovera/online-portfolio-v3"
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

export default withStyles(styles)(Footer);
