import React from "react";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  sectionContainer: {
    paddingTop: 50,
  },
});

function Contact(props) {
  const { classes } = props;

  return (
    <div className={`section-container ${classes.sectionContainer}`}>
      <div className="content-container">
        <h1>Hello from Contact</h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(Contact);
