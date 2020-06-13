import React from "react";
import logoImg from "../../img/name-logo.png";
import resume from "../../pdf/jaimelovera-resume.pdf";
import HideOnScroll from "../../util/HideOnScroll";
import MyHoverLink from "../../util/MyHoverLink";

// Material-UI stuff
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Material-UI Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  navContainer: {
    justifyContent: "space-between",
    margin: "0 20px 0 20px",
  },
  logoImg: {
    height: 50,
    width: "auto",
    MozTransition: "all 0.2s ease-in",
    OTransition: "all 0.2s ease-in",
    WebkitTransition: "all 0.2s ease-in",
    transition: "all 0.2s ease-in",
    "&:hover": {
      filter: "saturate(250%)",
    },
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  navLink: {
    margin: "0 20px 0 20px !important",
  },
  resumeLink: {
    border: "1px solid #000",
    borderRadius: 4,
  },
  drawerTopBar: {
    minWidth: "50vw",
    padding: "5px 35px 5px 35px",
  },
  navLinksDrawer: {
    flexDirection: "column",
    marginTop: 10,
  },
  navLinkDrawer: {
    fontSize: "1.15em",
    margin: "20px !important",
  },
});

function Navbar(props) {
  const { classes } = props;
  const [drawerOpen, setDrawerState] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerState(true);
  };
  const handleDrawerClose = () => {
    setDrawerState(false);
  };

  const navLinks = (linkStyles, linksContainerStyles, mobileView = false) => (
    <div className={linksContainerStyles}>
      {[
        ["#about", "About"],
        ["#projects", "Projects"],
        ["#contact", "Contact"],
      ].map((item) => {
        return (
          <MyHoverLink
            key={item[0]}
            href={item[0]}
            onClick={mobileView ? handleDrawerClose : null}
            color="secondary"
            variant="body1"
            target="_self"
            className={`${linkStyles}`}
          >
            {item[1]}
          </MyHoverLink>
        );
      })}
      <Link
        href={resume}
        target="_blank"
        rel="noreferrer"
        color="secondary"
        underline="none"
        className={`${linkStyles} ${classes.resumeLink}`}
      >
        <Button variant="contained" color={!mobileView ? "primary" : "default"}>
          <Typography variant="body1">Resume</Typography>
        </Button>
      </Link>
    </div>
  );

  return (
    <HideOnScroll>
      <AppBar color="primary">
        <Toolbar className={classes.navContainer}>
          {/* Empty onOpen function to remove PropType isRequired error.
            I dont need it... */}
          <SwipeableDrawer
            anchor={"right"}
            open={drawerOpen}
            onClose={handleDrawerClose}
            onOpen={() => {}}
          >
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              className={classes.drawerTopBar}
            >
              <IconButton
                className={classes.menuButton}
                onClick={handleDrawerClose}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            {navLinks(
              `${classes.navLink} ${classes.navLinkDrawer}`,
              `${classes.navLinks} ${classes.navLinksDrawer}`,
              true
            )}
          </SwipeableDrawer>
          <a href="/">
            <img src={logoImg} alt="Logo" className={classes.logoImg} />
          </a>
          <Hidden xsDown>{navLinks(classes.navLink, classes.navLinks)}</Hidden>
          <Hidden smUp>
            {!drawerOpen && (
              <IconButton
                className={classes.menuButton}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default withStyles(styles)(Navbar);
