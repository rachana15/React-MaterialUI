import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";
import SideMenu from "../Components/SideMenu";
import "./App.css";

import Employees from "../Pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f832456",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

const useStyles = makeStyles({
  header: {
    paddingLeft: "320px !important",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <SideMenu />
        <div className={classes.header}>
          <Header />
          <Employees />
        </div>

        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
