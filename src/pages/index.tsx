import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout"
import "@fontsource/caveat";
const Index = () => {
  return (
    <Layout>
      <Grid gridTemplateColumns="repeat(12, 1fr)">
        <Box gridColumn="1/3">
          <Navbar/>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Index;
