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
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="app-container">
        <p style={{ height: "150vh", margin: 0 }}>Hello from app</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
