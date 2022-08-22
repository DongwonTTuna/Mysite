import React from "react";
import { Box, Container } from "@chakra-ui/react";
import ProfileContent from "./contents/ProfileContent";
import ChangePage from "./contents/ChangePage";
export default function () {
  return (
    <ChangePage>
      <Box position={"relative"} width={"100%"}>
        <Container
          w="100%"
          margin="0 auto"
          position="relative"
          top="150px"
          fontWeight="light"
          backgroundColor="rgba(56,56,56)"
          borderRadius="20px"
          zIndex="10"
        >
          <ProfileContent />
        </Container>
      </Box>
    </ChangePage>
  );
}
