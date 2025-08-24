import React from "react";
import "./Info.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import Link from "next/link";
const Info = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer"],
    // typeSpeed:200
  });
  const [cursor, setCursor] = useState(true);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWide(window.innerWidth > 800);
    }
    setTimeout(() => {
      setCursor(false);
    }, 4000);
  });
  return (
    <div>
      <div className="info-container">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi , I’m Akram Ben <br />
          <span style={{ color: "#38bdf8", fontWeight: "800" }}>{text}</span>
          <span>
            {cursor && <Cursor cursorColor="aqua" cursorBlinkSpeed={1} />}
          </span>
        </motion.h1>
        <motion.h4
          // style={{ color: "linear-gradient()" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="subtitle"
        >
          Specialized in building fast, responsive, and visually stunning web
          applications using React.
        </motion.h4>
        <div>
          <Link href={"/cv.pdf"} target="_blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, x: { duration: 1 } }}
              initial={{ opacity: 0,x: isWide ? -400 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="btn-cv"
              viewport={{ once: true }}
            >
              View my CV
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, x: { duration: 1 } }}
            initial={{ opacity: 0, x: isWide ? -400 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="btn-cv"
            viewport={{ once: true }}
          >
            <a href="mailto:akrambenchouche240@gmail.com">Hire Me</a>
          </motion.button>
        </div>
        <br />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="link-container"
        >
          <Link href={"https://github.com/akram156"} target="_blank">
            <motion.i
              className="fa-brands fa-github fa-2xl"
              style={{ color: "#FACC15", cursor: "pointer" }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </Link>
          <Link href={"https://www.linkedin.com/in/akram-benchouche-359304376/"} target="_blank">
            <motion.i
              className="fa-brands fa-linkedin fa-2xl"
              style={{ color: "#FACC15", cursor: "pointer" }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </Link>

          <Link href={"https://t.me/Akram_akram15"} target="_blank">
            <motion.i
              className="fa-brands fa-telegram fa-2xl"
              style={{ color: "#FACC15", cursor: "pointer" }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </Link>

          <Link href={"mailto:akrambenchouche240@gmail.com"} target="_blank">
            <motion.i
              className="fa-regular fa-envelope fa-2xl"
              style={{ color: "#FACC15", cursor: "pointer" }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
