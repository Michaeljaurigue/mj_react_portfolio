import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Artwork from "../pages/Artwork/Artwork";
import Resume from "../pages/Resume/Resume";
import GraphicDesign from "../pages/GraphicDesign/GraphicDesign";
import DigitalMarketing from "../pages/DigitalMarketing/DigitalMarketing";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/GraphicDesign" exact Component={GraphicDesign} />
          <Route path="/DigitalMarketing" exact Component={DigitalMarketing} />
          <Route path="/artwork" exact Component={Artwork} />
          <Route path="/resume" exact Component={Resume} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}
// <Route path="/about" exact Component={About} />
export default App;
