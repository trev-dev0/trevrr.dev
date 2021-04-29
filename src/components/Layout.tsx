import { Grid, Box } from "@chakra-ui/layout";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Grid gridTemplateColumns="repeat(18, 1fr)" gridTemplateRows="repeat(12, 1fr)" zIndex="0" bg="gray.900">
        <Head>
            <title>trevrr.dev</title>
        </Head>
      <Box gridColumn={{base: "1/19", sm: "1/19", md: "1/19", lg: "1/5", xl: "1/4"}} gridRow={{base: "1/5", sm: "1/4", md: "1/4", lg: "1/13"}} bg="gray.900" zIndex="50">
        <Navbar />
      </Box>
      <Box gridColumn="9/13">
          {children}
      </Box>
    </Grid>
  );
};

export default Layout;
