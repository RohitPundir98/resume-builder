
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setcontact, updatecontact } from "../Redux/actions/setcontact";
import fieldCd from "../Redux/constants/typeCodes";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  Box,
  Card,
  FormControl,
  Button,
  Typography,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";

function PersonalInformation(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (props.contact !== null) {
      props.updatecontact(data);
    } else {
      props.setcontact(data);
    }
    setOpen(true);
    navigate("/Detailfilling");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justifty-center items-center mt-10">
        <div className="mb-4">
          <Typography
            className="mt-4 mb-6 font-bold text-2xl text-center md:text-1xl"
            variant="h4"
          >
            <AccountBoxIcon /> Personal Information
          </Typography>
        </div>

        <Card className="border-4  border-white-100 bg-white p-[5vw]">
          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto">
            <TextField
              className=""
              label="FIRST NAME"
              {...register(fieldCd.FirstName, { required: true })}
              defaultValue={
                props.contact ? props.contact[fieldCd.FirstName] : ""
              }
              error={errors[fieldCd.FirstName] ? true : false}
              helperText={errors[fieldCd.FirstName] && "First name is required"}
            />

            <TextField
              label="LAST NAME"
              {...register(fieldCd.LastName, { required: true })}
              defaultValue={
                props.contact ? props.contact[fieldCd.LastName] : ""
              }
              error={errors[fieldCd.LastName] ? true : false}
              helperText={errors[fieldCd.LastName] && "Last name is required"}
            />
          </Box>

          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto mt-4">
            <TextField
              label="E-MAIL"
              {...register(fieldCd.Email, {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              defaultValue={props.contact ? props.contact[fieldCd.Email] : ""}
              error={errors[fieldCd.Email] ? true : false}
              helperText={
                errors[fieldCd.Email] && "Please enter a valid email address"
              }
            />
            <TextField
              label="MOBILE"
              {...register(fieldCd.Mobile, {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              defaultValue={props.contact ? props.contact[fieldCd.Mobile] : ""}
              error={errors[fieldCd.Mobile] ? true : false}
              helperText={
                errors[fieldCd.Mobile] &&
                "Please enter a 10-digit mobile number"
              }
            />
          </Box>

          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto mt-4">
            <TextField
              label="CITY"
              {...register(fieldCd.City, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.City] : ""}
              error={errors[fieldCd.City] ? true : false}
              helperText={errors[fieldCd.City] && "City is required"}
            />
            <TextField
              label="STATE"
              {...register(fieldCd.State, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.State] : ""}
              error={errors[fieldCd.State] ? true : false}
              helperText={errors[fieldCd.State] && "State is required"}
            />
          </Box>

          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto mt-4">
            <TextField
              label="PIN-CODE"
              {...register(fieldCd.Postal, {
                required: true,
                pattern: /^[0-9]{6}$/,
              })}
              defaultValue={props.contact ? props.contact[fieldCd.Postal] : ""}
              error={errors[fieldCd.Postal] ? true : false}
              helperText={
                errors[fieldCd.Postal] &&
                "Please enter a valid 6-digit pin-code"
              }
            />
            <TextField
              type="date"
              {...register(fieldCd.Dob, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.Dob] : ""}
              error={errors[fieldCd.Dob] ? true : false}
              helperText={errors[fieldCd.Dob] && "Date of Birth is required"}
            />
          </Box>

          <FormControl className="w-full mt-4">
            <label className="mt-2">ADDRESS</label>
            <textarea
              type=""
              rows={2}
              className="border border-gray-400   p-2 rounded hover:outline-blue-400"
              {...register(fieldCd.Address, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.Address] : ""}
              error={errors[fieldCd.Address] ? true : false}
            ></textarea>
            {errors[fieldCd.Address] && (
              <span className="text-red-500">Address is required</span>
            )}
          </FormControl>

          <FormControl className="w-full mt-5">
            <label className="mt-2">Summary</label>
            <textarea
            rows={4}
              className="border border-gray-400 p-2 rounded hover:outline-blue-400"
              {...register(fieldCd.Objective, { required: true })}
              defaultValue={
                props.contact ? props.contact[fieldCd.Objective] : ""
              }
              error={errors[fieldCd.Objective] ? true : false}
            ></textarea>
            {errors[fieldCd.Objective] && (
              <span className="text-red-500">Objective is required</span>
            )}
          </FormControl>

          <div className="mt-4">
            <Button
              className="ml-[40%] bg-green-500 text-white w-[20%]"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {props.contact ? "Updated" : "Submit"}
            </Button>
          </div>
        </Card>
      </div>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Personal Details Submitted!
        </Alert>
      </Snackbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setcontact: (contact) => dispatch(setcontact(contact)),
    updatecontact: (contact) => dispatch(updatecontact(contact)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformation);
