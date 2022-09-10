import React, { useCallback } from "react";
import { motion, isValidMotionProp, useAnimation } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import profileimg from "../static/img/MaguroIcon.png";

export default function () {
  const animationcontrol = useAnimation();
  const navigate = useNavigate();
  const location = useLocation();
  async function fishani() {
    await animationcontrol.start({ scale: 1.5 });
    animationcontrol.start({
      scale: 1.5,
      rotate: 360,
      transition: {
        duration: 0.7,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0,
      },
    });
  }
  async function fishendani() {
    animationcontrol.start({ scale: 1, transition: { duration: 1 } });
    await animationcontrol.start({
      rotate: 0,
      transition: { duration: 0.7, repeat: 0 },
    });
  }
  return (
    <div
      className="min-w-[100%] py-[25px] text-[28px] z-[5] relative top-0 flex sm:justify-end ustify-center"
      style={{ transition: "all 0.4s ease-in-out" }}
    >
      <motion.div
        className="absolute left-[20px] w-fit h-fit sm:top-[50px] top-[11px] z-[100]"
        animate={animationcontrol}
        whileHover={() => {
          console.log("yes");
          fishani();
        }}
        onHoverEnd={() => {
          fishendani();
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        cursor="pointer"
      >
        <img
          className="h-[50px] w-[60px] rounded-full"
          src={profileimg}
          onClick={() => {
            navigate("/");
          }}
        />
      </motion.div>
      <div
        className="group w-fit cursor-pointer mt-0 sm:mt-[20px] relative"
        onClick={() => {
          navigate("/skills");
        }}
      >
        skills
        <div
          className="px-[1px] absolute bottom-[-4px] border-b-2 border-[rgba(255,255,255,0.87)] group-hover:w-[58px] group-hover:opacity-100"
          style={{
            width: location.pathname === "/skills" ? "58px" : "0px",
            opacity: location.pathname === "/skills" ? "1" : "0",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
      <div
        className="group w-fit cursor-pointer mt-0 sm:mt-[20px] relative"
        onClick={() => {
          navigate("/works");
        }}
      >
        works
        <div
          className="px-[1px] absolute bottom-[-4px] border-b-2 border-[rgba(255,255,255,0.87)] group-hover:w-[72px] group-hover:opacity-100"
          style={{
            width: location.pathname === "/works" ? "72px" : "0px",
            opacity: location.pathname === "/works" ? "1" : "0",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
