import React, { useRef, useState, useEffect } from "react";
import SkillContent from "./contents/SkillContent";
import { AnimatePresence, motion } from "framer-motion";
import "../static/css/skills.css";


export default function (props) {
  const [Content, SetContent] = useState("main");



  return (
    <div ref={props.skill} className="skills">
      <span className="skills-head">Skills</span>
      <div className="skills-body">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ repeat: "reverse",duration: 0.3, type: "easeInOut" }}
          >
            <div className="gridd">
              <SkillContent page={Content} update={SetContent} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
