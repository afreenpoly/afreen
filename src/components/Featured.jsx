const Featured = () => {
  return (
    <div className="">
      <div className="flex py-6 justify-center">
        <div className="w-1/2">
          <h2>V-Mail</h2>
          <p>
            An email platform which helps the visually impaired individuals to
            compose,send and receive mails solely using their voice only. TTS
            and STT are used for the interaction between user and the system
          </p>
        </div>
        <div className="flex">
          <img
            src="/src/assets/computer.jpeg"
            alt="computer image"
            width="230rem"
          />
        </div>
      </div>

      <div className="flex py-6 justify-center">
        <div className="flex ">
          <img
            src="/src/assets/laptop.jpg"
            alt="computer image"
            width="230rem"
          />
        </div>
        <div className="w-1/2">
          <h2>Exam Seat Arrangement System</h2>
          <p>
            A web application designed under my leadership, efficiently
            organizing students for exams in a fair and equitable manner,while
            also preventing malpractice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;