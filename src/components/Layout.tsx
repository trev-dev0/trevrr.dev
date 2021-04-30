import { Flex, Grid, Box } from "@chakra-ui/layout";
import Head from "next/head";
import Navbar from "./Navbar";
import { useEffect, useReducer, useRef, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";

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
      <Box z-index="50" bg="gray.900" w="fit-content">
        <Navbar resetPosition={resetPosition} />
      </Box>
      <Box gridColumn="9/13" zIndex="0">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
