import { Box, Flex, Text } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  tag: string;
  direction?: string;
  list: boolean;
}

const CaveatWrapper = ({ children, tag, direction, list }: PropTypes) => {
  //   let startHeader = `<${tag}>`;
  //   let endHeader = `</${tag}>`;

  //   startHeader= "{"
  //   endHeader = "}"
  if (!direction || direction === "row") {
    return (
      //   <Flex direction="row" textColor="whiteAlpha.700" alignItems="center">
      //     <Text fontFamily="Consolas" fontSize="15px" mr={2}>
      //       {startHeader}
      //     </Text>
      //     {children}
      //     <Text fontFamily="caveat" fontSize="20px" ml={1}>
      //       {endHeader}
      //     </Text>
      //   </Flex>
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
