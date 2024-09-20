import { FaGithub } from "react-icons/fa";
import vmailImage from "../assets/compose.png";
import examImage from "../assets/studetails.png";
import { CiSettings } from "react-icons/ci";

const Featured = () => {
  return (
    <div className="font-poppins mb-3">
      <h1 className="mt-3 mb-10 text-3xl font-bold text-center">
        Featured Work
      </h1>
      <div>
        <div className="h-screen flex flex-col ml-14">
          <div className="sticky top-44 w-1/3 text-center">
            <h2 className="font-bold text-4xl pb-3">V-Mail</h2>
            <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm px-12 py-7 rounded-lg">
              <p className="text-lg">
                An email platform which helps the visually impaired individuals
                to compose, send, and receive mails solely using their voice.
                TTS and STT are used for the interaction between the user and
                the system.
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

          <div className="flex justify-end pr-4">
            <img
              src={vmailImage}
              alt="Vmail image"
              className="w-[800px] h-[340px] rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-14"></div>

      <div className="h-screen flex flex-col ml-14">
        <div className="sticky top-44 w-1/3 text-center">
          <h2 className="font-bold text-4xl pb-3">Exam Seat Arrangement</h2>
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

        <div className="flex justify-end pr-4">
          <img
            src={examImage}
            alt="exam seat arrangement image"
            className="w-[800px] h-[340px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
