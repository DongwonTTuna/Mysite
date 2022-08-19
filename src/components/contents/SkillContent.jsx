import React from "react";

export default function (props) {
  switch (props.page) {
    case "main":
      return (
        <>
          <span className="btn">
            <p>Programming Languages</p>
            <div className="grid">
              <div
                className="go"
                onClick={() => {
                  props.update("go");
                }}
              ></div>
              <div className="python"></div>
              <div className="java"></div>
              <div className="rust"></div>
              <div className="js"></div>
              <div className="ts"></div>
              <div className="html"></div>
              <div className="php"></div>
            </div>
          </span>
          <span className="btn">
            <p>Frameworks</p>
            <div className="grid">
              <div className="react"></div>
              <div className="svelte"></div>
              <div className="django"></div>
            </div>
          </span>
          <span className="btn">
            <p>Library</p>
            <div className="grid">
                <div className="jquery"></div>
            </div>
          </span>
          <span className="btn">
            <p>Certifications</p>
            <div className="grid"></div>
          </span>
        </>
      );
  }
}
