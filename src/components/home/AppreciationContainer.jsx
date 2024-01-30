import { Box, Heading, Center, Text, Flex } from "@chakra-ui/react";
import Appreciation from "./Appreciation";

const appreciations = [
  {
    name: "Raj",
    text: "I wanted to take a moment to express my gratitude and appreciation for everything you do. Your hard work and dedication have not gone unnoticed. Thank you for being an incredible",
  },
  {
    name: "Jatin",
    text: "I wanted to take a moment to express my gratitude and appreciation for everything you do. Your hard work and dedication have not gone unnoticed. Thank you for being an incredible I wanted to take a moment to express my gratitude and appreciation for everything you do. Your hard work and dedication have not gone unnoticed. Thank you for being an incredible",
  },
  {
    name: "Shivam",
    text: "I wanted to take a moment to express my gratitude and appreciation for everything you do. Your hard work and dedication have not gone unnoticed. Thank you for being an incredible",
  },
  {
    name: "Ayush",
    text: "I wanted to take a moment to express my gratitude and appreciation for everything you do. Your hard work and dedication have not gone unnoticed. Thank you for being an incredible",
  },
];

const AppreciationContainer = () => {
  return (
    <Box as="section" mt={24} w={"100%"}>
      <Heading
        fontSize={36}
        fontWeight="bold"
        mb={2}
        className="text-center text-emerald-400"
      >
        Appreciations
      </Heading>
      <Center>
        <Text className="text-neutral-100">
          Appreciations from our users, both employers and candidates.
        </Text>
      </Center>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap={"wrap"}
        align="center"
        justify="center"
        spacing={4}
      >
        {appreciations.map((value, idx) => (
          <Appreciation {...value} key={idx} />
        ))}
      </Flex>
    </Box>
  );
};

export default AppreciationContainer;
