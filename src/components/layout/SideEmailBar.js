import React from "react";
import PropTypes from "prop-types";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

// Icons
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const styles = (theme) => ({
  container: {
    width: 40,
    position: "fixed",
    bottom: 0,
    right: 25,
    zIndex: 10,
  },
  emailLink: {
    backgroundColor: "#DCF3FF",
    padding: "12px 3px",
    borderRadius: 25,
    border: "1px solid #000",
    writingMode: "vertical-rl",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
  endLine: {
    backgroundColor: theme.palette.secondary.main,
    width: 1,
    height: "100px",
    marginTop: 10,
  },
});

function SideEmailBar(props) {
  const { classes, email } = props;

  return (
    <Hidden mdDown>
      <div className={classes.container}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Link href={`mailto:${email}`} underline="none" color="secondary">
              <Typography variant="body2" className={classes.emailLink}>
                <MailOutlineIcon
                  color="secondary"
                  style={{ transform: "rotate(90deg)" }}
                />{" "}
                {email}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <div className={classes.endLine}></div>
          </Grid>
        </Grid>
      </div>
    </Hidden>
  );
}

SideEmailBar.propTypes = {
  email: PropTypes.string.isRequired,
};

export default withStyles(styles)(SideEmailBar);
