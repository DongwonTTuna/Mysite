import { useRef } from "react";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const profile = useRef(false);
  const skill = useRef(false);
  const works = useRef(false);
  console.log("render");
  return (
    <>
      <Nav profile={profile} skill={skill} work={works} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.article
          initial={{ opacity: 0, x: 0, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 0, y: 20 }}
          transition={{ duration: 0.4, type: "easeInOut" }}
        >
          <Profile profile={profile}/>
          <Skills skill={skill} />
        </motion.article>
      </AnimatePresence>
    </>
  );
}

export default App;
