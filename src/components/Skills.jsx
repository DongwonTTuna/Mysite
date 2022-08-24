import React from "react";
import { Box, Container, Center } from "@chakra-ui/react";
import SkillContent from "./contents/SkillContent";
import ChangePage from "./contents/ChangePage";
export default function () {
  return (
    <ChangePage>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        zIndex="10"
      >
        <Center
          w="100%"
          h="100px"
          bgGradient={"linear(to-r,#343434,#242424,#343434)"}
          fontSize="34px"
          paddingY="70px"
          zIndex="10"
        >
          Skills
        </Center>
        <Box
          position="relative"
          minWidth="450px"
          width="75vw"
          maxW="1400px"
          minH="900px"
          backgroundColor="rgb(56,56,56)"
          py="25px"
          borderRadius="10px"
          textAlign="center"
          zIndex="10"
          display="flex"
          justifyContent="center"
        >
          <Container
            display="grid"
            gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr" }}
            gap="30px"
            rowGap="100px"
            minW="100%"
          >
            <SkillContent data={"main"} />
          </Container>
        </Box>
      </Box>
    </ChangePage>
  );
}
