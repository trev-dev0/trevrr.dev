import { IconButton } from "@chakra-ui/button";
import { Flex, Box, HStack} from "@chakra-ui/layout";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextDotJs, SiTypescript, SiVisualstudiocode } from "react-icons/si";

const Tools = () => {
  return (
    <Flex direction="column" w="50%" h="100%">
      <HStack direction="row" spacing={5} mt={2} >
          <IconButton aria-label="github" variant="ghost" icon={<FaGithub size="30px"/>} />
          <IconButton aria-label="github" variant="ghost" color="blue.400" icon={<SiTypescript size="30px"/>} />
          <IconButton aria-label="github" variant="ghost" color="blue.300" icon={<FaReact size="30px"/>} />
          <IconButton aria-label="github" variant="ghost" color="green.400" icon={<FaNodeJs size="30px"/>} />
          <IconButton aria-label="github" variant="ghost" icon={<SiNextDotJs   size="30px"/>} />
          <IconButton aria-label="github" variant="ghost" color="blue.500" icon={<SiVisualstudiocode size="30px"/>} />
      </HStack>
    </Flex>
  );
};

export default Tools;
