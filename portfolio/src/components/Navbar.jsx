import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex  items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
          <h1 className="logo-text font-extrabold text-2xl">VK</h1>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a href={import.meta.env.VITE_LINKEDIN_LINK} target="_blank"><FaLinkedin /></a>
        <a href={import.meta.env.VITE_GITHUB_LINK} target="_blank"><FaGithub /></a>
        <a href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank"><FaInstagram /></a>
        <a href={import.meta.env.VITE_X_LINK} target="_blank"><FaSquareXTwitter /></a>
      </div>
    </nav>
  );
};

export default Navbar;
