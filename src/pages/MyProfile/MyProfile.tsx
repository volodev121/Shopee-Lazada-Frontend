import { Box, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../../layouts/PageHeader/PageHeader";
import EditPassword from "./EditPassword";
import EditProfile from "./EditProfile";

interface PageMyProfilesProps {}

const PageMyProfile: React.FC<PageMyProfilesProps> = () => {
  return (
    <Box>
      <PageHeader title="My Profile" active="MyProfile" items={["MyAccount"]} />
      <Grid container spacing={4}>
        <Grid item md={4} sm={12} xs={12}>
          <EditPassword />
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <EditProfile />
        </Grid>
      </Grid>
    </Box>
  );
};
export default PageMyProfile;
