import { Box, chakra, Image } from "@chakra-ui/react";
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main";
import "./components/style.css";
import boat from "./static/img/boat.png";
import sun from "./static/img/sun.png";
import cloud from "./static/img/cloud.png";
import cloud2 from "./static/img/cloud2.png";
import cloud3 from "./static/img/c3.png";
import cloud4 from "./static/img/c4.png";
import cloud5 from "./static/img/c5.png";
import cloud6 from "./static/img/c6.png";
import sand from "./static/img/sand.svg";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
function App() {
  console.log("render");
  const location = useLocation();
  return (
    <Box
      minH="100vh"
      lineHeight={"24px"}
      fontWeight="normal"
      fontSize={"24px"}
      position="relative"
      h="2500px"
      overflow="hidden"
    >
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
        <Nav />
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
            right="0"
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
                top="60px"
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
              left={{ base: "-400px", md: "-10%" }}
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
          bottom="1450px"
          zIndex="-1"
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
        <Box
          w="100%"
          h="200px"
          position="absolute"
          bottom="0"
          left="0"
          zIndex="-4"
          backgroundImage={sand}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Box
          w="100%"
          h="200px"
          position="absolute"
          bottom="0"
          left="400"
          opacity=".7"
          zIndex="-3"
          backgroundImage={sand}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <AnimatePresence exitBeforeEnter initial={true}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default App;
