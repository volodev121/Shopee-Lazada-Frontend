import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
const AuthLayout = () => {
  return (
    <Box
      sx={{
        backgroundColor: " rgb(238, 242, 246)",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src="/assets/imgs/logo1.png"
        alt="logo"
        width={"50px"}
        style={{ position: "fixed", top: "30px", left: "30px", zIndex: 9999 }}
      />
      <Container
        maxWidth="xs"
        sx={{
          border: "solid 2px rgba(144, 202, 249, 0.145)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          p: 4,
          top: { sm: "120px", xs: "100px" },
          position: "absolute",
          borderRadius: "12px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};
export default AuthLayout;
