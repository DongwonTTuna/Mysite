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
          paddingY="100px"
          zIndex="10"
        >
          Skills
        </Center>
        <Container
          position="relative"
          minWidth="1400px"
          minHeight="1000px"
          backgroundColor="rgb(56,56,56)"
          p="20px"
          borderRadius="10px"
          textAlign="center"
          zIndex="10"
        >
          <Container
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gap="30px"
            rowGap="100px"
            minW="100%"
          >
            <SkillContent data={"main"} />
          </Container>
        </Container>
      </Box>
    </ChangePage>
  );
}
