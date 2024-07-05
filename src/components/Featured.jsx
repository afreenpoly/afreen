import "./featured.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
    return (
    <div className="font-poppins py-7 mb-10">
      <h1 className="mt-3 mb-6 text-5xl font-bold text-center">
        Featured Work
      </h1>
      <div className="flex justify-center">
        <div className="w-1/2 desc1">
          <h2 className=" font-bold text-4xl pb-3">V-Mail</h2>
          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm p-5 mr-3 rounded-lg">
            <p className="text-sm">
              An email platform which helps the visually impaired individuals to
              compose, send and receive mails solely using their voice only. TTS
              and STT are used for the interaction between user and the system.
            </p>
          </div>
        </div>
        <div className="flex img1">
          <img
            src="/src/assets/computer.jpeg"
            alt="computer image"
            width="300rem"
          />
        </div>
      </div>

      <div className="flex py-6 justify-center">
        <div className="flex img2">
          <img
            src="/src/assets/laptop.jpg"
            alt="computer image"
            width="300rem"
          />
        </div>
        <div className="w-1/2 desc2">
          <h2 className=" font-bold text-3xl pt-2 pl-3 pb-8">
            Exam Seat Arrangement System
          </h2>

          <div className="bg-slate-500 bg-opacity-30 backdrop-blur-sm p-5 ml-3 rounded-lg">
            <p className="text-sm">
              A web application designed under my leadership, efficiently
              organizing students for exams in a fair and equitable manner,while
              also preventing malpractice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
