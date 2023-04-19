import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  console.log("-----");
  return (
    <>
      <Outlet />
    </>
  );
};
export default AuthLayout;
