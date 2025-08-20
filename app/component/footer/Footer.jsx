import React from "react";
import "./Footer.css";
import { motion } from "framer-motion/client";
const Footer = () => {
  return (
    <div className="footer-container">
      {/* <hr className="border border-white" /> */}

      <div className="copy-container">
        <p>&copy; 2025 Akram-Ben. All rights reserved.</p>
        <p>Built and designer with passion and endless coffee</p>
      </div>
    </div>
  );
};

export default Footer;
