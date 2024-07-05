import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className=" flex p-3 justify-between bg-navbar ">
      <div className="navbar">
        <Link to="#" smooth={true} duration={500}>
          <button className="font-dancing-script text-4xl opacity-45 hover:opacity-100">
            afreee
          </button>
        </Link>
      </div>
      <div className="navbar flex gap-x-4 font-bebas-neue text-2xl items-center">
        <Link to="projects" smooth={true} offset={-19} duration={700}>
          <button className="opacity-45 hover:opacity-100">Projects</button>
        </Link>
        <Link to="contact" smooth={true} offset={-3} duration={700}>
          <button className="opacity-45 hover:opacity-100">Contact Me</button>
        </Link>
      </div>
      <div className="navbar w-fit flex items-center border-2 hover:bg-purple-700 bg-purple-600 px-2 ">
        <button className="text-sm font-bold text-white ">My Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
