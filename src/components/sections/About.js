import React, { Fragment } from "react";
import profileImg from "../../img/profile-photo.jpg";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  sectionContainer: {
    paddingTop: 80,
  },
  profileImg: {
    width: "70%",
    height: "auto",
    borderRadius: 12,
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

function About(props) {
  const { classes } = props;

  const aboutMarkup = (
    <Fragment>
      <Typography variant="h4">About Me</Typography>
      <hr />
      <Typography variant="body1">Hello I am jaime.</Typography>
      <hr />
    </Fragment>
  );

  const technologiesMarkUp = (
    <Fragment>
      <Typography variant="body1">
        I have been using these technologies:
      </Typography>
    </Fragment>
  );

  const photoMarkup = (
    <img src={profileImg} alt="Profile" className={classes.profileImg} />
  );

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Grid container direction="column">
              <Grid item>{aboutMarkup}</Grid>
              <Grid item>{technologiesMarkUp}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {photoMarkup}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
