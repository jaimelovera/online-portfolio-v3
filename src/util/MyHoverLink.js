import React from "react";

// Material-UI stuff
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const transition = "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s";

const styles = (theme) => ({
  primary: {
    color: theme.palette.primary.dark,
    display: "inline-block",
    textDecoration: "none",
    "&:hover": { textDecoration: "none" },
    "&:after": {
      content: "''",
      display: "block",
      width: 0,
      height: 1,
      position: "relative",
      bottom: "0.2em",
      backgroundColor: theme.palette.primary.dark,
      MozTransition: transition,
      OTransition: transition,
      WebkitTransition: transition,
      transition: transition,
    },
    "&:hover::after": {
      width: "100%",
    },
  },
  secondary: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    display: "inline-block",
    "&:hover": { textDecoration: "none" },
    "&:after": {
      content: "''",
      display: "block",
      width: 0,
      height: 1,
      position: "relative",
      bottom: "0.2em",
      backgroundColor: theme.palette.secondary.main,
      MozTransition: transition,
      OTransition: transition,
      WebkitTransition: transition,
      transition: transition,
    },
    "&:hover::after": {
      width: "100%",
    },
  },
});

function MyHoverLink(props) {
  const {
    classes: { primary, secondary },
    className,
    color,
  } = props;

  return (
    <Link
      {...props}
      target="_blank"
      className={`${className} ${color === "secondary" ? secondary : primary}`}
    >
      {props.children}
    </Link>
  );
}
export default withStyles(styles)(MyHoverLink);
