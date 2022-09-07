import { Box, chakra, Image } from "@chakra-ui/react";
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main";
import "./components/style.css";
import Background from "./components/contents/Background";

function App() {
  console.log("render");
  const location = useLocation();
  return (
    <Box
      minW="100%"
      lineHeight={"24px"}
      fontWeight="normal"
      fontSize={"24px"}
      position="relative"
      h="3500px"
      overflow="hidden"
    >
      <Routes>
        <Route path="/skills" element={<Nav />} />
        <Route path="/works" element={<Works />} />
      </Routes>

      <Background />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
