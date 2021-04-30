import {Box, Flex, Text, useBreakpointValue} from "@chakra-ui/react";
import CaveatWrapper from "./CaveatWrapper";
import Logo from "./Logo";
import NavLink from "./NavLink"
interface PropTypes {
    xPos: number;
    yPos: number;
}
const NavbarItems = (props: PropTypes) => {
let linkDirection = useBreakpointValue({
    base: "row",
    sm: "row",
    md: "row",
    lg: "column",
  });
  return (
    <Box>
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
      <CaveatWrapper list={false} tag="position" direction="column">
        <CaveatWrapper list={false} tag="x">
          {props.xPos}
        </CaveatWrapper>
        <CaveatWrapper list={false} tag="y">
          {props.yPos}
        </CaveatWrapper>
      </CaveatWrapper>
    </Box>
  );
};

export default NavbarItems;
