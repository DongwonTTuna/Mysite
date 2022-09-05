import { Box, chakra,Image } from "@chakra-ui/react";
import { AnimatePresence,motion,isValidMotionProp } from "framer-motion";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main";
import "./components/style.css";
import boat from "./static/img/boat.png"
import sun from "./static/img/sun.png"
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
      backgroundColor="#3E606F"
      position="relative"
      h="2500px"
    >
      <Nav />
      <Box w="fit-content" mt="200px">
        <Image
          position="absolute"
          right="6%"
          src={sun}
          w="300px"
          transform="all"
          zIndex="5"
          filter="drop-shadow(0px 0px 120px #e36420)"
        />
      </Box>
      <ChakraBox position="absolute" display="flex" w="100%" animate={{y:[0,-10,10,0],x:[0,30,-30,0]}} transition={{duration:7,repeat:Infinity,repeatDelay:0}} justifyContent="center" bottom="1300px" zIndex="20">
        <Image w="200px" src={boat} />
      </ChakraBox>
      
      <AnimatePresence exitBeforeEnter initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
