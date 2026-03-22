import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="project">
          <Project />
        </section>   
        
        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;