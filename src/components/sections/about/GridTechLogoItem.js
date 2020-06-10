import React from "react";

// Material-UI Stuff
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme) => ({
  techLogo: {
    width: "100%",
    height: "auto",
    maxWidth: 38,
    maxHeight: 38,
    padding: "5px 0 5px 0",
    MozTransition: "all 0.2s linear",
    OTransition: "all 0.2s linear",
    WebkitTransition: "all 0.2s linear",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
});

function GridTechLogoItem(props) {
  const { src, alt } = props;
  const { classes } = props;

  return (
    <Grid item xs={2}>
      <Tooltip title={alt.split(" ")[0]} placement="top" arrow>
        <img src={src} alt={alt} className={classes.techLogo} />
      </Tooltip>
    </Grid>
  );
}
export default withStyles(styles)(GridTechLogoItem);
