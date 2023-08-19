 import About from "./components/About";
 import Contact from "./components/Contact";
 import Home from "./components/Home";
 import Skills from "./components/Skills";
 import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="scroll-container overflow-y-scroll h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
     <Contact />
     <Footer />
    </div>

    
  );
}

export default App;
