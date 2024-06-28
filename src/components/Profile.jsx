import "./styles.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="flex justify-between items-center">
        <div className="text-section">
          <h1 className="gradient-text">Dream.</h1>
          <h1 className="gradient-text">Design.</h1>
          <h1 className="gradient-text">Develop.</h1>
        </div>
        <div className="profile-details flex items-center">
          {/* <div className="circle"></div> */}
          <img src="/src/assets/afreendp.png" alt="" width="250" />
          <div className="pl-5 font-poppins">
            <h2 className="font-bold text-5xl">Afreen Poly</h2>
            <h3 className="text-md">Frontend Developer</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-8">
        <p>
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals
        </p>
      </div>
    </div>
  );
};

export default Profile;
