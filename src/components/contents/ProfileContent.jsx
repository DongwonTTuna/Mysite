import React from "react";
import profileimg from "../../static/img/Maguro.jpeg";
export default function (props) {
  switch (props.page) {
    case 0:
      return (
        <div className="input">
          <div className="img">
            <img className="profile_img" src={profileimg} />
          </div>
          <div className="info">
            <p>Dongwon Lee</p>
            mail@dongwonttuna.men
          </div>
        </div>
      );
    case 1:
      return <div className="input">yyyyyyy</div>;
  }
}
