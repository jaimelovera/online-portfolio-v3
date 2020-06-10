import React from "react";

// Material-UI Stuff
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

function GridTechLogoItem(props) {
  const { src, alt } = props;
  const styles = {
    techLogo: {
      width: "100%",
      height: "auto",
      maxWidth: 38,
      maxHeight: 38,
      padding: "5px 0 5px 0",
    },
  };

  return (
    <Grid item xs={2}>
      <Tooltip title={alt.split(" ")[0]} placement="top" arrow>
        <img src={src} alt={alt} style={styles.techLogo} />
      </Tooltip>
    </Grid>
  );
}
export default GridTechLogoItem;
