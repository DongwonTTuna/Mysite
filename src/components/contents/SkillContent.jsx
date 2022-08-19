import React from "react";
import { motion } from "framer-motion";
import go from "../../static/img/go.png";
import rust from "../../static/img/rust.png";
import django from "../../static/img/django.png";
import html from "../../static/img/html.png";
import java from "../../static/img/java.png";
import jquery from "../../static/img/jquery.png";
import js from "../../static/img/js.png";
import php from "../../static/img/php.png";
import python from "../../static/img/python.png";
import react from "../../static/img/react.png";
import svelte from "../../static/img/svelte.png";
import typescript from "../../static/img/typescript.png";
import nextarrow from "../../static/img/next.png";
import previous from "../../static/img/previous.png";
export default function (props) {
  const variant = {
    ani: {
      scale: [5, 1, 1],
      top: ["45%", "45%", "5%"],
      left: ["45%", "45%", "5%"],
    },
    django: {
      scale: [5, 1.5, 1.5],
      top: ["45%", "45%", "5%"],
      left: ["45%", "45%", "7%"],
    },
  };
  const SetImage = () => {
    switch (props.page) {
      case "main":
        return "";
      case "go":
        return go;
      case "rust":
        return rust;
      case "django":
        return django;
      case "html":
        return html;
      case "java":
        return java;
      case "jquery":
        return jquery;
      case "js":
        return js;
      case "php":
        return php;
      case "python":
        return python;
      case "react":
        return react;
      case "svelte":
        return svelte;
      case "ts":
        return typescript;
    }
  };
  let image = SetImage();
  console.log(image);
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
              <div
                className="python"
                onClick={() => {
                  props.update("python");
                }}
              ></div>
              <div
                className="java"
                onClick={() => {
                  props.update("java");
                }}
              ></div>
              <div
                className="rust"
                onClick={() => {
                  props.update("rust");
                }}
              ></div>
              <div
                className="js"
                onClick={() => {
                  props.update("js");
                }}
              ></div>
              <div
                className="ts"
                onClick={() => {
                  props.update("ts");
                }}
              ></div>
              <div
                className="html"
                onClick={() => {
                  props.update("html");
                }}
              ></div>
              <div
                className="php"
                onClick={() => {
                  props.update("php");
                }}
              ></div>
            </div>
          </span>
          <span className="btn">
            <p>Frameworks</p>
            <div className="grid">
              <div
                className="react"
                onClick={() => {
                  props.update("react");
                }}
              ></div>
              <div
                className="svelte"
                onClick={() => {
                  props.update("svelte");
                }}
              ></div>
              <div
                className="django"
                onClick={() => {
                  props.update("django");
                }}
              ></div>
            </div>
          </span>
          <span className="btn">
            <p>Library</p>
            <div className="grid">
              <div
                className="jquery"
                onClick={() => {
                  props.update("jquery");
                }}
              ></div>
            </div>
          </span>
          <span className="btn">
            <p>Certifications</p>
            <div className="grid"></div>
          </span>
        </>
      );
    case "go":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );

    case "python":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "rust":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "django":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "html":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "java":
      return (
        <>
          {MotionImg(props.page, variant, image)}{" "}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "jquery":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "js":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "php":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "react":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "svelte":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
    case "ts":
      return (
        <>
          {MotionImg(props.page, variant, image)}
          <div>
            <button
              className="button previous-button"
              onClick={(e) => props.update("main")}
            >
              <img className="arrow" src={previous} />
            </button>
            <button className="button next-button" onClick={() => {}}>
              <img className="arrow" src={nextarrow} />
            </button>
          </div>
        </>
      );
  }
}
const MotionImg = (page, variant, image) => {
  const SetText = () => {
    switch (page) {
      case "go":
        return "Go Language";
      case "python":
        return "Python";
      case "rust":
        return "Rust";
      case "django":
        return "Django";
      case "html":
        return "HTML";
      case "java":
        return "Java";
      case "jquery":
        return "Jquery";
      case "js":
        return "JavaScript";
      case "php":
        return "PHP";
      case "react":
        return "React";
      case "svelte":
        return "Svelte";
      case "typescript":
        return "Typescript";
    }
  };
  const Text = SetText();
  return (
    <>
      <motion.img
        height={100}
        variants={variant}
        animate={page === "django" ? "django" : "ani"}
        transition={{ duration: 2.5, times: [0.1, 0.4, 0.7] }}
        src={image}
        style={{ position: "absolute" }}
      />
      <motion.div
        className="text"
        variants={variant}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2.3, times: [0.8, 1] }}
      >
        {Text}
      </motion.div>
    </>
  );
};
