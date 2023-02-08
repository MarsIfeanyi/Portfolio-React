import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack bg="white" borderRadius="1rem">
        <Image src={imageSrc} borderRadius="1rem" />
        <Flex>
          <Heading
            textColor="black"
            fontSize="20px"
            textAlign="left"
            marginLeft="-17rem"
            justifyContent="flex-start"
          >
            {title}
          </Heading>
        </Flex>
        <Text textColor="gray" px="20px">
          {description}{" "}
        </Text>
        <Flex>
          <Text color="blackAlpha.800" marginLeft="-17rem" mb="1rem">
            {" "}
            see more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </Flex>
      </VStack>
    </HStack>
  );
};

export default Card;
