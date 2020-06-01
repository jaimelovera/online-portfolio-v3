import React, { Component } from "react";
import logoImg from "../img/name-logo.png";
import resume from "../pdf/jaimelovera-resume.pdf";
import HideOnScroll from "../util/HideOnScroll";

// Material-UI stuff
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

// Material-UI Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./Navbar.module.css";

class Navbar extends Component {
  state = {
    drawerOpen: false,
  };

  handleMenuButtonClick = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  };

  render() {
    const { drawerOpen } = this.state;

    const navLinks = (linkStyles, linksStyles) => (
      <div className={linksStyles}>
        <Link
          href="#about"
          color="primary"
          underline="none"
          className={linkStyles}
        >
          About
        </Link>
        <Link
          href="#projects"
          color="primary"
          underline="none"
          className={linkStyles}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          color="primary"
          underline="none"
          className={linkStyles}
        >
          Contact
        </Link>
        <Link
          href={resume}
          target="_blank"
          rel="noreferrer"
          color="primary"
          underline="none"
          className={`${linkStyles} ${styles.resumeLink}`}
        >
          Resume
        </Link>
      </div>
    );

    return (
      <HideOnScroll {...this.props}>
        <div>
          <AppBar color="secondary">
            <Toolbar className={styles.navContainer}>
              <Drawer
                anchor={"right"}
                open={drawerOpen}
                onClose={this.handleMenuButtonClick}
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
                    onClick={this.handleMenuButtonClick}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
                {navLinks(
                  `${styles.navLink} ${styles.navLinkDrawer}`,
                  `${styles.navLinks} ${styles.navLinksDrawer}`
                )}
              </Drawer>
              <img src={logoImg} alt="jl logo" className={styles.logoImg} />
              <Hidden xsDown>
                {navLinks(styles.navLink, styles.navLinks)}
              </Hidden>
              <Hidden smUp>
                {!drawerOpen && (
                  <IconButton
                    className={styles.menuButton}
                    onClick={this.handleMenuButtonClick}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Hidden>
            </Toolbar>
          </AppBar>
          {/* This is just here to fill in the space under the navbar */}
          <Toolbar />
        </div>
      </HideOnScroll>
    );
  }
}

export default Navbar;
