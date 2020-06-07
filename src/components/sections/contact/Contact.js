import React from "react";
import PropTypes from "prop-types";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  sectionContainer: {},
  contactContainer: {
    padding: "140px 0",
    margin: "0 auto",
    maxWidth: 600,
  },
  contactBody: {
    textAlign: "center",
    padding: "5px 0 40px 0",
  },
  contactButton: {
    padding: "15px 30px",
  },
});

function Contact(props) {
  const { classes, email } = props;

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <Typography variant="h4">Contact</Typography>
        <hr />
        <div className={classes.contactContainer}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h3">Get In Touch</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.contactBody}>
                Whether you have a question or just want to say hi, my inbox is
                always open. I'll try my best to get back to you as soon as
                possible!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{email}</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href={`mailto:${email}`}
                className={classes.contactButton}
              >
                <Typography variant="subtitle1">Say Hello!</Typography>
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
};

export default withStyles(styles)(Contact);
