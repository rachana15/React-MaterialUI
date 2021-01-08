import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Form, UseForm } from "../../Components/UseForm";
import * as employeeService from "../../Services/employeService";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

function EmployeeForm() {
  //Validation function
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    const newLocal = /$^|.+@.+..+/;

    if ("email" in fieldValues)
      temp.email = newLocal.test(fieldValues.email) ? null : "Invalid email";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? null : "Minimum of 9 numbers required";
    if ("departmentID" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? null : "This field is required";

    setErrors({ ...temp });
    // console.log(errors);

    if (fieldValues == values)
      return Object.values(temp).every((x) => x == null);
  };

  //resuable variables and functions
  const { values, setValues, handleInputChange, errors, setErrors } = UseForm(
    initialFieldValues,
    true,
    validate
  );
  const classes = useStyle();
  const handleCheckedInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };
  const handleDateChange = (name, date) => {
    setValues({ ...values, [name]: date });
  };
  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      resetForm();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="outlined"
            value={values.fullName}
            name="fullName"
            label="Full name"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            value={values.email}
            label="Email"
            name="email"
            onChange={handleInputChange}
            {...(errors.email && { error: true, helperText: "Invalid Email" })}
          />
          <TextField
            variant="outlined"
            value={values.city}
            label="City"
            name="city"
            onChange={handleInputChange}
          />
          <TextField
            required
            variant="outlined"
            value={values.mobile}
            label="Mobile"
            name="mobile"
            onChange={handleInputChange}
            {...(errors.mobile && {
              error: true,
              helperText: "Minimum of 9 numbers required",
            })}
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
          <FormControl varient="outlined" required>
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
          <FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Hire Date"
                  name="hireDate"
                  value={values.hireDate}
                  onChange={(date) => handleDateChange("hireDate", date)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>

        <Grid item xs={12}></Grid>
        <div>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            classes={{ root: classes.root, label: classes.label }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            classes={{ root: classes.root, label: classes.label }}
            type="reset"
            onClick={resetForm}
          >
            Reset
          </Button>
        </div>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
