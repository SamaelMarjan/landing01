import React from "react";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Hero from "./pages/Hero";
import About from "./pages/About";

function App() {
  return (
    <>
    <div className="flex flex-col bg-[#18191a]">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
    </>
  );
}

export default App;
