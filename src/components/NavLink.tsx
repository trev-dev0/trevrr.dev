import { Button, Link, Text } from "@chakra-ui/react";
import CaveatWrapper from "./CaveatWrapper";
import { motion } from "framer-motion";

interface PropTypes {
  text: string;
}
const NavLink = (props: PropTypes) => {
  let text = props.text;
  return (
    <motion.div>
      <Link color="purple.200" size="xs" borderRadius="0">
        {text}
      </Link>
    </motion.div>
  );
};

export default NavLink;
