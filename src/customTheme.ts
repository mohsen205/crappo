import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0D0D2B",
    },
    secondary: {
      main: "#2B076E",
    },
    accent: {
      main: "#3671E9",
    },
    grey: {
      300: "#828282",
      400: "#BDBDBD",
      500: "#E0E0E0",
      600: "#F2F2F2",
    },
  },
  typography: {
    h1: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "76px",
      color: "#C4C4C4",
    },
    h2: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "150%",
      color: "#C4C4C4",
    },
    h3: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "150%",
      color: "#C4C4C4",
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "150%",
      color: "#C4C4C4",
    },
    subtitle2: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "150%",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "#C4C4C4",
    },
    body1: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "28px",
      letterSpacing: "0.01em",
    },
  },
});
