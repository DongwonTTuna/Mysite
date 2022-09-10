import React from "react";
import { motion } from "framer-motion";
import boat from "../../static/img/boat.png";
import sun from "../../static/img/sun.png";
import cloud from "../../static/img/cloud.png";
import cloud2 from "../../static/img/cloud2.png";
import cloud3 from "../../static/img/c3.png";
import cloud4 from "../../static/img/c4.png";
import cloud5 from "../../static/img/c5.png";
import cloud6 from "../../static/img/c6.png";
import cloud7 from "../../static/img/cloud7.png";
import threefish from "../../static/img/threefish.png";
import fish from "../../static/img/fish.png";

export default function () {
  return (
    <>
      <div className="absolute top-0 h-[3500px] w-full bg-[#3E606F] min-h-[100vh] z-[-6]" />
      <div className="z-[2]">
        <div className="sm:mt-[102px] mt-[190px] relative top-0 right-[6%]">
          <img
            src={sun}
            className="w-[300px] absolute top-[26vh] right-[4vw] z-[-3]"
            style={{
              transform: "all",
              filter: "drop-shadow(0px 0px 120px #e36420)",
            }}
          />
          <div className="suncloud">
            <div className="z-[-2]">
              <img
                className="max-w-[1000px] absolute sm:top-[320px] sm:right-[-500px] top-[40px] bigm:top-[100px] bigm:right[-2%] bigm:right[4%] "
                src={cloud4}
              />
              <img
                className="max-w-[1000px] absolute sm:top-[230px] top-[400px] larm:top-[200px] right-[400px] opacity-50 z-[-2]"
                src={cloud5}
              />
            </div>
          </div>
        </div>
        <div className="z-[-1]">
          <div className="cloudbox">
            <img
              className="absolute max-w-[800px] top-[200px] right-[40%] z-[-2] opacity-50"
              src={cloud6}
            />
            <img
              className="max-w-[800px] absolute top-[100px] sm:opacity-50 md:opacity-100 right-[30vw] z-[-2]"
              src={cloud3}
            />
            <img
              className="max-w-[800px] absolute top-[-40px] sm:opacity-100 sm:left-[-400px] left-[-10%] md:opacity-0 opacity-100 bigm:left-[100px]"
              src={cloud}
            />
            <img
              className="max-w-[1200px] z-[-3] absolute top-[-40px] sm:left-[-400px] left-[-10%] opacity-75 bigm:left-[100px]"
              src={cloud2}
            />
          </div>
          <div className="cloudbox" position="relative" top="170px" left="-50%">
            <div className="w-[1400px] absolute right-[-50px] top-[40px]">
              <img
                className="max-w-[900px] absolute right-[300px] z-[-3] top-[85px] opacity-50"
                src={cloud}
              />
              <img
                className="max-w-[600px]  absolute top-[180px] right-[100px] z-[-2] "
                src={cloud7}
              />
            </div>
          </div>
          <div
            className="cloudbox opacity-50 relative top-[360px] bigm:top-[200px]  left-[15%]"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[1200px] absolute right-0 z-[-2]"
              src={cloud4}
            />
            <img
              className="max-w-[600px] absolute top-[140px] right-[50px] z-[-3]"
              src={cloud3}
            />
          </div>
          <div
            className="cloudbox relative top-[260px] opacity-80 bigm:top-[-60px]  left-[-15%]"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[1200px] absolute right-0 z-[-2]"
              src={cloud4}
            />
            <img
              className="max-w-[600px] absolute top-[140px] right-[50px] z-[-3]"
              src={cloud7}
            />
          </div>
          <div
            className=" cloudbox opacity-50 absolute top-[160px] bigm:top-[200px]  left-[15%]"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[600px] absolute right-0 z-[-2]"
              src={cloud7}
            />
            <img
              className="max-w-[700px] absolute top-[0px] right-[50px] z-[-3]"
              src={cloud3}
            />
          </div>
          <div
            className="cloudbox opacity-50 absolute top-[260px] bigm:top-[200px]  left-[35%]"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[1200px] absolute right-0 z-[-2]"
              src={cloud5}
            />
            <img
              className="max-w-[600px] absolute top-[140px] right-[50px] z-[-3]"
              src={cloud4}
            />
          </div>
          <div
            className="cloudbox opacity-50 absolute"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[1200px] absolute left-[400px] top-[40px] z-[-2]"
              src={cloud}
            />
            <img
              className="max-w-[600px] absolute top-[140px] right-[-200px] z-[-3]"
              src={cloud4}
            />
          </div>
          <div
            className="cloudbox opacity-50 absolute"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[1200px] absolute left-[65%] z-[-2]"
              src={cloud}
            />
          </div>
          <div
            className="cloudbox absolute"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[1200px] absolute left-[35%] z-[-2]"
              src={cloud}
            />
            <img
              className="max-w-[600px] absolute top-[140px] right-[480px] z-[-3]"
              src={cloud4}
            />
          </div>
          <div
            className="cloudbox absolute sm:hidden xl:contents"
            style={{ transform: "scaleX(-1)" }}
          >
            <img
              className="max-w-[1200px] absolute left-10 opacity-40 z-[-2]"
              src={cloud3}
            />
          </div>
          <img
            className="max-w-[1200px] absolute left-[45%] top-[-100px] opacity-40 z-[-2]"
            src={cloud6}
          />
          <img
            className="max-w-[600px] absolute right-[-100px] larm:opacity-100 top-0 opacity-0 z-[-2]"
            src={cloud7}
          />
        </div>
        <motion.div
          className="absolute flex w-full justify-center bottom-[2360px] bigm:bottom-[2280px] z-[-3]"
          animate={{ y: [10, 0, 10, 0], x: [0, 40, -40, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: "reverse",
          }}
        >
          <img className="w-[200px]" src={boat} />
        </motion.div>
        <div className="absolute bottom-0 z-[-5] w-full mt-[1500px] h-[2000px] bg-gradient-to-b from-[#3E606F] to-[#1f425e]" />
        <motion.div
          className="w-full absolute bottom-[600px] left-0 z-[-5]"
          animate={{
            x: ["-50%", "100%"],
            y: [-30, 30, -30, 30, -30, 30, -30, 30, -30, 30, -30, 30],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <img className="w-[240px]" src={fish} />
        </motion.div>
        <motion.div
          className="w-full absolute bottom-[1100px] left-0 z-[-5]"
          animate={{
            x: ["100%", "-50%"],
            y: [-30, 30, -30, 30, -30, 30, -30, 30, -30, 30, -30, 30],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <img className="w-[200px] -scale-x-[1]" src={threefish} />
        </motion.div>
      </div>
    </>
  );
}
