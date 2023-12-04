import { Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
const Layout = () => {
  return (
    <>
      <Grid background="">
        <NavBar />
        <Box padding={2}>
          <Outlet />
        </Box>
      </Grid>
    </>
  );
};

export default Layout;
