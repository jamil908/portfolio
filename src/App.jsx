
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
     <div className="  ">
     <Navbar/>
     <Hero/>
     <About></About>
     <Skills/>
     <Education></Education>
     <Portfolio/>
     
      <Contact/>
      <Footer/> 
     </div>
    </>
  )
}