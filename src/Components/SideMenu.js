import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  sidemenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    zIndex: 100,
    backgroundColor: "purple",
  },
});
function SideMenu() {
  const classes = useStyles();
  return <div className={classes.sidemenu}></div>;
}

export default SideMenu;
