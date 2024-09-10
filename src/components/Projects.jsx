import "./projects.css";
import bookImage from "../assets/book.png";
import todoImage from "../assets/todo.png";
import instaImage from "../assets/insta.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-4">
      <h1 className="mt-3 mb-6 text-3xl font-bold">Projects</h1>

      <div className="grid grid-cols-2 gap-6 font-poppins">
        <div
          id="bms"
          className="flex border-2 shadow-2xl border-y-purple-600 rounded-3xl pr-5 py-7 hover:bg-gradient-to-bl bg-gradient-to-br from-projectcard via-navbar to-backfill"
        >
          <div className="flex">
            <img
              className="object-contain"
              src={bookImage}
              alt="BMS"
              width="200"
            />
          </div>
          <div className="w-3/4">
            <h2 className="text-4xl mb-3 mt-3 font-bold">BMS</h2>
            <p className="text-xs">
              A simple web application for managing books and performing CRUD
              operations on books.
            </p>
            <div className="w-fit border-2 opacity-50 hover:opacity-100 border-x-purple-600 rounded-full  hover:bg-purple-600 hover:border-purple-800 px-2 mt-2">
              <button className="text-sm text-white ">Github</button>
            </div>
          </div>
        </div>

        <div
          id="todo"
          className="flex border-2 border-y-purple-600 rounded-3xl pr-5 py-7 hover:bg-gradient-to-bl bg-gradient-to-br from-projectcard via-navbar to-backfill"
        >
          <div className="flex">
            <img
              className="object-contain"
              src={todoImage}
              alt="To-Do"
              width="200"
            />
          </div>
          <div className="w-3/4">
            <h2 className="text-4xl mb-3 mt-3 font-bold">To-Do</h2>
            <p className="text-xs">
              ToDo app that helps you stay organized and manage your tasks
              effortlessly. Add, complete, and delete tasks with ease.
            </p>
            <div className="w-fit border-2 opacity-50 hover:opacity-100 border-x-purple-600 rounded-full  hover:bg-purple-600 hover:border-purple-800 px-2 mt-2">
              <button className="text-sm text-white ">Github</button>
            </div>
          </div>
        </div>

        <div
          id="auto"
          className="flex border-2 border-y-purple-600 rounded-3xl pr-5 py-7 hover:bg-gradient-to-bl bg-gradient-to-br from-projectcard via-navbar to-backfill"
        >
          <div className="flex">
            <img
              className="object-contain"
              src={instaImage}
              alt="Automation"
              width="200"
            />
          </div>
          <div className="w-3/4">
            <h2 className="text-4xl mb-3 mt-3 font-bold">Automation</h2>
            <p className="text-xs">
              A flask web app which automates interaction within the social
              media platform, automates several functions like commenting.
            </p>
            <div className="w-fit border-2 opacity-50 hover:opacity-100 border-x-purple-600 rounded-full  hover:bg-purple-600 hover:border-purple-800 px-2 mt-2">
              <button className="text-sm text-white ">Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
