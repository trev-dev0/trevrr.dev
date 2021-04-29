import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout"
import "@fontsource/caveat";
const Index = () => {
  return (
    <Layout>
      <Grid gridTemplateColumns="repeat(18, 1fr)" zIndex="0">
        <Box gridColumn="1/3" bg="gray.900" zIndex="50">
          <Navbar/>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Index;
