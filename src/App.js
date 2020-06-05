import React from "react";
import themeFile from "./util/theme";
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
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
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {[
        ["intro", <Intro />],
        ["about", <About />],
        ["projects", <Projects />],
        ["contact", <Contact />],
        ["footer", <Footer />],
      ].map((item) => (
        <div id={item[0]} key={item[0]}>
          {item[1]}
        </div>
      ))}
    </ThemeProvider>
  );
}

export default App;
