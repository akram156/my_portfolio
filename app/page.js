"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import useSound from "use-sound";
import { useState } from "react";
import { motion } from "framer-motion";
import HomeBody from "./component/homeBody/HomeBody";
import Footer from "./component/footer/Footer";
// import {click}
export default function Home() {
  
  return (
    <div className={styles.page}>
      <HomeBody/>
      {/* <Footer/> */}
    </div>
  );
}
