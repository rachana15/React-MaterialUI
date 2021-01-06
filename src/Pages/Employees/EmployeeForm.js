import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
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
import { useStyles } from "@material-ui/pickers/views/Calendar/Day";

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
  const { values, setValues, handleInputChange } = UseForm(initialFieldValues);
  const classes = useStyle();
  const handleCheckedInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };
  const handleDateChange = (name, date) => {
    setValues({ ...values, [name]: date });
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
          <TextField
            variant="outlined"
            value={values.city}
            label="City"
            name="city"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            value={values.mobile}
            label="Mobile"
            name="mobile"
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

        <Grid xs={12}></Grid>
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
          >
            Reset
          </Button>
        </div>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
