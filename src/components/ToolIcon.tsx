import { IconButton } from "@chakra-ui/button";
import { motion } from "framer-motion";

interface PropTypes {
  icon: any;
  color: string;
  label: string;
  clicked: boolean;
}

const ToolIcon = (props: PropTypes) => {
  const variants = {
    clicked: {
      scale: 2,
    },
    initial: {},
  };
  return (
    <motion.div
      whileHover={{
        scale: 2,
        rotate: 360,
      }}
      animate={props.clicked ? "clicked" : "initial"}
      variants={variants}
      transition={{
        duration: 1,
      }}
    >
      <IconButton
        outline="none"
        boxShadow="none"
        _active={{
          border: "none",
        }}
        _focus={{
          outline: "none",
          boxShadow: "none",
          background: "none",
        }}
        _hover={{
          background: "none",
        }}
        _click={{
          background: "none",
        }}
        _selection={{
          background: "none",
        }}
        variant="ghost"
        aria-label={props.label}
        icon={props.icon}
        color={props.color}
      />
    </motion.div>
  );
};

export default ToolIcon;
