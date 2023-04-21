import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  strengthColor,
  strengthIndicator,
} from "../../../utils/passwordStrength";
import { useTheme } from "@mui/material/styles";

const PageSignup = () => {
  interface levelType {
    label: string;
    color: string;
  }

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState<levelType>();
  const googleHandler = async () => {
    console.error("Login");
  };

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
    <Grid container direction="column" justifyContent="center">
      <Box sx={{ position: "relative" }}>
        <Typography
          color={theme.palette.primary.main}
          gutterBottom
          variant={matchDownSM ? "h5" : "h4"}
          textAlign={"center"}
        >
          Sign Up
        </Typography>
      </Box>
      <Button
        disableElevation
        fullWidth
        onClick={googleHandler}
        size="large"
        variant="outlined"
        sx={{
          color: "grey.700",
          backgroundColor: "rgb(248, 250, 252)",
          border: "1px solid rgb(238, 242, 246)",
        }}
      >
        <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
          <img
            src={"/assets/icons/social-google.svg"}
            alt="google"
            width={16}
            height={16}
            style={{ marginRight: matchDownSM ? 8 : 16 }}
          />
        </Box>
        Sign up with Google
      </Button>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

        <Button
          variant="outlined"
          sx={{
            cursor: "unset",
            m: 1,
            py: 0.5,
            px: 7,
            fontWeight: 500,
            borderColor: "  solid  rgb(238, 242, 246)",
            borderRadius: "12px",
          }}
          disableRipple
          disabled
        >
          <span style={{ color: "#2e2e2e" }}>OR</span>
        </Button>

        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
      </Box>

      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
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
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  margin="normal"
                  name="fname"
                  type="text"
                  defaultValue=""
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  margin="normal"
                  name="lname"
                  type="text"
                  defaultValue=""
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid item md={12} sm={12} xs={12} sx={{ pt: 2 }}>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(touched.email && errors.email)}
              >
                <InputLabel htmlFor="outlined-adornment-email-register">
                  Email Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-register"
                  type="email"
                  value={values.email}
                  name="email"
                  label="Email Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.email}
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
                  value={values.password}
                  name="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
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

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Agree with &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={NavLink}
                        to="#"
                      >
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
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
            </Box>
          </form>
        )}
      </Formik>

      <Grid item xs={12} sx={{ py: 3 }}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid item container direction="column" alignItems="center" xs={12}>
          <Typography
            component={NavLink}
            to="/pages/login/login3"
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "#000000" }}
          >
            Already have an account?
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageSignup;
