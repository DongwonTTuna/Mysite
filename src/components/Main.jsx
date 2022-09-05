import React, { useEffect } from "react";
import { chakra, Box, Container, Text, Image, Stack } from "@chakra-ui/react";
import ChangePage from "./contents/ChangePage";
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
export default function () {
  async function anim() {
    await animationControls.start();
  }

  return (
    <ChangePage>
      <Box w="100%" position="relative" top="10%" left="20%" zIndex="10">
        <Stack
          position="absolute"
          fontSize="32px"
          fontWeight="400"
          fontFamily="Roboto"
          textColor="#f59898"
        >
          <Text>Dongwon Lee</Text>
        </Stack>
      </Box>
    </ChangePage>
  );
}
