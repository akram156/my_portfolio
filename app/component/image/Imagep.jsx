import React from "react";
import "./Imagep.css";
import Image from "next/image";
import { motion } from "framer-motion";
const Imagep = () => {
  return (
    <div>
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:1 ,delay:2}} className="img-container">
        <div className="circle-container">
          <div className="inside-container">
            <Image
              src="/p.png"
              height={400}
              width={400}
              alt="portfolio"
              className="img"
            ></Image>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Imagep;
