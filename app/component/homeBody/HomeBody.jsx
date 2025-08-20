import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./HomeBody.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Imagep from "../image/Imagep";
import Info from "../information/Info";
import Footer from "../footer/Footer";

const HomeBody = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer"],
  });
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCursor(false);
    }, 4000);
  });
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <div className="main-container">
        <Imagep />
        <Info />
        {/* <br /> */}
      </div>
      <div>
        <hr className="line border-white"/>
        <Footer/>
      </div>
    </div>
  );
};

export default HomeBody;
