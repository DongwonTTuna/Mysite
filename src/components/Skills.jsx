import React, { useRef, useState, useEffect } from "react";
import SkillContent from "./contents/SkillContent";
import { AnimatePresence, motion } from "framer-motion";
import "../static/css/skills.css";
export default function (props) {
  const [Page, SetPage] = useState("main");
  return (
    <div ref={props.skill} className="skills">
      <span className="skills-head">Skills</span>
      <div className="skills-body">
        <AnimatePresence exitBeforeEnter initial={true}>
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: "easeInOut" }}
          >
            <div className="gridd">
              <SkillContent page={Page} update={SetPage} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
