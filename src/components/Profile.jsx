const Profile = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img src="/src/assets/profilepic.webp" alt="" width="100rem" />
        <div className="px-5">
          <h2>Afreen Poly</h2>
          <h3>Frontend Developer</h3>
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
