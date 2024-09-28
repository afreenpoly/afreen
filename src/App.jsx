import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import BackToTop from "./components/BackToTop";
import Spinner from "./components/Spinner"; // Import Spinner
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the delay as needed
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="text-white ">
      <div>
        <Navbar />
      </div>
      <div className="pt-7 pb-2 sm:px-40 bg-backfill">
        <Profile />
      </div>
      <div className="pt-7 pb-2 px-5 bg-backfill">
        <Featured />
      </div>
      <div className="pt-7 pb-2 px-40 bg-backfill">
        <Projects />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
};

export default App;
