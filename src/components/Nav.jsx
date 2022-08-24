import React, { useRef } from "react";
import { Box, Container, Image, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import profileimg from "../static/img/Maguro.jpeg";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function () {
  const navigate = useNavigate();
  const currentRender = useRef("");
  return (
    <Box
      minW="100%"
      paddingY="20px"
      transition="all 0.4s ease-in-out"
      fontSize="28px"
      zIndex="5"
      _hover={{ backgroundColor: "#373636" }}
      position="relative"
      display="flex"
      justifyContent={{base:"end", md: "center"}}
    >
      <ChakraBox
        position="absolute"
        left="20px"
        top={{base:"50px" ,md: "12px"}}
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        cursor="pointer"
      >
        <Image
          h="50px"
          w="60px"
          borderRadius="50%"
          src={profileimg}
          onClick={() => {
            console.log('click')
            currentRender.current = "";
            navigate("/");
          }}
        />
      </ChakraBox>
      <Container
        w="30vw"
        maxW="500px"
        m="0"
        display="flex"
        alignItems="center"
        justifyContent={{base: "end" ,md: "space-between"}}
        flexDirection={{base: "column", md: "row"}}
      >
        <Container
          role="group"
          w="fit-content"
          cursor="pointer"
          onClick={() => {
            currentRender.current = "profile";
            navigate("/profile");
          }}
        >
          profile
          <Container
            w={currentRender.current === "profile" ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity={currentRender.current === "profile" ? "1" : "0"}
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "100%",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Container>
        <Container
          role="group"
          w="fit-content"
          cursor="pointer"
          onClick={() => {
            currentRender.current = "skill";
            navigate("/skills");
          }}
        >
          skills
          <Container
            w={currentRender.current === "skill" ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity={currentRender.current === "skill" ? "1" : "0"}
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "100%",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Container>
        <Container
          role="group"
          w="fit-content"
          cursor="pointer"
          onClick={() => {
            currentRender.current = "works";
            navigate("/works");
          }}
        >
          works
          <Container
            w={currentRender.current === "works" ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity="0"
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "100%",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Container>
      </Container>
    </Box>
  );
}
