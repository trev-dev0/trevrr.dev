import {Flex, Grid, Box } from "@chakra-ui/layout";
import Head from "next/head";
import Navbar from "./Navbar";
import {useEffect, useReducer, useRef, useState} from "react";

const Layout = ({ children }) => {

    let [position, setPosition] = useState(0);
    const resetPosition = () => {
        setPosition(0);
    }
  /*
    this code triggers a re-render on resize
    so that the animations and positions
    of animated elements react accordingly
  */
//   const [_, forceUpdate] = useReducer((x) => x + 1, 0);
//   useEffect(() => {
//     window.addEventListener('resize', () => {
//       forceUpdate();
//     })
//   })
  return (
    <Flex direction="row" w="100%" h="100%" bg="gray.900" overflow="hidden" >
        <Head>
            <title>trevrr.dev</title>
        </Head>
      <Box  z-index="50" top={position} left={position} gridColumn={{base: "1/19", sm: "1/19", md: "1/19", lg: "1/5", xl: "1/4"}} gridRow={{base: "1/5", sm: "1/4", md: "1/4", lg: "1/13"}} bg="gray.900" zIndex="50">
        <Navbar resetPosition={resetPosition} />
      </Box>
      <Box gridColumn="9/13" zIndex="0">
          {children}
      </Box>
    </Flex>
  );
};

export default Layout;
