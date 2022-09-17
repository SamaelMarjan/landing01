import React from "react";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Hero from "./pages/Hero";
import About from "./pages/About";
import Exp from "./pages/Exp";

function App() {
  return (
    <>
    <div className="flex flex-col bg-[#18191a] md:h-[100%]">
      <Navbar />
      <Hero />
      <About />
      <Exp />
      <Footer />
    </div>
    </>
  );
}

export default App;
