import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../Components/Header";
import SideMenu from "../Components/SideMenu";
import "./App.css";

const useStyles = makeStyles({
  header: {
    paddingLeft: "320px !important",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className="app">
      <SideMenu />
      <div className={classes.header}>
        <Header />
      </div>
      <CssBaseline />
    </div>
  );
}

export default App;
