import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { signIn } from "../../../store/auth.slice";

const PageSignin: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const [checked, setChecked] = React.useState<boolean>(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const googleHandler = async () => {
    console.error("Login");
  };
  return (
    <Grid container direction="column" justifyContent="center">
      <Box sx={{ position: "relative" }}>
        <Typography
          color={theme.palette.secondary.main}
          gutterBottom
          variant={matchDownSM ? "h5" : "h4"}
          textAlign={"center"}
        >
          Sign In
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
            src={"./assets/icons/social-google.svg"}
            alt="google"
            width={16}
            height={16}
            style={{ marginRight: matchDownSM ? 8 : 16 }}
          />
        </Box>
        Sign in with Google
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
            m: 2,
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
          email: "info@codedthemes.com",
          password: "123456",
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
          dispatch(signIn());
          navigate("/");
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
            <Box>
              <FormControl
                fullWidth
                error={Boolean(touched.email && errors.email)}
                size="small"
              >
                <InputLabel htmlFor="outlined-adornment-email-login">
                  Email Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Email Address / Username"
                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box pt={4}>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(touched.password && errors.password)}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
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
                  label="Password"
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Stack>
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
                color="secondary"
              >
                Sign in
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
            to="/signup/"
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "#000000" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageSignin;
