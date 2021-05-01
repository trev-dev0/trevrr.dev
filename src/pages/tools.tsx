import { Flex, Text, Heading, Box } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Layout from "../components/Layout";
import Tools from "../components/Tools";

const Skills = () => {
  let [currentText, setCurrentText] = useState("");
  return (
    <Layout>
      <Flex
        direction="column"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          direction="column"
          w={{ base: "90%", sm: "90%", md: "80%", lg: "50%" }}
        >
          <Heading fontFamily="Roboto Mono" size="4xl" color="purple.300">
            Tools
          </Heading>
          <Text fontFamily="Roboto Mono" color="white">
            Since I first picked up web design and web development, I've created
            a toolset that I love to use and get better with every day. Below
            are the tools I use the most.
          </Text>
          <Tools setToolText={setCurrentText} />
          <Box position="relative" boxSize="fit-content">
            <Box position="relative" w="100%" h="200px">
              <AnimatePresence>
                <motion.p
                  key={currentText}
                  initial={{
                    scale: 0.1,
                  }}
                  animate={{ scale: 1 }}
                  exit={{}}
                >
                  <Text fontFamily="Roboto Mono" mt={3}></Text>
                  {currentText}
                </motion.p>
              </AnimatePresence>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Skills;
