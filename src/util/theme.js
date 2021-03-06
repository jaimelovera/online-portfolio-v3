import blueGrey from "@material-ui/core/colors/blueGrey";

const primaryMain = blueGrey[300];

let ThemeConfiguration = {
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: '"Nunito", sans-serif',
    },
    body2: {
      fontSize: "1.135rem",
      fontFamily: '"Nunito", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Nunito", sans-serif',
    },
    h1: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.16rem",
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 700,
    },
  },
  globalStyles: {
    textShadowPrimary: {
      textShadow: "#90a4ae 1px 0 10px",
    },
    textShadowWhite: {
      textShadow: "#FFF 1px 0 10px",
    },
  },
};

export default ThemeConfiguration;