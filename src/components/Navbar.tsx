import { IconButton, Button } from "@chakra-ui/button";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { FaArrowsAltV } from "react-icons/fa";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CaveatWrapper from "./CaveatWrapper";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavbarItems from "./NavbarItems";
interface PropTypes {
  resetPosition: () => void;
}
const Navbar = (props: PropTypes) => {
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  let [xPos, setXPos] = useState(0);

  let [yPos, setYPos] = useState(0);
  useEffect(() => {
    x.onChange((latest) => {
      setXPos(Math.round(latest));
    });
    y.onChange((latest) => {
      setYPos(Math.round(latest));
    });
  });

  let [goBackHome, setGoBackHome] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [draggable, setDraggable] = useState(true);
  const resetPosition = async () => {
    if (draggable) {
      setDraggable(!draggable);
      await setTimeout(() => {
        x.stop();
        y.stop();
        setGoBackHome(true);
        // x.set(0);
        setTimeout(() => {
          setGoBackHome(false);
          setDraggable(true);
          setXPos(0);
          setYPos(0);
        }, 2000);
        // y.set(0);
      }, 2000);
    }
  };
  const closeNavbar = () => {
    setMinimized(!minimized);
  };
  return (
    <Flex
      ref={outerFlex}
      // @ts-ignore
      direction={linkDirection}
      h="100%"
      p={2}
      style={{
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }}
      pos="sticky"
    >
      {/* @ts-ignore */}
      {/* <motion.div drag={dragDirection} dragConstraints={outerFlex}> */}
      <motion.div
        drag={draggable}
        style={{
          x: x,
          y: y,
        }}
        onDragEnd={() => {
          resetPosition();
        }}
        transition={{ duration: 2 }}
        animate={goBackHome ? { x: 0, y: 0 } : {}}
      >
        <CaveatWrapper list={false} tag="nav" direction="column">
          <AnimatePresence>
            {!minimized && (
              <motion.div
                key="modal"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <NavbarItems draggable={draggable} xPos={xPos} yPos={yPos} />
              </motion.div>
            )}
          </AnimatePresence>
          {/* {minimized ? (
            <Text as="span">...</Text>
          ) : (
            <NavbarItems xPos={xPos} yPos={yPos} />
          )} */}
          <CaveatWrapper list={false} tag="minimized">
            <Button onClick={() => closeNavbar()} size="xs">
              {minimized ? "true" : "false"}
            </Button>
          </CaveatWrapper>
        </CaveatWrapper>
      </motion.div>
    </Flex>
  );
};
export default Navbar;
