import React from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import {
  Paper,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import { strengthColor, strengthIndicator } from "../../utils/passwordStrength";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const EditPassword = () => {
  interface levelType {
    label: string;
    color: string;
  }
  const [showPassword, setShowPassword] = React.useState(false);
  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState<levelType>();

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    changePassword("123456");
  }, []);
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography gutterBottom variant="h5" component="div">
        Edit Password
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
          pb: 2,
          px: { sm: 10, xs: 3 },
          zIndex: 9999,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/assets/imgs/avatar/1 (91).jpg"
          sx={{ width: "100px", height: "100px" }}
        />
        <Typography sx={{ fontSize: "20px", pt: 1, fontWeight: 700 }}>
          Alexandr Bliakh
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          JhonDoe@gmail.com
        </Typography>
      </Box>
      <Formik
        initialValues={{
          password: "",
          confirm: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().max(255).required("Password is required"),
          confirm: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          // try {
          //   if (scriptedRef.current) {
          //     setStatus({ success: true });
          //     setSubmitting(false);
          //   }
          // } catch (err) {
          //   console.error(err);
          //   if (scriptedRef.current) {
          //     setStatus({ success: false });
          //     setErrors({ submit: err.message });
          //     setSubmitting(false);
          //   }
          // }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid item md={12} sm={12} xs={12} sx={{ pt: 2 }}>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(touched.password && errors.password)}
              >
                <InputLabel htmlFor="outlined-adornment-password-register">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-register"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-register"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={12} sm={12} xs={12} sx={{ pt: 2 }}>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(touched.password && errors.password)}
              >
                <InputLabel htmlFor="outlined-adornment-password-register">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-register"
                  type={showPassword ? "text" : "password"}
                  value={values.confirm}
                  name="confirm"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(e.target.value);
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-register"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box
                        style={{ backgroundColor: level?.color }}
                        sx={{ width: 85, height: 8, borderRadius: "7px" }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Divider />

            <Grid container spacing={4} sx={{ pt: 3 }}>
              <Grid item md={6} sm={12} xs={12}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </Button>
              </Grid>{" "}
              <Grid item md={6} sm={12} xs={12}>
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  variant="contained"
                  color="error"
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default EditPassword;
