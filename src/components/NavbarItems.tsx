import {Box, Flex, Button, Link, Text, useBreakpointValue} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import CaveatWrapper from "./CaveatWrapper";
import Logo from "./Logo";
import NavLink from "./NavLink"
interface PropTypes {
    xPos: number;
    yPos: number;
    draggable: boolean;
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
      <CaveatWrapper list={false} tag="resume"><Button aria-label="resume download" size="xs" variant="outline" rightIcon={<FaDownload/>} colorScheme="purple" ><a href="/resume.pdf" download="resume">resume.pdf</a></Button></CaveatWrapper>
      <Flex direction="row" minHeight="30%">
        <Flex direction="column">
          <CaveatWrapper list={true} tag="links" direction="column">
            {/* @ts-ignore  */}
            <Flex direction={linkDirection} justifyContent="space-evenly">

              <NavLink text='"home", ' />
              <NavLink text='"skills", ' />
              <NavLink text='"awards",  ' />
              <NavLink text='"work",  ' />
              <NavLink text='"contact"' />
            </Flex>
          </CaveatWrapper>
        </Flex>
      </Flex>
      <CaveatWrapper list={false} tag="draggable">
        <Text as="span" color={props.draggable ? "green.300": "red.300"}>
          {props.draggable ? "true" : "false"}
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
