"use client";
import React, { useState } from "react";
import "./ProjectCarousell.css";
import { projects } from "@/app/projects";
import { motion, scale } from "framer-motion";
import Link from "next/link";
const ProjectCarousell = () => {
  const [project, setProject] = useState(projects);
  const [currentIndex, setCurrentIndex] = useState(1);
  const borderVariant = {
    initial: {
      background: "linear-gradient(45deg,yellow,aquamarine,aqua)",

      opacity: 0,
    },
    animate: {
      background: [
        "linear-gradient(45deg,#38bdf8,aquamarine,yellow)",
        "linear-gradient(45deg,yellow,aquamarine,#38bdf8)",
        "linear-gradient(45deg,#38bdf8,aquamarine,yellow)",
      ],
      transition: {
        repeat: Infinity,
        ease: "easeInOut",
        duration: 1,
        delay: 2, // should wait 1s before first run
      },
    },
    visible: {
      opacity: 1,
    },
  };
  const btnVariant = {
    initial: {
      background: "linear-gradient(45deg,yellow,aquamarine,aqua)",
    },
    animate: {
      background: [
        "linear-gradient(45deg,#38bdf8,aquamarine,yellow)",
        "linear-gradient(45deg,yellow,aquamarine,#38bdf8)",
        "linear-gradient(45deg,#38bdf8,aquamarine,yellow)",
      ],
      // opacity:1,
      transition: {
        repeat: Infinity,
        ease: "easeInOut",
        duration: 1,
      },
    },
    visible: {},
  };
  const carousellVariantRight = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "tweens",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.5,
        type: "tweens",
      },
    },
  };
  const carousellVariantLeft = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "tweens",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.5,
        type: "tweens",
      },
    },
  };
  const [direction, setDirection] = useState("");
  return (
    <div className="main-container">
      <motion.div
        // key={currentIndex}
        variants={borderVariant}
        initial="initial"
        whileInView="animate"
        animate="visible"
        className="border"
      >
        <motion.div
          key={currentIndex}
          variants={
            direction === "left"
              ? carousellVariantLeft
              : direction === "right"
              ? carousellVariantRight
              : null
          }
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          // transition={{}}
          className="slide-container"
          style={{
            backgroundImage: `url(${project[currentIndex].url})`,
            backgroundPosition: "center",
            backgroundSize: "101% 108%",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
        >
          <div className="cover"></div>
          <div
            className="left-arrow"
            onClick={() => {
              setCurrentIndex(
                currentIndex === 0 ? project.length - 1 : currentIndex - 1
              );
              setDirection("left");
            }}
          >
            <i
              className="fa-solid fa-arrow-left fa-xl"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
          <div
            className="right-arrow"
            onClick={() => {
              setCurrentIndex(
                currentIndex === project.length - 1 ? 0 : currentIndex + 1
              );
              setDirection("right");
              console.log("index", currentIndex);
            }}
          >
            <i
              className="fa-solid fa-arrow-right fa-xl"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
          <div className="dots">
            {project.map((prj, index) => (
              <div
                variants={borderVariant}
                initial={"initial"}
                animate={"animate"}
                className="dot"
                onClick={() => {
                  setCurrentIndex(index);
                  setDirection("");
                }}
              >
                •
              </div>
            ))}
          </div>
          <div className="btn-container">
            <Link href={`${project[currentIndex].githuburl}`} target="_blank">
              <motion.button
                variants={btnVariant}
                initial={"initial"}
                whileInView={"animate"}
                animate={"visible"}
                className="btn"
              >
                View the project on git hub
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCarousell;
