
// import EnhancedAbout from "./components/EnhancedAbout";
// import EnhancedContact from "./components/EnhancedContact";
// import Education from "./components/Education";
// import Footer from "./components/Footer";
// import EnhancedHero from "./components/EnhancedHero";
// import Navbar from "./components/Navbar";
// import EnhancedPortfolio from "./components/EnhancedPortfolio";
// import Services from "./components/Services";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
//       <Navbar/>
//       <EnhancedHero/>
//       <EnhancedAbout/>
//       <Skills/>
//       <Services/>
//       <Education/>
//       <EnhancedPortfolio/>
//       <Testimonials/>
//       <EnhancedContact/>
//       <Footer/> 
//     </div>
//   )
// }

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-[1000px] mx-auto bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* THIS IS REQUIRED */}
      <Outlet />

      <Footer />
    </div>
  );
}
