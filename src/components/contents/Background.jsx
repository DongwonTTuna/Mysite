import React from "react";
import { Box, Image, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import boat from "../../static/img/boat.png";
import sun from "../../static/img/sun.png";
import cloud from "../../static/img/cloud.png";
import cloud2 from "../../static/img/cloud2.png";
import cloud3 from "../../static/img/c3.png";
import cloud4 from "../../static/img/c4.png";
import cloud5 from "../../static/img/c5.png";
import cloud6 from "../../static/img/c6.png";
import Fish from "../../components/Resources/fish";
import threefish from "../../static/img/threefish.png";
import fish from "../../static/img/fish.png";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function () {
  return (
    <>
      <Box
        position="absolute"
        top="0"
        h="2500px"
        w="100%"
        backgroundColor="#3E606F"
        minH="100vh"
        zIndex="-5"
      />
      <Box zIndex="2">
        <Box
          mt={{ base: "102px", md: "190px" }}
          position="relative"
          top="0px"
          right="6%"
        >
          <Image
            src={sun}
            w="300px"
            position="absolute"
            top="-70px"
            right="60vw"
            transform="all"
            zIndex="-3"
            filter="drop-shadow(0px 0px 120px #e36420)"
          />
          <Box className="suncloud">
            <Box zIndex="-2">
              <Image
                w="1000px"
                position="absolute"
                top={{ base: "40px", "2xl": "100px" }}
                right={{ base: "-500px", "2xl": "4%" }}
                src={cloud4}
              />
              <Image
                w="1000px"
                position="absolute"
                top={{ base: "60px", "2xl": "-80px" }}
                right="-290px"
                zIndex="-4"
                src={cloud5}
              />
            </Box>
          </Box>
        </Box>
        <Box zIndex="-1">
          <Box className="cloudbox">
            <Image
              w="800px"
              position="absolute"
              top="200px"
              right="40%"
              zIndex="-4"
              src={cloud6}
            />
            <Image
              w="800px"
              position="absolute"
              top="100px"
              opacity={{ base: 0, md: 1 }}
              right="20%"
              zIndex="-2"
              src={cloud3}
            />
          </Box>
          <Box className="cloudbox">
            <Image
              w="800px"
              position="absolute"
              top="-40px"
              opacity={{ base: 1, md: 0, xl: 1 }}
              left={{ base: "-400px", md: "-10%", "3xl": "100px" }}
              src={cloud}
            />
          </Box>
          <Box className="cloudbox" position="relative" top="170px" left="-50%">
            <Image
              w="900px"
              position="absolute"
              right="0"
              src={cloud3}
              zIndex="-3"
            />
            <Image
              w="1200px"
              position="absolute"
              top="-33px"
              right="-400px"
              src={cloud2}
              zIndex="-2"
            />
          </Box>
        </Box>
        <ChakraBox
          position="absolute"
          display="flex"
          w="100%"
          animate={{ y: [10, -10, 0, 10], x: [0, 30, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatDelay: 0 }}
          justifyContent="center"
          bottom={{ base: "1450px", "4xl": "38vw" }}
          zIndex="-3"
        >
          <Image w="200px" src={boat} zIndex="20" />
        </ChakraBox>
        <Box
          position="absolute"
          bottom="0"
          zIndex="-5"
          w="100%"
          mt="1000px"
          h="1300px"
          bgGradient="linear(to-b,#3E606F,#25496e)"
        />
        <ChakraBox
          w="100%"
          animate={{
            x: ["-10%", "100%"],
            y: [-30, 30, -30, 30, -30, 30, -30, 30, -30, 30, -30, 30],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          position="absolute"
          bottom=" 600px"
          left="0"
        >
          <Image w="280px" src={fish} />
        </ChakraBox>
        <ChakraBox
          w="100%"
          animate={{
            x: ["100%", "-10%"],
            y: [-30, 30, -30, 30, -30, 30, -30, 30, -30, 30, -30, 30],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          transform="scaleX(-1)"
          position="absolute"
          bottom=" 1100px"
          left="0"
        >
          <Image w="200px" transform="scaleX(-1)" src={threefish} />
        </ChakraBox>
      </Box>
    </>
  );
}
