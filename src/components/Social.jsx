import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useMuteContext } from "../utils/MuteContext";

const Social = ({ linkstyle, containerstyles }) => {
  const { toggleMute,isMuted,playClickSound } = useMuteContext();

  const socialLinks = [
    {
      href: "https://github.com/muhammadkaif-razvi",
      icon: <FaGithub size={20} className="hover:text-primary" />,
      audio: "/audio/github-sound.mp3",
    },
    {
      href: "https://www.linkedin.com/in/muhammad-kaif-razvi-3b460a342/",
      icon: <FaLinkedin size={20} className="hover:text-primary" />,
      audio: "/audio/linkedin-sound.mp3",
    },
    {
      href: "https://twitter.com/yourprofile",
      icon: <FaTwitter size={20} className="hover:text-primary" />,
      audio: "/audio/twitter-sound.mp3",
    },
    {
      href: "https://instagram.com/yourprofile",
      icon: <FaInstagram size={20} className="hover:text-primary" />,
      audio: "/audio/instagram-sound.mp3",
    },
  ];

  const handleIconClick = (audioPath) => {
    playClickSound(audioPath);
  };

  return (
    <div className={containerstyles}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkstyle}
          onClick={() => handleIconClick(link.audio)}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
