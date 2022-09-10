import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
//import Profile from "./components/Profile";
//import Skills from "./components/Skills";
import Works from "./components/Works";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main";
import "./components/style.css";
import Background from "./components/contents/Background";

function App() {
  console.log("render");
  const location = useLocation();
  return (
    <div className="h-[3500px] leading-[24px] font-normal text-[24px] relative overflow-hidden">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/skills" element={<Nav />} />
        <Route path="/works" element={<Works />} />
      </Routes>

      <Background />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<></>} />
          <Route path="/works" element={<></>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
