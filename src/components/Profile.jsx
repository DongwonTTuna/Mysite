import React, { useState, useRef, useEffect } from "react";

import nextarrow from "../assets/img/next.png";
import previous from "../assets/img/previous.png";
import "../static/css/profile.css";
import ProfileContent from "./ProfileContent";
const max_page = 9;

export default function () {
  const Page = useRef(0);
  const [update, SetUpdate] = useState(false);
  const NextPage = () => {
    Page.current += 1;
    SetUpdate(!update);
  };
  const PreviousPage = () => {
    Page.current -= 1;
    SetUpdate(!update);
  };

  return (
    <div className="profile">
      <ProfileContent page={Page.current} />
      {Page.current !== 0 && (
        <button className="previous-button" onClick={() => PreviousPage()}>
          <img className="arrow" src={previous} />
        </button>
      )}
      {Page.current !== max_page && (
        <button className="next-button" onClick={() => NextPage()}>
          <img className="arrow" src={nextarrow} />
        </button>
      )}
    </div>
  );
}
