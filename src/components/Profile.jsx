import { useEffect } from "react";
import afreendpImage from "/src/assets/afreendp.png";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons
import "./profile.css";

const Profile = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circles li");

    circles.forEach((circle) => {
      const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
      const randomDuration = Math.random() * 20 + 15; // Random duration between 10 and 30 seconds
      circle.style.animationDelay = `${randomDelay}s`;
      circle.style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  return (
    <div>
      <div className="profile-container mb-4 md:mb-14">
        <div className="profile-details flex flex-col md:flex-row  items-center">
          <div className="text-section py-2 flex flex-col justify-center items-center sm:justify-start sm:items-start">
            <h1 className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl py-1 md:py-4">
              Dream.
            </h1>
            <h1 className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl py-2 md:py-4">
              Design.
            </h1>
            <h1 className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl py-2 md:py-4">
              Develop.
            </h1>
          </div>

          <div className="profile-details flex flex-col mt-9">
            <div className="font-poppins text-center">
              <div className="flex justify-center items-center">
                <img
                  className="avatar w-24 h-24 "
                  src={afreendpImage}
                  alt="Afreen Profile Photo"
                />
              </div>
              <h2 className="font-bold text-3xl py-2 md:text-5xl">
                Afreen Poly
              </h2>
              <h3 className="text-sm md:text-md">Frontend Developer</h3>
              <div className="p-4">
                <p className="text-sm md:text-base">
                  A self-taught UI/UX designer, functioning in the industry for
                  3+ years now. I make meaningful and delightful digital
                  products that create an equilibrium between user needs and
                  business goals
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="social-icons flex justify-center space-x-4 mt-4">
                <a
                  href="https://github.com/afreenpoly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="hover:text-gray-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/afreenpoly/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circlediv">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
