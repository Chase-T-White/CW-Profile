import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import Link from "next/link";

const Socials = () => {
  const socials = [
    {
      icon: <AiOutlineGithub />,
      link: "https://github.com/Chase-T-White",
      title: "Go to Github",
    },
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/chase-white-8b39621b9/",
      title: "Go to LinkedIn",
    },
    {
      icon: <BsSpotify />,
      link: "https://open.spotify.com/user/1216095602",
      title: "Go to Spotify",
    },
  ];
  return (
    <ul className="flex f-column socials-list">
      {socials.map((social, i) => {
        return (
          <li key={i} className="social-link">
            <Link href={social.link} target="_blank" title={social.title}>
              {social.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
