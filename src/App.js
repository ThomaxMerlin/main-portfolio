import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

<Navbar />;
const App = () => {
  return (
    <div className="font-sans antialiased text-white bg-black">
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Tailwind CSS Custom Animations */}
      <style>
        {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </div>
  );
};

export default App;
