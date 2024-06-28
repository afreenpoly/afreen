import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="flex p-3 justify-between bg-navbar">
      <div className="">
        <Link to="#" smooth={true} duration={500}>
          <button className="font-bebas-neue text-3xl opacity-45 hover:opacity-100">
            ICHIGO KUROSAKI
          </button>
        </Link>
      </div>
      <div className="flex gap-x-4 font-bebas-neue text-2xl  ">
        <Link to="about" smooth={true} duration={500}>
          <button className=" opacity-45 hover:opacity-100">About</button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <button className="opacity-45 hover:opacity-100">Projects</button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="opacity-45 hover:opacity-100">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
