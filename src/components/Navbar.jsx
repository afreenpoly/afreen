import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="flex p-3 justify-between bg-navbar">
      <div className="navbar">
        <Link to="#" smooth={true} duration={500}>
          <button className="font-dancing-script text-2xl sm:text-3xl opacity-45 hover:opacity-100">
            afreee
          </button>
        </Link>
      </div>
      <div className="navbar flex gap-x-4 sm:gap-x-6 font-poppins text-base sm:text-lg items-center">
        <Link to="projects" smooth={true} offset={-19} duration={700}>
          <button className="opacity-45 hover:opacity-100">Projects</button>
        </Link>
        <Link to="contact" smooth={true} offset={-3} duration={700}>
          <button className="opacity-45 hover:opacity-100">Contact Me</button>
        </Link>
      </div>
      <div className="navbar w-fit flex items-center border-2 rounded-2xl hover:bg-purple-700 bg-purple-600 px-2">
        <a
          href="https://drive.google.com/file/d/1P1rD7ojaDdtUp03LibKP2wjatSOclwiO/view?usp=sharing"
          target="_blank"
        >
          <button className="text-xs sm:text-sm font-bold text-white">My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
