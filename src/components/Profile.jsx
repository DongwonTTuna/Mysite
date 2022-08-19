import React, { useState} from "react"
import nextarrow from "../static/img/next.png"
import previous from "../static/img/previous.png"
import { AnimatePresence, motion } from "framer-motion"
import "../static/css/profile.css"
import ProfileContent from "./contents/ProfileContent"
const max_page = 9



export default function (props) {
  const [Page, SetPage] = useState(0);

  const NextPage = () => {
    SetPage(Page + 1);
  };
  const PreviousPage = () => {
    SetPage(Page - 1);
  };
  return (
    <div className="forprofileref" ref={props.profile}>
    <div className="profile">
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          key={Math.random()}
          initial={{ opacity: 0 }}
          animate= {{ opacity: 1 }}
          exit = {{ opacity: 0 }}
          transition={{ duration: 0.3, type: "easeInOut" }}
        >
          <ProfileContent page={Page} />
        </motion.div>
      </AnimatePresence>
      {Page !== 0 && (
        <button className="button previous-button" onClick={(e) => PreviousPage(e)}>
          <img className="arrow" src={previous} />
        </button>
      )}
      {Page !== max_page && (
        <button className="button next-button" onClick={(e) => NextPage(e)}>
          <img className="arrow" src={nextarrow} />
        </button>
      )}
    </div>
    </div>
  );
}
