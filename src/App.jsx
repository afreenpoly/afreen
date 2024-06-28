import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="text-white ">
      <div>
        <Navbar />
      </div>
      <div className="pt-7 pb-2 px-40 bg-backfill">
        <Profile />
        <Featured />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
