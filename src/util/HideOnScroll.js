import React from "react";

// Material-UI stuff
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fade from "@material-ui/core/Fade";

function HideOnScroll(props) {
  const trigger = useScrollTrigger({
    threshold: 50,
  });
  console.log(trigger);
  return <Fade in={!trigger}>{props.children}</Fade>;
}

export default HideOnScroll;
