import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
    display: "flex",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageDescription: {
    paddingLeft: theme.spacing(2),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

function PageHeader({ title, subTitle, icon }) {
  const classes = useStyles();
  return (
    <Paper square elevation={0} className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>

        <div className={classes.pageDescription}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>

        <div className={classes.pageDescription}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PageHeader;
