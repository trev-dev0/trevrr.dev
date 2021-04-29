import { Flex, Box } from "@chakra-ui/layout";
import CaveatWrapper from "./CaveatWrapper";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <Flex direction="column" h="100%" justifyContent="center" p={2}>
      <CaveatWrapper list={false} tag="nav" direction="column">
        <Box>
          <Logo />
        </Box>
        <Flex direction="row">
          <Flex direction="column">
            <CaveatWrapper list={true} tag="links" direction="column">
              <NavLink text='"skills,"' />
              <NavLink text='"awards,"' />
              <NavLink text='"work,"' />
              <NavLink text='"contact"' />
            </CaveatWrapper>
          </Flex>
        </Flex>
      </CaveatWrapper>
    </Flex>
  );
};
export default Navbar;
