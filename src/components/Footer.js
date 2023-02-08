import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date().getFullYear();
  const name = "Mars Ifeanyi";

  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>
            {name} © {date}{" "}
          </p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
