import Layout from "../components/Layout";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Awards from "../components/Awards";
import { useMotionValue } from "framer-motion";

const AwardsPage = () => {
  
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
        <Box w={{ base: "95%", sm: "95%", md: "80%", lg: "70%" }} h="100%"   >
          <Flex direction="column" h="100%" >
            <Heading fontFamily="Roboto Mono" size="4xl" color="purple.500">
              Education & Awards
            </Heading>
            <Box
            h="100%"
            >
              <Awards />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default AwardsPage;
