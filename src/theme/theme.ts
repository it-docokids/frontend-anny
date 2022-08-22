import { createTheme } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    primary: {
      main: "#18b4b0",
    },
    secondary: {
      light: "#6c757d",
      main: "#343a40",
      dark: "#262B47",
    },
    info: {
      main: "#0dcaf0",
    },
    error: {
      main: "#ed5482",
    },
    warning: { main: "#ffc107" },
    success: { main: "#198754" },
  },
});
export default theme;
