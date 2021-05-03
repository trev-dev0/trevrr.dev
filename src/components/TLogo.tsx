import { Box, Flex, Grid } from "@chakra-ui/react";

interface PropTypes {
    h: string;
    w: string;
    tWidth: string;
}
const Logo = ( props: PropTypes) => {
  return (
    <Grid
      gridTemplateRows="repeat(12, 1fr)"
      gridTemplateColumns="repeat(6, 1fr)"
      w={props.w}
      h={props.h}
      zIndex="55"
    >
      <Box gridRow="1/3" gridColumn="1/4" bg="purple.200" h="100%" borderRadius="3px 0px 0px 3px" />
      <Box gridRow="1/3" gridColumn="4/7" bg="purple.500" h="100%" borderRadius="0px 3px 3px 0px"/>
      <Flex
        direction="row"
        justifyContent="end"
        w="100%"
        gridRow="3/12"
        gridColumn="3/4"
      >
        <Box ml={props.tWidth} w = {props.tWidth} bg="purple.200" borderRadius="0px 0px 0px 3px" />
      </Flex>

    <Flex
        direction="row"
        justifyContent="start"
        w="100%"
        gridRow="3/12"
        gridColumn="4/5"
      >
        <Box marginRight={props.tWidth} w={props.tWidth} bg="purple.500" borderRadius="0px 0px 3px 0px" />
      </Flex>
    </Grid>
  );
};

export default Logo;
