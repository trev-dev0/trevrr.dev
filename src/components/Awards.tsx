// import from "framer-motion";

import { Icon } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { GiAchievement, GiDiploma } from "react-icons/gi";
import { SiGooglescholar } from "react-icons/si";
const Awards = () => {
  const awards = [
    {
      title: "Bachelor's in Computer Science",
      date: "Fall Semester, 2020",
      description:
        "In the fall semester of 2020 I graduated with a 3.8 GPA in Computer Science with a concentration in Software Engineering. Over my educational career, I've taken many classes that have strengthened me as a problem solver and a developer. Classes such as algorithms, data structures, and discrete math gave me the foundation I need to pursue my dreams as a developer. Apart from my main courses, I took a few electives such as 3-D Modeling, machine learning, and big data which expanded my knowledge as a developer and piqued my interest in other fields. ",

      icon: SiGooglescholar,
    },
    {
      title: "Accepted into UPE at EKU",
      date: "Fall Semester, 2019",
      description:
        "In my 2019 Fall semester at Eastern Kentucky University, I was inducted into the Upsilon Pi Epsilon International honor Society for the Computing and Information Disciplines. My above-average performance and contributions to the department at EKU allowed me to be a candidate for this society. I and a few other accomplished students were inducted in a ceremony held by the head of our department and conducted by alumni who were members of UPE. ",
      icon: GiAchievement,
    },
    {
      title: "Presidents Award and Dean's List at EKU",
      date: "2017-2020",
      description:
        "By maintaining above a 3.0 GPA at Eastern Kentucky University I received the Dean's List honor for all of my semesters I attended. For the majority of my semesters I received a 4.0 GPA in all courses and received the Presidents award 5 times.",
      icon: GiAchievement,
    },
    {
      title: "Batelle Scholarship at EKU",
      date: "Summer 2020",
      description: "I received the Batelle Scholarship for a project I worked on during my time at EKU. The project was for the Machine Learning and Deep Learning lab and the goal was to utilize the parallel processing capabilities of GPUs to greatly increase the speed of malicious domain detection. The scholarship allowed me to work on the project through the summer and continue to add more features and optimize the code.",
      icon: SiGooglescholar,
    },
  ];

  return (
    <VStack
      w="100%"
      mt="5"
      spacing="25px"
      divider={<StackDivider borderColor="puprle.200" />}
      overflow="hidden"
    >
      {awards.map((currentAward, i) => (
        <Box key={i} borderRadius="10px">
          <Heading size="xl">
            <Box>
              <Icon
                color="purple.300"
                boxSize="50px"
                padding="5px"
                as={currentAward.icon}
              />

              {currentAward.title}
            </Box>
          </Heading>
          <Heading size="lg">{currentAward.date}</Heading>
          <Text>{currentAward.description}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Awards;
