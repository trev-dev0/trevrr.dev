import { Button, Link, Text } from "@chakra-ui/react";
import CaveatWrapper from "./CaveatWrapper";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface PropTypes {
  text: string;
  href: string;
}
const NavLink = (props: PropTypes) => {
  let text = props.text;
  return (
    <motion.div>
      <Link color="purple.200" size="xs" borderRadius="0">
        <NextLink href={props.href}>{text}</NextLink>
      </Link>
    </motion.div>
  );
};

export default NavLink;
