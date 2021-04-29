import { IconButton } from "@chakra-ui/button";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { FaArrowsAltV } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import CaveatWrapper from "./CaveatWrapper";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navbar = () => {
  let outerFlex = useRef();
  let justifyContent = useBreakpointValue({
    base: "flex-start",
    sm: "flex-start",
    md: "flex-start",
    lg: "center",
  });
  let linkDirection = useBreakpointValue({
    base: "row",
    sm: "row",
    md: "row",
    lg: "column",
  });
  let dragDirection = useBreakpointValue({
    base: "x",
    sm: "x",
    md: "x",
    lg: "y",
  });
  return (
    <Flex
      ref={outerFlex}
      // @ts-ignore
      direction={linkDirection}
      h="100%"
      justifyContent="center"
      p={2}
      overflow="hidden"
    >
      {/* @ts-ignore */}
      <motion.div drag={dragDirection} dragConstraints={outerFlex}>
        <CaveatWrapper list={false} tag="nav" direction="column">
          <Box>
            <Logo />
          </Box>
          <Flex direction="row" minHeight="30%">
            <Flex direction="column">
              <CaveatWrapper list={true} tag="links" direction="column">
                {/* @ts-ignore  */}
                <Flex direction={linkDirection} justifyContent="space-evenly">
                  <NavLink text='"skills", ' />
                  <NavLink text='"awards",  ' />
                  <NavLink text='"work",  ' />
                  <NavLink text='"contact"' />
                </Flex>
              </CaveatWrapper>
            </Flex>
          </Flex>
          <CaveatWrapper list={false} tag="draggable">
            <Text as="span" color="green.300">
              true
            </Text>
          </CaveatWrapper>
        </CaveatWrapper>
      </motion.div>
    </Flex>
  );
};
export default Navbar;
