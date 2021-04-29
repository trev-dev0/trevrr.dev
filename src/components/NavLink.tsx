import { Button, Link, Text } from "@chakra-ui/react";
import CaveatWrapper from "./CaveatWrapper";

interface PropTypes {
  text: string;
}
const NavLink = (props: PropTypes) => {
  let text = props.text;
  return (
    <Link color="purple.200" size="xs" borderRadius="0">
      {text}
    </Link>
  );
};

export default NavLink;
