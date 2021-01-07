import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function UseForm(
  initialFieldValues,
  validateOnChange = false,
  validate
) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  console.log(values);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(2),
    },
  },
}));

export function Form({ children, ...other }) {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}
