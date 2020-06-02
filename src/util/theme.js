import blueGrey from "@material-ui/core/colors/blueGrey";

const primary = blueGrey[300];

export default {
  palette: {
    primary: {
      main: primary,
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
      fontSize: "1.1rem",
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 400,
    },
  },
};
