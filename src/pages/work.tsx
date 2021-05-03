import Layout from "../components/Layout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Works from "../components/Works";
const WorkPage = () => {
  return (
    <Layout>
      <Flex
        direction="column"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        maxHeight="none"
        p={5}
      >
        <Box w={{ base: "95%", sm: "95%", md: "80%", lg: "80%" }} h="100%">
          <Box w={{ base: "95%", sm: "95%", md: "80%", lg: "80%" }} h="100%">
            <Flex direction="column" h="100%">
              <Heading fontFamily="Roboto Mono" size="4xl" color="purple.500">
                Work & Projects
              </Heading>
              <Box h="100%">
                <Works />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default WorkPage;
