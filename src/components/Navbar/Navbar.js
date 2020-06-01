import React, { Component } from "react";
import logoImg from "../../img/name-logo.png";
import resume from "../../pdf/jaimelovera-resume.pdf";
import HideOnScroll from "../../util/HideOnScroll";

// Material-UI stuff
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Material-UI Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./Navbar.module.css";

class Navbar extends Component {
  state = {
    drawerOpen: false,
  };

  handleDrawerOpenClose = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  };

  render() {
    const { drawerOpen } = this.state;

    const navLinks = (linkStyles, linksContainerStyles, mobileView = false) => (
      <div className={linksContainerStyles}>
        {[
          ["#about", "About"],
          ["#projects", "Projects"],
          ["#contact", "Contact"],
        ].map((item) => {
          return (
            <Link
              key={item[0]}
              href={item[0]}
              onClick={mobileView ? this.handleDrawerOpenClose : null}
              color="secondary"
              underline="none"
              className={linkStyles}
            >
              {item[1]}
            </Link>
          );
        })}
        <Link
          href={resume}
          target="_blank"
          rel="noreferrer"
          color="secondary"
          underline="none"
          className={`${linkStyles} ${styles.resumeLink}`}
        >
          <Button
            variant="contained"
            color={!mobileView ? "primary" : "default"}
          >
            Resume
          </Button>
        </Link>
      </div>
    );

    return (
      <HideOnScroll>
        <AppBar color="primary">
          <Toolbar className={styles.navContainer}>
            {/* Empty onOpen function to remove PropType isRequired error.
            I dont need it... */}
            <SwipeableDrawer
              anchor={"right"}
              open={drawerOpen}
              onClose={this.handleDrawerOpenClose}
              onOpen={() => {}}
            >
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                className={styles.drawerTopBar}
              >
                <IconButton
                  className={styles.menuButton}
                  onClick={this.handleDrawerOpenClose}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
              {navLinks(
                `${styles.navLink} ${styles.navLinkDrawer}`,
                `${styles.navLinks} ${styles.navLinksDrawer}`,
                true
              )}
            </SwipeableDrawer>
            <a href="/">
              <img src={logoImg} alt="Logo" className={styles.logoImg} />
            </a>
            <Hidden xsDown>{navLinks(styles.navLink, styles.navLinks)}</Hidden>
            <Hidden smUp>
              {!drawerOpen && (
                <IconButton
                  className={styles.menuButton}
                  onClick={this.handleDrawerOpenClose}
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
}

export default Navbar;
