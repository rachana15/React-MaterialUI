import React from "react";
import PageHeader from "../../Components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import { EnhancedTable as EmployeeTable } from "./EmployeeTable";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { makeStyles, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(5),
  },
}));

function Employees() {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Page Description"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        
        <EmployeeTable />
      </Paper>
    </>
  );
}

export default Employees;
