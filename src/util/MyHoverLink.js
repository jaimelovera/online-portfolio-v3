import React from "react";

// Material-UI stuff
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  primary: {
    color: theme.palette.primary.main,
    display: "inline-block",
    "&:hover": { textDecoration: "none" },
    "&:after": {
      content: "''",
      display: "block",
      width: 0,
      height: 1,
      position: "relative",
      bottom: "0.2em",
      backgroundColor: theme.palette.primary.main,
      MozTransition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      OTransition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      WebkitTransition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
    },
    "&:hover::after": {
      width: "100%",
    },
  },
  secondary: {
    color: theme.palette.secondary.main,
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
      MozTransition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      OTransition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      WebkitTransition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
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
      className={`${className} ${color === "secondary" ? secondary : primary}`}
    >
      {props.children}
    </Link>
  );
}
export default withStyles(styles)(MyHoverLink);
