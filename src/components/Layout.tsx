import { Flex, Grid, Box } from "@chakra-ui/layout";
import Head from "next/head";
import Navbar from "./Navbar";
import { useEffect, useReducer, useRef, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import AnimatedBackground from "./AnimatedBackground";
const Layout = ({ children }) => {
  let [position, setPosition] = useState(0);
  const resetPosition = () => {
    setPosition(0);
  };

  let direction = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "column",
    lg: "row",
  });
  return (
    <Flex
      // @ts-ignore
      direction={direction}
      w="100%"
      h="100%"
      bg="gray.900"
      alignItems={direction !== "column" ? "center": "flex-start"}
      overflowY="auto"
    >
      <Head>
        <title>trevrr.dev</title>
      </Head>
      <Box w="fit-content" z-index="50" bg="gray.900">
        <Navbar resetPosition={resetPosition} />
      </Box>
      <Box flex="1" w="max-content" h="95%" zIndex="10">
        {children}
      </Box>

      <AnimatedBackground/>
    </Flex>
  );
};

export default Layout;
