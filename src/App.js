import React from "react";
import themeFile from "./util/theme";
import "./App.css";

// Components
import Navbar from "./components/layout/NavBar/Navbar";
import SideContactBar from "./components/layout/SideContactBar";
import SideEmailBar from "./components/layout/SideEmailBar";
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

function App() {
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
      <SideEmailBar email={email} />
      <div id="intro">
        <Intro />
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
      <div id="footer">
        <Footer
          projectGitHubLink={projectGitHubLink}
          gitHubLink={gitHubLink}
          linkedInLink={linkedInLink}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
