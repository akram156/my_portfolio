import React, { useEffect, useState } from "react";
import "./SKillsCard.css";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import { animate, easeInOut, inView, motion, scale } from "framer-motion";
const SkillsCard = ({ skill, variants }) => {
  console.log("skills", skill);
  const MotionPb = motion(ProgressBar);
  const divVariant = {
    initial: {
      background: "linear-gradient(90deg, #00FFFF 0%, #FFFF00 100%)",
    },
    animate: {
      background: [
        "linear-gradient(90deg, #00FFFF 0%, #FFFF00 100%)",
        "linear-gradient(90deg, #FFFF00 0%, #00FFFF 100%)",
      ],
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    inView: {},
  };
  return (
    <motion.div
      style={{
        cursor: "pointer",
        height: "100%",
        zInde: "10",
        borderRadius: "10px",
      }}
      variants={variants}
      whileHover={"hover"}
      whileTap={"tap"}
      className="div"
    >
      <div className="second-div">
        <div className="head">
          <Image
            src={skill.url}
            width={50}
            height={50}
            alt={""}
            className="image"
          ></Image>
          <h2>{skill.title}</h2>
        </div>
        <div className="body">
          <p>{skill.description}</p>
        </div>
        <div className="progressBar">
          <ProgressBar
            label={skill.progress}
            now={skill.progress}
            className="bar"
          />
          ;
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
