import { FaGithub } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Featured = () => {
  return (
    <div className="font-poppins mt-5">
      <h1 className="mt-3 mb-6 text-3xl font-bold text-center">
        Featured Work
      </h1>

      <div className="h-screen flex flex-col items-center justify-center mb-6">
        <div className="sticky top-44 w-1/2 desc1 text-center mr-80">
          <h2 className="font-bold text-4xl pb-3">V-Mail</h2>
          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm px-12 py-9 mr-3 rounded-lg">
            <p className="text-lg">
              An email platform which helps the visually impaired individuals to
              compose, send, and receive mails solely using their voice. TTS and
              STT are used for the interaction between the user and the system.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="p-2 ">
                <FaGithub className="text-3xl" />
              </button>
              <button className="p-2">
                <CiSettings className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full img1">
          <img
            src="/src/assets/computer.jpeg"
            alt="computer image"
            className="w-96"
          />
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <div className="sticky top-20 w-1/2 desc1 text-center mr-80">
          <h2 className="font-bold text-4xl pb-3 pt-10 mt-16">Exam Seat Arrangement</h2>
          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm px-12 py-9 ml-3 rounded-lg">
            <p className="text-lg">
              A web application designed under my leadership, efficiently
              organizing students for exams in a fair and equitable manner,
              while also preventing malpractice.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="p-2 ">
                <FaGithub className="text-3xl" />
              </button>
              <button className="p-2">
                <CiSettings className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full img2">
          <img
            src="/src/assets/laptop.jpg"
            alt="computer image"
            className="w-96"
          />
        </div>
        <div className="mb-28"></div>
      </div>
    </div>
  );
};

export default Featured;
