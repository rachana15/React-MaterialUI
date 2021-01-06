import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Form, UseForm } from "../../Components/UseForm";

const initialFieldValues = {
  id: 0,
  email: "",
  fullName: "",
  mobile: "",
  city: "",
  gender: "female",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  const { values, setValues, handleInputChange } = UseForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            value={values.fullName}
            name="fullName"
            label="full name"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            value={values.email}
            label="Email"
            name="email"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
