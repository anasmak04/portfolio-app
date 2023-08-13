 import About from "./components/About";
// import Contact from "./components/Contact";
 import Home from "./components/Home";
 import Skills from "./components/Skills";
// import Work from "./components/Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Home />
      <About />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
