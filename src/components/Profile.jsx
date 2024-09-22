import { useEffect } from "react";
import afreendpImage from '/src/assets/afreendp.png';
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
      <div className="profile-container mb-7">
        <div className="profile-details flex flex-col md:flex-row justify-between items-center">
          <div className="text-section">
            <h1 className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl py-4">
              Dream.
            </h1>
            <h1 className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl py-4">
              Design.
            </h1>
            <h1 className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl py-4">
              Develop.
            </h1>
          </div>

          <div className="profile-details flex flex-col md:flex-row items-center mt-5 md:mt-0">
            <div className="pl-5 font-poppins text-center">
              <div className="flex justify-center items-center">
                <img
                  className="avatar w-24 h-24 md:w-48 md:h-48"
                  src={afreendpImage}
                  alt="Afreen Profile Photo"
                />
              </div>
              <h2 className="font-bold text-3xl md:text-5xl">Afreen Poly</h2>
              <h3 className="text-sm md:text-md">Frontend Developer</h3>
              <div className="flex justify-center p-4 md:p-8">
                <p className="text-sm md:text-base">
                  A self-taught UI/UX designer, functioning in the industry for
                  3+ years now. I make meaningful and delightful digital
                  products that create an equilibrium between user needs and
                  business goals
                </p>
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
