import { IconButton } from "@chakra-ui/button";
import { Flex, Box, HStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextDotJs, SiTypescript, SiVisualstudiocode } from "react-icons/si";
import ToolIcon from "./ToolIcon";

const Tools = ({ setToolText }) => {
  useEffect(() => {
    setToolText(toolTexts["github"]);
  }, []);
  let [currentTool, setCurrentTool] = useState("github");
  const toolTexts = {
    github:
      "Git and GitHub are tools that I use across all my projects. The capabilities of these tools are endless in terms of version control, collaboration, code maintainability, and bug tracking.",
    ts:
      "I've recently made the switch to Typescript and I'll continue to use it in any new projects. Since Javascript is such a high-level language, it forfeits type safety. Typescript excellently addresses the type safety issues and makes for clean and near error-free development.",
    react:
      "I was introduced to react during university about 3-4 years ago but I've recently gained a new appreciation for the framework. React and React hooks make for quick prototyping with production-level reactivity and features. Being able to use OOP and componentize everything in my code allows me to write clean and reusable code",
    nodejs:
      "NodeJS paired with Express is usually how I like to write backends for my apps. I enjoy using Node JS on the backend because of its simplicity. It is very easy to spin up a RESTful API and connect to any database of your choice.",
    nextjs:
      "NextJS is a new technology to me that I have quickly grown to love. The framework does a lot of heavy lifting for you in terms of routing and overall app management. I would highly recommend using NextJS in your projects if you're familiar with React",
    vscode:
      "I do almost all of my development in VSCode. VSCode is the middleman between a plain text editor and a full-fledged IDE. It feels lightweight but has tons of capabilities and a huge community creating extensions for anything you need to do.",
  };
  const handleToolClick = (toolName) => {
    setCurrentTool(toolName);
    setToolText(toolTexts[toolName]);
  };

  return (
    <Flex direction="column" w="50%" h="fit-content">
      <HStack direction="row" spacing={5} mt={2}>
        <Box onClick={() => handleToolClick("github")}>
          <ToolIcon
            clicked={currentTool === "github"}
            icon={<FaGithub size="30px" />}
            color="white"
            label="github"
          />
        </Box>

        <Box onClick={() => handleToolClick("ts")}>
          <ToolIcon
            clicked={currentTool === "ts"}
            label="typescript"
            color="blue.400"
            icon={<SiTypescript size="30px" />}
          />
        </Box>
        <Box onClick={() => handleToolClick("react")}>
          <ToolIcon
            clicked={currentTool === "react"}
            label="react"
            color="blue.300"
            icon={<FaReact size="30px" />}
          />
        </Box>
        <Box onClick={() => handleToolClick("nodejs")}>
          <ToolIcon
            clicked={currentTool === "nodejs"}
            label="node js"
            color="green.400"
            icon={<FaNodeJs size="30px" />}
          />
        </Box>
        <Box onClick={() => handleToolClick("nextjs")}>
          <ToolIcon
            clicked={currentTool === "nextjs"}
            label="next js"
            color="white"
            icon={<SiNextDotJs size="30px" />}
          />
        </Box>
        <Box onClick={() => handleToolClick("vscode")}>
          <ToolIcon
            clicked={currentTool === "vscode"}
            label="vs code"
            color="blue.500"
            icon={<SiVisualstudiocode size="30px" />}
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Tools;
