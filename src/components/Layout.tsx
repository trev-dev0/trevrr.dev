import { Grid } from "@chakra-ui/layout";
import Head from "next/head";

const Layout = ({children}) => {
  return (
    <Grid w="100%" h="100%" bg="gray.900">
      <Head>
        <title>trevrr.dev</title>
      </Head>
      {children}
    </Grid>
  );
};

export default Layout;