import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="flex p-3 justify-between bg-navbar">
      <div className="">
        <h1 className="font-bebas-neue text-3xl opacity-45">ICHIGO KUROSAKI</h1>
      </div>
      <div className="flex gap-x-4 font-bebas-neue text-2xl opacity-45">
        <Link to="about" smooth={true} duration={500}>
          <button>About</button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <button>Projects</button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button>Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
