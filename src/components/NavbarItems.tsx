import {
  Box,
  Flex,
  Button,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import CaveatWrapper from "./CaveatWrapper";
import Logo from "./Logo";
import NavLink from "./NavLink";
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
      <CaveatWrapper list={false} tag="resume">
        <a href="/resume.pdf" download="resume">
          <Button
            aria-label="resume download"
            size="xs"
            rightIcon={<FaDownload />}
            variant="outline"
            colorScheme="purple"
            color="purple.300"
          >
            resume.pdf (160kb)
          </Button>
        </a>
      </CaveatWrapper>
      <Flex direction="row" minHeight="30%">
        <Flex direction="column">
          <CaveatWrapper list={true} tag="links" direction="column">
            {/* @ts-ignore  */}
            <Flex direction={linkDirection} justifyContent="space-evenly">
              <NavLink href="/" text='"home", ' />
              <NavLink href="/tools" text='"tools", ' />
              <NavLink href="/awards" text='"edu && awards",  ' />
              <NavLink href="/work" text='"work && projects",  ' />
              <NavLink href="/contact" text='"contact"' />
            </Flex>
          </CaveatWrapper>
        </Flex>
      </Flex>
      <CaveatWrapper list={false} tag="draggable">
        <Text as="span" color={props.draggable ? "green.300" : "red.300"}>
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
