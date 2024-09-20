import { FaGithub } from "react-icons/fa";
import vmailImage from "../assets/compose.png";
import examImage from "../assets/studetails.png";
import { CiSettings } from "react-icons/ci";

const Featured = () => {
  return (
    <div className="font-poppins mt-5 mb-3">
      <h1 className=" mb-10 text-3xl font-bold text-center">Featured Work</h1>

      {/* V-Mail Section */}
      <div className="flex flex-row items-center justify-between ml-4 mb-32">
        {/* Description */}
        <div className="w-1/3 text-center pr-8">
          <h2 className="font-bold text-4xl pb-3">V-Mail</h2>
          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm px-12 py-7 rounded-lg">
            <p className="text-lg">
              An email platform which helps the visually impaired individuals to
              compose, send, and receive mails solely using their voice. TTS and
              STT are used for the interaction between the user and the system.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="p-2">
                <FaGithub className="text-3xl" />
              </button>
              <button className="p-2">
                <CiSettings className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-2/3 flex justify-end pr-4">
          <img
            src={vmailImage}
            alt="Vmail image"
            className="w-full h-[380px] rounded-lg"
          />
        </div>
      </div>

      {/* Exam Seat Arrangement Section */}
      <div className="flex flex-row items-center justify-between ml-4 mt-32 mb-28">
        {/* Image */}
        <div className="w-2/3 flex justify-end pr-8">
          <img
            src={examImage}
            alt="Exam Seat Arrangement image"
            className="w-[1000px] h-[350px] rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="w-1/3 text-center mr-4">
          <h2 className="font-bold text-3xl pb-3">Exam Seat Arrangement</h2>
          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm px-12 py-7 rounded-lg">
            <p className="text-lg">
              A web application designed under my leadership, efficiently
              organizing students for exams in a fair and equitable manner,
              while also preventing malpractice.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="p-2">
                <FaGithub className="text-3xl" />
              </button>
              <button className="p-2">
                <CiSettings className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
