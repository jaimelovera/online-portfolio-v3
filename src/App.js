import React from "react";
import themeFile from "./util/theme";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/sections/Intro/Intro";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";

// Material-UI Stuff
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme(themeFile);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {[
        ["intro", <Intro />],
        ["about", <About />],
        ["projects", <Projects />],
        ["contact", <Contact />],
      ].map((item) => (
        <div id={item[0]}>{item[1]}</div>
      ))}
    </ThemeProvider>
  );
}

export default App;
