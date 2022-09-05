import React, { useEffect } from "react";
import {
  chakra,
  Box,
  Container,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Portal,
} from "@chakra-ui/react";
import ChangePage from "./contents/ChangePage";
import { motion, isValidMotionProp, useAnimation } from "framer-motion";
import Wave from 'react-wavify'
import boat from "../static/img/boat.webp";
import maguro from "../static/img/Maguro.webp";
import sun from "../static/img/sun.webp";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
const Animation = {
  boat:{
    x:[0,400,340,0],
    y:[0,-60,-60,0],
    scaleX:[1,1,-1,-1],
    transition:{duration: 10, times:[0,0.5,0.5,1], repeat: Infinity, repeatDelay: 0}
  },
};
export default function () {
  const animationControls = useAnimation();

  async function anim() {
    await animationControls.start({
      x: [0, 200],
      y: [0, -200],
      transition: { duration: 0.3, delay: "0.1", ease: "linear" },
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
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box w="100%" display="flex" justifyContent="center"></Box>
        </PopoverTrigger>
        <Portal>
          <PopoverContent w="fit-content" backgroundColor="#f7f7f7">
            <PopoverArrow />
            <PopoverBody>マグロは時速90キロで泳ぎます</PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Box
        w="100%"
        display="flex"
        position="absolute"
        mt="200px"
        justifyContent="center"
      >
        <Text fontSize="32px" fontWeight="400"></Text>
      </Box>
      <Box position="relative" minW="100%" mt="50vh" h="100vh">
        <ChakraBox
          animate={{
            y: [0, -10, 15, 0],
            transition: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0.6,
            },
          }}
          minW="100%"
          h="9999px"
          position="absolute"
          zIndex="-2"
        >
          <Wave fill='#f79902'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
        </Box>
        <Box
          animate={{
            y: [-20, -30, -10, -20],
            transition: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 1.2,
            },
          }}
          minW="100%"
          h="9999px"
          position="absolute"
          zIndex="-3"
        ></Box>
        <ChakraBox
          animate={{
            y: [0, -10, 10, 0],
            transition: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0.8,
            },
          }}
          minW="100%"
          h="9999px"
          position="absolute"
          backgroundImage={w3}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          zIndex="-4"
        />
        <Box position="absolute" minW="100%">
          <ChakraBox
            animate={{
              y: [40, 50, 30, 40],
              transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.4,
              },
            }}
            minW="100%"
            h="9999px"
            position="relative"
            zIndex="-2"
          >
            <Image src={w4} />
            <ChakraBox
              h="20%"
              w="20%"
              maxW="250px"
              position="absolute"
              animate={Animation.boat}
              left="35%"
              top={{ base: "4vw", xl: "6vw", "3xl": "7vw" }}
              backgroundImage={boat}
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
            />
            <Box
              transform="auto"
              translateY="-1"
              w="100%"
              backgroundColor="#A2D9FF"
              minH="1000px"
            />
          </ChakraBox>
        </Box>
        <ChakraBox
          animate={{
            y: [0, -10, 10, 0],
            transition: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 1.6,
            },
          }}
          minW="100%"
          h="9999px"
          position="absolute"
          backgroundImage={whitew1}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          zIndex="-3"
        />
        <ChakraBox
          animate={{
            y: [-30, -40, -20, -30],
            transition: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 1,
            },
          }}
          minW="100%"
          h="9999px"
          position="absolute"
          backgroundImage={whitew2}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          zIndex="-3"
        />
        <Box position="absolute">
          <ChakraBox position="relative" w="10%" minH="200px">
            <ChakraBox
              position="absolute"
              zIndex="10"
              animate={animationControls}
            >
              <Image w="300px" minH="300px" src={maguro} />
            </ChakraBox>
          </ChakraBox>
        </Box>
        <ChakraBox
          animate={{
            y: [35, 45, 25, 35],
            transition: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0,
            },
          }}
          minW="100%"
          h="9999px"
          position="absolute"
          zIndex="-1"
        >
          <Image src={w5} />
          <Box
            transform="auto"
            translateY="-1"
            w="100%"
            backgroundColor="#0099FF"
            minH="1000px"
          />
        </ChakraBox>
    </ChangePage>
  );
}
