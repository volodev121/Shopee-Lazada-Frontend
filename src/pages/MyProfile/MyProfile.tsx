import { Box, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../../layouts/PageHeader/PageHeader";
import EditPassword from "./EditPassword";

interface PageMyProfilesProps {}

const PageMyProfile: React.FC<PageMyProfilesProps> = () => {
  return (
    <Box>
      <PageHeader title="My Profile" active="MyProfile" items={["MyAccount"]} />
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <EditPassword />
        </Grid>
      </Grid>
    </Box>
  );
};
export default PageMyProfile;
