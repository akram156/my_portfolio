"use client";
import React, { useState } from "react";
import "./SkillsList.css";
import SkillsCard from "../skillscard/SkillsCard";
import { skills } from "@/app/skills";
import { animate, delay, motion, scale } from "framer-motion";
const SkillsList = () => {
  const [skillstab, setSkillstab] = useState(skills);
  const divVariant = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };
  const itemVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="container-fluid">
      <motion.div
        variants={divVariant}
        initial={"initial"}
        whileInView={"inView"}
        className="list"
      >
        {skillstab.map((skill) => (
          <SkillsCard
            skill={skill}
            key={skill.id}
            skills={skills}
            variants={itemVariant}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsList;
