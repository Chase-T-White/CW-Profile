import React from "react";
import Link from "next/link";

const Nav = () => {
  const navLinks = [
    { nav: "Contact", link: "#contact" },
    { nav: "About", link: "#about" },
    { nav: "Projects", link: "#projects" },
  ];
  return (
    <nav>
      <ul className="flex f-column">
        {navLinks.map((navLink, i) => {
          return (
            <li key={i} className="nav-link">
              <Link href={navLink.link}>{navLink.nav}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
