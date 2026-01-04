
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* THIS IS REQUIRED */}
      <Outlet />

      <Footer />
    </div>
  );
}
