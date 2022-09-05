import React, { useEffect } from "react";
import { chakra, Box, Container, Text, Image, Stack } from "@chakra-ui/react";
import ChangePage from "./contents/ChangePage";
import { motion, isValidMotionProp, useAnimation } from "framer-motion";
import boat from "../static/img/boat.png";
import maguro from "../static/img/Maguro.webp";
import sun from "../static/img/sun.webp";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
const Animation = {
  boat: {
    x: [0, 400, 340, 0],
    y: [0, -60, -60, 0],
    scaleX: [1, 1, -1, -1],
    transition: {
      duration: 10,
      times: [0, 0.5, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 0,
    },
  },
};
export default function () {
  const animationControls = useAnimation();

  async function anim() {
    await animationControls.start({
      x: ["-50%", "-50%", "-50%"],
      y: ["0%", "-2%", "0%"],
      rotateZ: ["0deg", "180deg", "360deg"],
    });
  }

  useEffect(() => {
    anim();
  }, []);

  return (
    <ChangePage>
      <Box w="fit-content" mt="8%">
        <Image
          position="absolute"
          right="4%"
          src={sun}
          w="300px"
          transform="all"
          zIndex="5"
          filter="drop-shadow(0px 0px 120px #e36420)"
        />
      </Box>
      <Box
        w="100%"
        position="absolute"
        top="10%"
        left="20%"
        justifyContent="center"
        zIndex="10"
      >
        <Stack
          fontSize="32px"
          fontWeight="400"
          fontFamily="Roboto"
          textColor="#f59898"
        >
          <Text>Dongwon Lee</Text>
        </Stack>
      </Box>
      <Box minW="100%" overflow="hidden">
        <ChakraBox
          display="unset"
          position="absolute"
          left="50%"
          bottom="105vh"
          minW="1500px"
          minH="1500px"
          w="140%"
          pb="140%"
          borderRadius="45%"
          backgroundColor="#f5d7d5"
          animate={animationControls}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          zIndex="2"
        />
        <ChakraBox
          position="absolute"
          left="50%"
          opacity=".5"
          bottom="103vh"
          minW="1500px"
          minH="1500px"
          w="140%"
          pb="140%"
          borderRadius="47%"
          backgroundColor="#f5d7d5"
          animate={animationControls}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          zIndex="2"
        />
      </Box>
      <ChakraBox position="absolute" display="flex" w="100%" justifyContent="center" top="80vh" zIndex="20">
        <Image w="200px" src={boat} />
      </ChakraBox>
    </ChangePage>
  );
}
