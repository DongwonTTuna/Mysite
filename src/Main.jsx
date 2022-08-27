import { Box} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main";
function App() {
  console.log("render");
  const location = useLocation();

  return (
    <Box
      bgGradient={"linear(to-r,#343434,#242424,#343434)"}
      minH="100vh"
      textColor="rgb(232,232,232)"
      lineHeight={"24px"}
      fontWeight="normal"
      fontSize={"24px"}
      pb="100px"
    >
      <Nav />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
