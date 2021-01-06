import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function UseForm(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);
  console.log(values);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
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

export function Form(props) {
  const classes = useStyles();
  return <form className={classes.root}>{props.children}</form>;
}
