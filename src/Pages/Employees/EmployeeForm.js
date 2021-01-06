import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Form, UseForm } from "../../Components/UseForm";
import * as employeeService from "../../Services/employeService";

const initialFieldValues = {
  id: 0,
  email: "",
  fullName: "",
  mobile: "",
  city: "",
  gender: "female",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: true,
};

function EmployeeForm() {
  const { values, setValues, handleInputChange } = UseForm(initialFieldValues);
  const handleCheckedInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  return (
    <Form>
      <Grid container>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
          <FormControl varient="outlined">
            <InputLabel>Department</InputLabel>
            <Select
              labelId="Department"
              name="departmentId"
              value={values.departmentId}
              onChange={handleInputChange}
            >
              <MenuItem value="">None</MenuItem>
              {employeeService.getDepartmentCollection().map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isPermanent}
                  onChange={handleCheckedInput}
                  name="isPermanent"
                />
              }
              label="Permanent Employee"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
