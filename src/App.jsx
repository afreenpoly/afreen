import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="text-white ">
      <div>
        <Navbar />
      </div>
      <div className="py-7 px-40 bg-backfill">
        <Profile />
        <Featured />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
