import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import MarsIfeanyi from "../assets/MarsIfeanyi-Img.png";

const greeting = "Hello, I am Mars Ifeanyi";
const bio1 = "Web3-BlockChain Engineer";
const bio2 = "Specialized in React and Solidity";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack mt="10" spacing="16px">
      <Avatar src={MarsIfeanyi} width="300px" height="300px"></Avatar>
      <Heading as="h6" fontSize="20px">
        {greeting}
      </Heading>
      <Heading as="h3" fontSize="30px">
        {bio1}
      </Heading>
      <Heading as="h3" fontSize="30px">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
