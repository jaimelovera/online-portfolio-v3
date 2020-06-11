import React, { Component } from "react";
import themeFile from "./util/theme";
import "./App.css";

// Components
import Navbar from "./components/layout/NavBar/Navbar";
import SideContactBar from "./components/layout/SideContactBar";
import PageLoadingSpinner from "./util/PageLoadingSpinner";
import Intro from "./components/sections/intro/Intro";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/sections/footer/Footer";

// Material-UI Stuff
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme(themeFile);
theme = responsiveFontSizes(theme);

class App extends Component {
  state = {
    pageLoaded: false,
  };

  componentDidMount() {
    window.addEventListener("load", () => this.setState({ pageLoaded: true }));
  }

  render() {
    const { pageLoaded } = this.state;

    const projectGitHubLink =
      "https://github.com/jaimelovera/online-portfolio-v3";
    const email = "lovera.jaime@gmail.com";
    const gitHubLink = "https://github.com/jaimelovera";
    const linkedInLink = "https://www.linkedin.com/in/jaimelovera/";

    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <SideContactBar
          gitHubLink={gitHubLink}
          linkedInLink={linkedInLink}
          email={email}
        />
        <PageLoadingSpinner pageLoaded={pageLoaded} />
        <div
          className={pageLoaded ? "app-animate-on-load" : "app-page-loading"}
        >
          <div id="intro">
            <Intro pageLoaded={pageLoaded} />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact email={email} />
          </div>
        </div>
        <Footer
          projectGitHubLink={projectGitHubLink}
          gitHubLink={gitHubLink}
          linkedInLink={linkedInLink}
        />
      </ThemeProvider>
    );
  }
}

export default App;
