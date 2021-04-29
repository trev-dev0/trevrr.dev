import { Box, Flex, Text } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  tag: string;
  direction?: string;
  list: boolean;
}

const CaveatWrapper = ({ children, tag, direction, list }: PropTypes) => {
  if (!direction || direction === "row") {
    return (
      <Box fontFamily="consolas">
        {`${tag}: `}
        {children}
        {", "}
      </Box>
    );
  } else {
    if (list) {
      return (
        <Flex direction="column" textColor="whiteAlpha.700" alignItems="left">
          <Text fontFamily="consolas" fontSize="14px">
            {`${tag}: {`}
          </Text>
          <Flex direction="column" fontFamily="consolas" ml="4">
            [
            <Flex direction="column" ml={4}>
              {children}
            </Flex>
            ]
          </Flex>
          <Text fontFamily="consolas" fontSize="14px">
            {"}"}
          </Text>
        </Flex>
      );
    } else {
      return (
        <Flex direction="column" textColor="whiteAlpha.700" alignItems="left">
          <Text fontFamily="Consolas" fontSize="14px">
            {`${tag}: {`}
          </Text>
          <Box ml={4}>{children}</Box>
          <Text fontFamily="Consolas" fontSize="14px">
            {"}"}
          </Text>
        </Flex>
      );
    }
  }
};

export default CaveatWrapper;
