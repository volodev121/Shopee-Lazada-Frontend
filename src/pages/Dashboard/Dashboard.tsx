import { Box,  Grid } from "@mui/material";
import PageHeader from "../../layouts/PageHeader/PageHeader";

interface DashboardProps {}
const PageDashboard: React.FC<DashboardProps> = () => {
  return (
    <Box>
      <PageHeader title="Dashboard" active="Dashboard" items={["Dashboard"]} />
      <Grid container spacing={4}></Grid>
    </Box>
  );
};

export default PageDashboard;
