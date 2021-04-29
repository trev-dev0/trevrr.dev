import { Flex, Box } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useRef } from "react";
import CaveatWrapper from "./CaveatWrapper";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navbar = () => {
  let outerFlex = useRef();
  return (
    <Flex ref={outerFlex} direction="column" h="100%" justifyContent="center" p={2} overflowY="hidden">
      <motion.div
        drag="y"
        dragConstraints={outerFlex} 
      >
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
      </motion.div>
    </Flex>
  );
};
export default Navbar;
