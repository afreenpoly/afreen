const Navbar = () => {
  return (
    <div className="flex p-6 justify-between bg-navbar">
      <div className="">
        <h1>Afreen</h1>
      </div>
      <div className="flex gap-x-4">
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact Me</h3>
      </div>
    </div>
  );
}

export default Navbar;