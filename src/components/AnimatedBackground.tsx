import { Box } from "@chakra-ui/layout";
import { motion, transform, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiJavascript, SiNextDotJs, SiNginx, SiTypescript } from "react-icons/si";
import { CgCoffee } from "react-icons/cg";
import { propNames } from "@chakra-ui/styled-system";

const Shape = ({ shape }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const getRandom = () => {
    return getRandomInt(9);
  };

  //   let shape = getRandom();
  if (shape == 0) {
    return (
      <Box
        boxSize="40px"
        color="purple.800"
        // borderWidth="1px"
        // borderColor="purple.200"
        // borderStyle="solid"
        postion="absolute"
      >
        <FaGithub size="50px" />
      </Box>
    );
  } else if (shape == 1) {
    return (
      <Box
        color="green.300"
        // borderWidth="1px"
        // borderColor="purple.200"
        // borderStyle="solid"
        postion="absolute"
        // borderRadius="50%"
      >
        <DiMongodb size="50px" />
      </Box>
    );
  } else if (shape == 2) {
    return (
      <Box
        boxSize="40px"
        color="green.400"
        borderStyle="solid"
        postion="absolute"
      >
        <FaVuejs size="50px" />
      </Box>
    );
  } else if (shape == 3) {
    return (
      <Box
        boxSize="40px"
        color="blue.300"
        borderStyle="solid"
        postion="absolute"
      >
        <FaReact size="50px" />
      </Box>
    );
  } else if (shape == 4) {
    return (
      <Box boxSize="40px" color="black" postion="absolute">
        <SiNextDotJs size="50px" />
      </Box>
    );
  } else if (shape == 5) {
    return (
      <Box
        boxSize="40px"
        color="orange.300"
        borderStyle="solid"
        postion="absolute"
      >
        <FaHtml5 size="50px" />
      </Box>
    );
  } else if (shape == 6) {
    return (
      <Box boxSize="40px" color="white" borderStyle="solid" postion="absolute">
        <CgCoffee size="50px" />
      </Box>
    );
  } else if (shape == 7) {
    return (
      <Box
        boxSize="40px"
        color="yellow.200"
        borderStyle="solid"
        postion="absolute"
      >
        <SiJavascript size="50px" />
      </Box>
    );
  } else if (shape == 8) {
    return (
      <Box
        boxSize="40px"
        color="blue.300"
        borderStyle="solid"
        postion="absolute"
      >
        <SiTypescript size="50px" />
      </Box>
    );
  }
  else if (shape == 9) {
return (
      <Box
        boxSize="40px"
        color="orange.500"
        borderStyle="solid"
        postion="absolute"
      >
        <DiMysql size="50px" />
      </Box>
    );
  }
  else if (shape == 10) {
      return (
<Box
        boxSize="40px"
        color="green.700"
        borderStyle="solid"
        postion="absolute"
      >
        <SiNginx size="50px" />
      </Box>
      )
  }
};

const FallingShape = ({ shapeNum }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const getRandom = () => {
    return getRandomInt(95) + 5;
  };

  let [randomX, setRandomX] = useState(getRandom());

  let [randomY, setRandomY] = useState(getRandom());
  let duration = 1;
  const controls = useAnimation();
  let [opacity, setOpacity] = useState(1);
  useEffect(() => {
    controls.set({
      opacity: 0.8,
    });
    controls.start({
      top: getRandom() + "%",
      left: getRandom() + "%",
      rotate: getRandomInt(360),
    });

    setOpacity((opacity + 1) % 2);
  }, []);
  const handleAnimationComplete = () => {
    controls.stop();
    setRandomY(getRandom());
    setRandomX(getRandom());
    controls.start({
      top: getRandom() + "%",
      left: getRandom() + "%",
      rotate: getRandomInt(360),
    });

    setOpacity((opacity + 1) % 2);
  };

  console.log(randomX);
  return (
    <motion.div
      style={{
        position: "fixed",
        opacity: "0.2",
        zIndex: 1,
      }}
      initial={{
        top: `${randomY}vh`,

        left: `${randomX}vw`,
      }}
      animate={controls}
      transition={{
        repeat: "mirror",
        duration: 10,
        repeatDelay: 0,
        type: "tween",
      }}
      onAnimationComplete={() => {
        handleAnimationComplete();
      }}
    >
      <Shape shape={shapeNum} />
    </motion.div>
  );
};
const AnimatedBackground = () => {
  return (
    <Box as="span">
      {[...Array(11)].map((_x, i) => (
        <FallingShape shapeNum={i} />
      ))}
    </Box>
  );
};

export default AnimatedBackground;
