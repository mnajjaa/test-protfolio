import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Competences from "./components/Competences";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>

      <About />
      <Competences />
      <Experiences />
      <div className="p-5 md:px-[15%]">
        
        <Projects />
        
      </div>
       <Contact />
      <Footer />
    </div>
  )
}