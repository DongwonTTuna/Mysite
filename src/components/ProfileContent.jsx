import React from "react";
import profileimg from "../assets/img/Maguro.jpeg";
export default function (props) {
  switch (props.page) {
    case 0:
      return (
        <div className="input">
          <div className="img">
            <img className="profile_img" src={profileimg} />
          </div>
          <div className="img">
            イ・ドンウォン
            <br />
            mail@dongwonttuna.men
          </div>
        </div>
      );
      break;
  }
}
