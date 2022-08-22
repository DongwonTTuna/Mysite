import React from "react";
import { Box, Container, Center, Text, Image, Stack } from "@chakra-ui/react";
import profileimg from "../../static/img/Maguro.jpeg";
export default function () {
  return (
    <Box height="100%" margin="0">
      <Container width={"fit-content"} margin={"0 auto"} paddingTop="250px">
        <Image
          width="150px"
          height="150px"
          borderRadius="50%"
          src={profileimg}
        />
      </Container>
      <Center width="fit-content" margin="0 auto" marginTop="150px">
        <Stack spacing="2rem">
          <Text fontSize="2rem" textAlign="center">
            Dongwon Lee
          </Text>
          <Text noOfLines={2}>mail@dongwonttuna.men</Text>
        </Stack>
      </Center>
    </Box>
  );
}
