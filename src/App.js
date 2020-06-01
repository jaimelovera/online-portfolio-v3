import React from "react";

import "./App.css";
import themeFile from "./util/theme";

// Components
import Navbar from "./components/Navbar";

// Material-UI Stuff
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme(themeFile);

function App() {
  const style = {
    navBarOffSet: { paddingTop: "66px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="app-container">
        <div id="intro" style={style.navBarOffSet}>
          <p style={{ height: "150vh", margin: 0 }}>Hello from intro</p>
        </div>
        <div id="about" style={style.navBarOffSet}>
          <p style={{ height: "150vh", margin: 0 }}>Hello from about</p>
        </div>
        <div id="projects" style={style.navBarOffSet}>
          <p style={{ height: "150vh", margin: 0 }}>Hello from projects</p>
        </div>
        <div id="contact" style={style.navBarOffSet}>
          <p style={{ height: "150vh", margin: 0 }}>Hello from contact</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
