import React from "react";
import { Box, Container, Image, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import { useNavigate,useLocation } from "react-router-dom";
import profileimg from "../static/img/MaguroIcon.png";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function () {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      minW="100%"
      paddingY="25px"
      transition="all 0.4s ease-in-out"
      fontSize="28px"
      zIndex="5"
      position="relative"
      display="flex"
      justifyContent={{base:"end", md: "center"}}
    >
      <ChakraBox
        position="absolute"
        left="20px"
        top={{base:"50px" ,md: "11px"}}
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
            navigate("/profile");
          }}
          position="relative"
        >
          profile
          <Container
            w={location.pathname === "/profile" ? "80px" : "0px"}
            px="1"
            borderBottom={"2px"}
            position="absolute"
            bottom="-11px"
            opacity={location.pathname === "/profile" ? "1" : "0"}
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "80px",
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
            navigate("/skills");
          }}
          mt={{base: "20px", md: "0"}}
          position="relative"
        >
          skills
          <Container
            w={location.pathname === "/skills" ? "58px" : "0px"}
            px="1"
            bottom="-4px"
            borderBottom={"2px"}
            opacity={location.pathname === "/skills" ? "1" : "0"}
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "58px",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
            position="absolute"
          />
        </Container>
        <Container
          role="group"
          w="fit-content"
          cursor="pointer"
          onClick={() => {
            navigate("/works");
          }}
          mt={{base: "20px", md: "0"}}
          position="relative"
        >
          works
          <Container
            w={location.pathname === "/works" ? "72px" : "0px"}
            px="1"
            borderBottom={"2px"}
            opacity={location.pathname === "/works" ? "1" : "0"}
            bottom="-4px"
            borderColor="rgba(255,255,255,0.87)"
            margin="0 auto"
            _groupHover={{
              width: "72px",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
            position="absolute"
          />
        </Container>
      </Container>
    </Box>
  );
}
