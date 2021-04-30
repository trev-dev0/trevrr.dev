import { Flex, Text, Heading } from "@chakra-ui/layout";
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
        <Flex direction="column" w="50%">
          <Heading fontFamily="Roboto Mono" size="4xl" color="purple.300">
            Tools
          </Heading>
          <Text fontFamily="Roboto Mono" color="white">
            Since I first picked up web design and web development, I've created
            a toolset that I love to use and get better with every day. Below
            are the tools I use the most.
          </Text>
          <Tools setToolText={setCurrentText} />
          <AnimatePresence>
            <motion.p
              key={currentText}
              initial={{
                y: 0,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
            >
              <Text fontFamily="Roboto Mono" mt={3}></Text>
              {currentText}
            </motion.p>
          </AnimatePresence>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Skills;
