// import from "framer-motion";

import { Icon } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  Link,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { RiComputerLine } from "react-icons/ri";
import { SiGooglescholar } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
const Works = () => {
  const projects = [
    {
      title: "CS Tutor at EKU",
      date: "2018 - 2020",
      description:
        "At the start of my third semester, I was given an opportunity to tutor for the department of computer science. I took the position and soon fell in love with it. I tutored both undergrad and graduate students in topics such as algorithms, data structures, discrete math, java programming, and mobile app development. I love to share my knowledge as a computer scientist and if any job opprotunity arises for a similar position I wouldn't hesitate to apply.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Tutor Helper",
      date: "Spring Semester, 2019",
      description:
        "When the pandemic hit, Eastern Kentucky University was forced to go into online schooling for safety. Normally the CSC tutoring is in person in a lab, but since we were online, no one was sure how to handle the situation. I wrote a bot in Python that utilized Discord for communication to connect tutors and students to allow for a seamless process. The project consists of a MySQL db to persist schedules and logs for the server. The bot is deployed on a Digital Ocean server which I still do some maintenance on today.",
      icon: RiComputerLine,
    },
    {
      title: "Malicious Domain Detection",
      date: "2019-2020",
      description: (
        <Text>
          During my third and fourth semester, I joined the Machine Learning and
          Deep Learning lab and was assigned a project in which my team and I
          developed a malicious domain detection software. The software was
          written in Python and utilized the PyCuda library to interact with the
          GPU for parallel processing. A list of known malicious domains was
          persisted in a MySQL database and the list was expanded as the project
          continued. A potentially harmful domain can be fed into the system and
          the GPU will be loaded with various string matching algorithms which
          compare the domain to the database to determine if it is malicious.
          This was also solved with a similar approach but instead of GPUs,
          Hadoop was used. You can read about the project{" "}
          <Link
            color="purple.500"
            target="_blank"
            href="https://encompass.eku.edu/swps_undergraduategallery/290/"
            isExternal
          >
            here
          </Link>
          .
        </Text>
      ),

      icon: FiCpu,
    },
    {
      title: "EBook Reader",
      date: "Spring Semester 2019",
      description:
        "During my spring semester, I was enrolled in an android development course and built a project which allowed users to download books from a limited selection and save them to their device. The app would track their progress in the book and allow them to bookmark pages and delete books once they were finished with them. The project was done in Java and used SQLite to persist data.",
      icon: SiGooglescholar,
    },
{
      title: "League of Legends site (in progress)",
      date: "2021 - present",
      description:
        <Text>On my own time, I am working on a project that uses an API and raw data provided by Riot to create a wiki for the various games they own. The app is currently under development but some features are live and can be viewed at <Link color="purple.500" href="https://league.trevrr.dev" target="_blank">league.trevrr.dev</Link> </Text>,
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
      {projects.map((currentProject, i) => (
        <Box key={i} borderRadius="10px">
          <Heading size="xl">
            <Box>
              <Icon
                color="purple.300"
                boxSize="50px"
                padding="5px"
                as={currentProject.icon}
              />

              {currentProject.title}
            </Box>
          </Heading>
          <Heading size="lg">{currentProject.date}</Heading>
          <Text>{currentProject.description}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Works;
