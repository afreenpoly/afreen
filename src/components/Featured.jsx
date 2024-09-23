import { FaGithub } from "react-icons/fa";
import vmailImage from "../assets/compose.png";
import examImage from "../assets/studetails.png";
import { CiSettings } from "react-icons/ci";

const Featured = () => {
  return (
    <div className="font-poppins mt-5 mb-3">
      <h1 className=" mb-10 text-3xl font-bold text-center">Featured Work</h1>

      {/* V-Mail Section */}
      <div className="flex flex-col md:flex-row items-center justify-between ml-4 mb-32">
        {/* Description */}
        <div className="w-full md:w-1/3 text-center md:pr-8 mb-8 md:mb-0">
          <h2 className="font-bold text-2xl md:text-4xl pb-3">V-Mail</h2>
          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm px-6 py-6 md:px-12 md:py-7 rounded-lg">
            <p className="text-sm md:text-lg">
              An email platform which helps visually impaired individuals to
              compose, send, and receive mails solely using their voice. TTS and
              STT are used for interaction between the user and the system.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/afreenpoly/V-Mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="md:p-2">
                  <FaGithub className="text-lg md:text-3xl" />
                </button>
              </a>
              {/* <a
                href="https://your-settings-link.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2">
                  <CiSettings className="text-3xl" />
                </button>
              </a> */}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-2/3 flex justify-end pr-4">
          <img
            src={vmailImage}
            alt="Vmail image"
            className="w-full max-w-[1000px] h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Exam Seat Arrangement Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between ml-4 mt-32 mb-28">
        {/* Image */}
        <div className="w-full md:w-2/3 flex justify-end md:pr-8 mt-8 md:mt-0">
          <img
            src={examImage}
            alt="Exam Seat Arrangement image"
            className="w-full max-w-[1000px] h-auto rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/3 text-center md:mr-4">
          <h2 className="font-bold text-2xl md:text-3xl pb-3">
            Exam Seat Arrangement
          </h2>
          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm px-6 py-6 md:px-12 md:py-7 rounded-lg">
            <p className="text-sm md:text-lg">
              A web application designed under my leadership, efficiently
              organizing students for exams in a fair and equitable manner,
              while also preventing malpractice.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/afreenpoly/Exam-Seat-Arrangement"
                target="_blank"
              >
                <button className="md:p-2">
                  <FaGithub className="text-lg md:text-3xl" />
                </button>
              </a>
              <a
                href="https://exam-seat-arrangement.onrender.com/"
                target="_blank"
              >
                <button className="md:p-2" title="Live demo">
                  <CiSettings className="text-lg md:text-3xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
