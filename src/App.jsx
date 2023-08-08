import { useState } from "react"
import { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleMobileMenuToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);

    // Toggle body overflow when mobile navigation is active
    if (!isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
  }

  // Function to handle theme switch
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Save theme state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Get theme state from local storage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  return (
    <div className={`page-wrapper ${isDarkMode ? '' : 'light-mode'}`}>
      <Navbar isMobileNavOpen={isMobileNavOpen} onMobileMenuToggle={handleMobileMenuToggle} toggleTheme={toggleTheme}/>
      <Hero/>
      <About/>
      <FeaturedProjects/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
