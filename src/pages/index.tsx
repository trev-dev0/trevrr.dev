import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import "@fontsource/roboto-mono";
import { motion } from "framer-motion";
const Index = () => {
  return (
    <Layout>
      <Flex
        dir="column"
        w="100%"
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="auto"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <Box
          w={{ base: "100%", sm: "100%", md: "80%" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="0px"
            // width="55%"
            overflowX="hidden"
            mt={{base: "10vh", sm: "0",md: "0", lg: "0"}}
          >
            <Box maxW="95%" margin="auto">
              <Heading size="4xl">Hello,</Heading>

              <Heading size="4xl">
                <Flex direction="row">
                  I'm{" "}
                  <motion.div
                    transition={
                      {
                        // repeat: "Infinity",
                        // duration: 0.2,
                        // repeatDelay: 1
                      }
                    }
                    whileHover={{
                      scale: 1.2,
                    }}
                    animate={{}}
                  >
                    <Text color="purple.300" as="span" ml={4}>
                      trevor
                    </Text>
                  </motion.div>
                </Flex>
              </Heading>

              <Box>
                <Text fontFamily="Roboto Mono" mt={1}>
                  I'm a recent graduate from Eastern Kentucky University where I
                  received my Bachelor's degree in Computer Science. I'm an
                  aspiring web developer who loves to learn about cutting edge
                  technologies used in the web.
                </Text>
                <Text fontFamily="Roboto Mono" mt={3}>
                  I have experience working with all parts of the stack, but I
                  enjoy frontend development the most. I'm most experienced with
                  React, utilizing react hooks specifically, and I'm currently doing
                  developing with the NextJS framework.
                </Text>
                <Text fontFamily="Roboto Mono" mt={3}>
                  I encourage you to use the links in the nav to discover more about me and how I can be an amazing asset for you.
               </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Index;
