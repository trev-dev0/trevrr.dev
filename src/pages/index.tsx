import { Button, Flex, Text } from "@chakra-ui/react";
import "@fontsource/caveat";
const Index = () => {
  return (
    <Flex w="100%" h="100%">
      <Flex direction="column">
        <Text fontSize="20px" fontFamily="caveat">
          {"<h2>"}
        </Text>
        <Text fontSize="20px" ml={5}>
          {"    "}trevorr.Dev
        </Text>

        <Text fontSize="20px" fontFamily="caveat">
          {"</h2>"}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Index;
