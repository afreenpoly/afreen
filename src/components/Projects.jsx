import "./projects.css";
import bookImage from "../assets/book.png";
import todoImage from "../assets/todo.png";
import instaImage from "../assets/insta.png";
import ProductImage from "../assets/pma.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-4 px-4">
      <h1 className="mt-3 mb-6 text-3xl font-bold text-center">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-poppins">
        <div
          id="bms"
          className="flex flex-col sm:flex-row border-2 shadow-2xl border-y-purple-600 rounded-3xl p-5 hover:bg-gradient-to-bl bg-gradient-to-br from-projectcard via-navbar to-backfill"
        >
          <div className="flex justify-center sm:justify-start">
            <img
              className="object-contain"
              src={bookImage}
              alt="BMS"
              width="150"
            />
          </div>
          <div className="sm:w-3/4 mt-4 sm:mt-0 sm:ml-4">
            <h2 className="text-2xl sm:text-4xl mb-3 mt-3 font-bold">BMS</h2>
            <p className="text-xs sm:text-sm">
              A simple web application for managing books and performing CRUD
              operations on books.
            </p>
            <div className="w-fit border-2 opacity-50 hover:opacity-100 border-x-purple-600 rounded-full hover:bg-purple-600 hover:border-purple-800 px-2 mt-2">
              <a
                href="https://github.com/afreenpoly/Book-Management"
                target="_blank"
              >
                <button className="text-sm text-white">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div
          id="todo"
          className="flex flex-col sm:flex-row border-2 border-y-purple-600 rounded-3xl p-5 hover:bg-gradient-to-bl bg-gradient-to-br from-projectcard via-navbar to-backfill"
        >
          <div className="flex justify-center sm:justify-start">
            <img
              className="object-contain"
              src={todoImage}
              alt="To-Do"
              width="150"
            />
          </div>
          <div className="sm:w-3/4 mt-4 sm:mt-0 sm:ml-4">
            <h2 className="text-2xl sm:text-4xl mb-3 mt-3 font-bold">To-Do</h2>
            <p className="text-xs sm:text-sm">
              ToDo app that helps you stay organized and manage your tasks
              effortlessly. Add, complete, and delete tasks with ease.
            </p>
            <div className="w-fit border-2 opacity-50 hover:opacity-100 border-x-purple-600 rounded-full hover:bg-purple-600 hover:border-purple-800 px-2 mt-2">
              <a href="https://github.com/afreenpoly/todoapp" target="_blank">
                <button className="text-sm text-white">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div
          id="auto"
          className="flex flex-col sm:flex-row border-2 border-y-purple-600 rounded-3xl p-5 hover:bg-gradient-to-bl bg-gradient-to-br from-projectcard via-navbar to-backfill"
        >
          <div className="flex justify-center sm:justify-start">
            <img
              className="object-contain"
              src={instaImage}
              alt="Automation"
              width="150"
            />
          </div>
          <div className="sm:w-3/4 mt-4 sm:mt-0 sm:ml-4">
            <h2 className="text-2xl sm:text-4xl mb-3 mt-3 font-bold">
              Automation
            </h2>
            <p className="text-xs sm:text-sm">
              A flask web app which automates interaction within the social
              media platform, automating several functions like commenting.
            </p>
            <div className="w-fit border-2 opacity-50 hover:opacity-100 border-x-purple-600 rounded-full hover:bg-purple-600 hover:border-purple-800 px-2 mt-2">
              <a
                href="https://github.com/afreenpoly/Instagram-Automation"
                target="_blank"
              >
                <button className="text-sm text-white">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div
          id="pma"
          className="flex flex-col sm:flex-row border-2 shadow-2xl border-y-purple-600 rounded-3xl p-5 hover:bg-gradient-to-bl bg-gradient-to-br from-projectcard via-navbar to-backfill"
        >
          <div className="flex justify-center sm:justify-start">
            <img
              className="object-contain"
              src={ProductImage}
              alt="PMA"
              width="150"
            />
          </div>
          <div className="sm:w-3/4 mt-4 sm:mt-0 sm:ml-4">
            <h2 className="text-2xl sm:text-4xl mb-3 mt-3 font-bold">PMA</h2>
            <p className="text-xs sm:text-sm">
              Spring Boot web application for managing products.
            </p>
            <div className="w-fit border-2 opacity-50 hover:opacity-100 border-x-purple-600 rounded-full hover:bg-purple-600 hover:border-purple-800 px-2 mt-2">
              <a
                href="https://github.com/afreenpoly/Product-Management-App-Web"
                target="_blank"
              >
                <button className="text-sm text-white">Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
