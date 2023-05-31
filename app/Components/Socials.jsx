import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import Link from "next/link";

const Socials = () => {
  const socials = [
    { icon: <AiOutlineGithub />, link: "https://github.com/Chase-T-White" },
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/chase-white-8b39621b9/",
    },
    { icon: <BsSpotify />, link: "https://open.spotify.com/user/1216095602" },
  ];
  return (
    <ul className="flex f-column socials-list">
      {socials.map((social, i) => {
        return (
          <li key={i} className="social-link">
            <Link href={social.link} target="_blank">
              {social.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
