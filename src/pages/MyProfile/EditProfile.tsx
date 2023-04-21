import React from "react";
import { Divider, Paper, Typography } from "@mui/material";

interface EditProfileProps {}
const EditProfile: React.FC<EditProfileProps> = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography gutterBottom variant="h5" component="div">
        Edit Profile
      </Typography>
      <Divider />
    </Paper>
  );
};
export default EditProfile;
