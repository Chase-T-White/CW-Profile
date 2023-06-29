import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      All Rights Reserved <AiOutlineCopyright /> {date}
    </footer>
  );
};

export default Footer;
