import { Flex, Grid, Box } from "@chakra-ui/layout";
import Head from "next/head";
import Navbar from "./Navbar";
import { useEffect, useReducer, useRef, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import LoadingScreen from "./LoadingScreen";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
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
      bg="blackAlpha.600"
      alignItems={direction !== "column" ? "center" : "flex-start"}
      overflowY="hidden"
      overflowX="hidden"
    >
      {loading ? <LoadingScreen /> : null}
      <Head>
        <title>trevrr.dev</title>
      </Head>
      <Box w="270px" z-index="50" bg="">
        <Navbar resetPosition={resetPosition} />
      </Box>

      {/* <Box w="100%" h={`calc(100% + ${navHeight}px)`} zIndex="10"> */}
      {/* <Flex direction="column" justifyContent="center"> */}
      <Box w="100%" h="100%" zIndex="10" overflowY="auto"  >
          {children}
      </Box>

      {/* </Flex> */}

      {/* <AnimatedBackground/> */}
    </Flex>
  );
};

export default Layout;
