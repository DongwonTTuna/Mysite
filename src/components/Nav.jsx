import React, { useRef, useState, useEffect } from "react";
import "../static/css/nav.css";
export default function (props) {
  const [position, SetPosition] = useState(null);
  const currentActive = useRef(null);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    SetPosition(winScroll);
  };
  useEffect(() => {
    let positionc = position;
    if (positionc === null)
      positionc = document.body.scrollTop || document.documentElement.scrollTop;
    if (positionc <= 1000) currentActive.current = 0;
    if (positionc > 1000) currentActive.current = 1;
  }, [position]);
  window.removeEventListener("scroll", listenToScroll);
  window.addEventListener("scroll", listenToScroll);

  return (
    <div className="div-nav">
      <nav>
        <span
          className={currentActive.current === 0 ? "nav active" : "nav"}
          onClick={() => props.profile.current.scrollIntoView()}
        >
          profile
        </span>
        <span
          className={currentActive.current === 1 ? "nav active" : "nav"}
          onClick={() => props.skill.current.scrollIntoView()}
        >
          skills
        </span>
        <span
          className={currentActive.current === 2 ? "nav active" : "nav"}
          onClick={() => props.work.current.scrollIntoView()}
        >
          works
        </span>
      </nav>
    </div>
  );
}
