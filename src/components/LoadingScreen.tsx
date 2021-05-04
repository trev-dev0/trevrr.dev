import { Box, Flex, Heading, Image, Text, Progress } from "@chakra-ui/react";
import { useRouter } from "next/router";
import TLogo from "../components/TLogo";

const LoadingScreen = () => {
  let router = useRouter();
  return (
    <Box h="100%" w="100%" bg="gray.900" zIndex="50" position="absolute">
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box boxSize="100px"  h="100px">
            <TLogo tWidth="10px" h="100px" w="100%" />
          </Box>
          <Text textColor="white">Loading </Text>
          <Text textColor="purple.400">{`trevrr.dev${router.route}`}</Text>
          <Progress
            borderRadius="5px"
            w="210px"
            size="md"
            colorScheme="purple"
            value={100}
            hasStripe={true}
            isAnimated={true}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoadingScreen;
