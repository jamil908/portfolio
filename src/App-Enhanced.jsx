import EnhancedHero from "./components/EnhancedHero";
import EnhancedAbout from "./components/EnhancedAbout";
import EnhancedPortfolio from "./components/EnhancedPortfolio";
import EnhancedContact from "./components/EnhancedContact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="max-w-[1000px] bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <EnhancedHero />
        <EnhancedAbout />
        <Skills />
        <Education />
        <EnhancedPortfolio />
        <EnhancedContact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}