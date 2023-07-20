import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <FeaturedProjects/>
    </div>
  )
}

export default App
