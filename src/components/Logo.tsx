import { Link, Text } from "@chakra-ui/layout";
import CaveatWrapper from "./CaveatWrapper";

const Logo = () => {
  return (
    <CaveatWrapper list={false} tag="name">
      <Text as="span" color="purple.200">
        "trevor rice"
      </Text>
    </CaveatWrapper>
  );
};

export default Logo;
