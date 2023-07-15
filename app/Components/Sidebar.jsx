"use client";

import { useState } from "react";
import Link from "next/link";
import scrollToSection from "../utils/scrollToSection";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const parent = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      type: "linear",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.5,
      type: "linear",
      when: "afterChildren",
    },
  },
};

const child = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "linear",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "linear",
    },
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { nav: "About", link: "#about" },
    { nav: "Projects", link: "#projects" },
    { nav: "Contact", link: "#contact" },
  ];
  return (
    <nav className="sidebarNav">
      {!isOpen && (
        <div className="sidebar-icon" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={parent}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ position: "absolute", top: "-25px", left: "-25px" }}
            className="sidebar"
          >
            <div
              className="sidebar-icon sidebar-icon__close"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineCloseCircle />
            </div>
            <ul className="flex f-column">
              {navLinks.map((navLink, i) => {
                return (
                  <motion.li
                    variants={child}
                    key={i}
                    className="sidebar-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={navLink.link} onClick={scrollToSection}>
                      {navLink.nav}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <ul className="sidebar-socials">
              <motion.li
                initial={{ x: "-100%" }}
                animate={{
                  x: 0,
                  transition: { duration: 0.1, type: "linear" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, type: "linear" },
                }}
              >
                <Link
                  href="https://github.com/Chase-T-White"
                  target="_blank"
                  title="Go to Github"
                >
                  <AiOutlineGithub />
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "-200%" }}
                animate={{
                  x: 0,
                  transition: { duration: 0.2, type: "linear" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, type: "linear" },
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/chase-white-8b39621b9/"
                  target="_blank"
                  title="Go to LinkedIn"
                >
                  <AiFillLinkedin />
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "-300%" }}
                animate={{
                  x: 0,
                  transition: { duration: 0.3, type: "linear" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, type: "linear" },
                }}
              >
                <Link
                  href="https://open.spotify.com/user/1216095602"
                  target="_blank"
                  title="Go to Spotify"
                >
                  <BsSpotify />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Sidebar;
