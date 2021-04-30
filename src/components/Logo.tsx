import { Link } from "@chakra-ui/layout";
import CaveatWrapper from "./CaveatWrapper";

const Logo = () => {
  return (
    <CaveatWrapper list={false} tag="name">
      <Link color="purple.400" fontSize="lg">
       "trevor rice"
      </Link>
    </CaveatWrapper>
  );
};

export default Logo;
