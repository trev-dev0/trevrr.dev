import { Flex, Text, Heading } from "@chakra-ui/layout";
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
          <Heading size="4xl" color="purple.300">
            Tools
          </Heading>
          <Text fontFamily="Roboto Mono" color="white">
            Since I first picked up web design and web development, I've created
            a toolset that I love to use and get better with every day. Below
            are the tools I use the most.
          </Text>
          <Tools setToolText={setCurrentText} />
          <Text fontFamily="Roboto Mono" mt={3}>
            {currentText}
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Skills;
