import React from "react";
import { Box, Container } from "@chakra-ui/react";
import ProfileContent from "./contents/ProfileContent";
import ChangePage from "./contents/ChangePage";
export default function () {
  return (
    <ChangePage>
      <Box position={"relative"} width={"100%"}>
        <Container
          w="70vw"
          maxW="1400px"
          minH="1000px"
          margin="0 auto"
          marginTop="100px"
          fontWeight="light"
          backgroundColor="rgba(56,56,56)"
          borderRadius="15px"
          zIndex="10"
        >
          <ProfileContent />
        </Container>
      </Box>
    </ChangePage>
  );
}
