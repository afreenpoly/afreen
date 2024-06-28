import "./styles.css";
const Profile = () => {
  return (
    <div className="profile-container mb-7">
      <div className="flex justify-between items-center">
        <div className="text-section">
          <h1 className="gradient-text">Dream.</h1>
          <h1 className="gradient-text">Design.</h1>
          <h1 className="gradient-text">Develop.</h1>
        </div>
        <div className="profile-details flex items-center">
          {/* <div className="circle"></div> */}

          <div className="pl-5 font-poppins  text-center">
            <div className="flex justify-center items-center">
              <img
                className="avatar"
                src="/src/assets/afreendp.png"
                alt=""
              />
            </div>
            <h2 className="font-bold text-5xl">Afreen Poly</h2>
            <h3 className="text-md">Frontend Developer</h3>
            <div className="flex justify-center p-8">
              <p>
                A self-taught UI/UX designer, functioning in the industry for 3+
                years now. I make meaningful and delightful digital products
                that create an equilibrium between user needs and business goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
