 import About from "./components/About";
// import Contact from "./components/Contact";
 import Home from "./components/Home";
 import Skills from "./components/Skills";
 import Work from "./components/Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      {/* <Home />
      <About />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
