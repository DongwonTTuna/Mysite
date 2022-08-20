import { useRef } from "react";
import { Box, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp ,AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

const ChakraBox = chakra(motion.article, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

function App() {
  const profile = useRef(false);
  const skill = useRef(false);
  const works = useRef(false);
  console.log("render");
  return (
    <Box
      bgGradient={"linear(to-r,#343434,#242424,#343434)"}
      w="100%"
      textColor="rgb(232,232,232)"
      lineHeight={"24px"}
      fontWeight="normal"
      fontSize={"24px"}
      overscrollBehavior="none"
    >
      <Nav profile={profile} skill={skill} work={works} />
      <AnimatePresence exitBeforeEnter initial={true} >
      <ChakraBox
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: 20 }}
        transition={{ duration: 0.3, type: "easeInOut" }}
      >
        <Profile profile={profile} />
        <Skills skill={skill} />
      </ChakraBox>
      </ AnimatePresence>
    </Box>

  );
}

export default App;
