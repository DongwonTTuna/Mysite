import React, { useCallback } from "react";
import { Box, Container, Image, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp, useAnimation } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import profileimg from "../static/img/MaguroIcon.png";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function () {
  const animationcontrol = useAnimation();
  const navigate = useNavigate();
  const location = useLocation();
  async function fishani() {
    await animationcontrol.start({ scale: 1.5 });
    animationcontrol.start({
      scale: 1.5,
      rotate: 360,
      transition: { duration: 0.7, ease: "linear", repeat: Infinity, repeatDelay: 0 },
    });
  }
  async function fishendani() {
    animationcontrol.start({ scale: 1, transition: { duration: 1 } });
    await animationcontrol.start({ rotate: 0, transition: { duration: 0.7, repeat: 0} });
  }
  return (
    <Box
      minW="100%"
      paddingY="25px"
      transition="all 0.4s ease-in-out"
      fontSize="28px"
      zIndex="5"
      position="relative"
      display="flex"
      justifyContent={{ base: "end", md: "center" }}
    >
      <ChakraBox
        position="absolute"
        left="20px"
        w="fit-content"
        h="fit-content"
        top={{ base: "50px", md: "11px" }}
        zIndex="100"
        animate={animationcontrol}
        whileHover={() => {
          console.log('yes')
          fishani();
        }}
        onHoverEnd={() => {
          fishendani();
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
        role="group"
        w="fit-content"
        cursor="pointer"
        onClick={() => {
          navigate("/skills");
        }}
        mt={{ base: "20px", md: "0" }}
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
        mt={{ base: "20px", md: "0" }}
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
    </Box>
  );
}
