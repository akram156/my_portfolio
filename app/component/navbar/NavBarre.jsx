import React from "react";
import './NavBarre.css'
import Link from "next/link";
function NavBarre() {
  return (
    <div className="container">
      <div className="logo-container">
        <h2>Akram-Ben</h2>
      </div>
      <div className="links-container">
        <ul >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/page/projects">Projects</Link></li>
          <li><Link href="/page/skills">Skills</Link></li>
          <li><Link href="/page/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarre;
