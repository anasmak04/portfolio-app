 import About from "./components/About";
 import Contact from "./components/Contact";
 import Home from "./components/Home";
 import Skills from "./components/Skills";
 import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="scroll-container overflow-y-scroll  h-screen">
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        </Routes>
    </BrowserRouter>

    </div>

    
  );
}

export default App;
