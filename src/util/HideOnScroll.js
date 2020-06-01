import React from "react";

// Material-UI stuff
import Fade from "@material-ui/core/Fade";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function HideOnScroll(props) {
  const trigger = useScrollTrigger({
    threshold: 80,
  });
  return <Fade in={!trigger}>{props.children}</Fade>;
}

export default HideOnScroll;
