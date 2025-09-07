import React, { useState, useEffect } from "react";
import Profile from "../assets/profile.jpg";

const Hero = () => {
  const Typewriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      // Check if the words array is valid and not empty
      if (!words || words.length === 0) {
        return;
      }

      const currentWord = words[index];
      if (!currentWord) {
        // This case should be prevented by the modulo operator below, but is a good safeguard.
        return;
      }

      // Typing logic
      if (!isDeleting && subIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setSubIndex(subIndex + 1);
        }, 150);
        return () => clearTimeout(timeout);
      }

      // Pause at the end of typing
      if (!isDeleting && subIndex === currentWord.length) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }

      // Deleting logic
      if (isDeleting && subIndex > 0) {
        const timeout = setTimeout(() => {
          setSubIndex(subIndex - 1);
        }, 75);
        return () => clearTimeout(timeout);
      }

      // End of deleting, move to next word
      if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, [subIndex, index, isDeleting, words]);

    return (
      <span className="text-xl md:text-2xl text-red-500 font-semibold mt-4">
        {words[index]?.substring(0, subIndex)}
        <span className="inline-block w-1 h-6 md:h-8 bg-red-500 align-text-bottom ml-1"></span>
      </span>
    );
  };

  return (
    <>
      {" "}
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <img
          className="w-40 h-40 rounded-full mb-6 border-4 shadow-lg animate-fade-in-up"
          src={Profile}
          alt="xL's Profile Picture"
        />
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 animate-fade-in-up">
          Hi, I'm <span className="text-red-600">xL</span>
        </h1>
        <Typewriter
          words={[
            "Junior Developer",
            "Software Tester",
            "Problem Solver",
            "Innovator",
            "Tech Enthusiast",
            "Lifelong Learner",
            "Team Player",
            "Creative Thinker",
            "Passionate Coder",
            "Systems Analyst",
          ]}
        />
        <p className="text-2xl text-neutral-400 mb-8 max-w-2xl animate-fade-in-up delay-200">
          A passionate Junior Software Developer specializing in building modern
          web applications.
        </p>
        <div className="flex gap-4 animate-fade-in-up delay-400">
          <a
            href="#projects"
            className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-red-500 text-red-500 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-red-500 hover:text-white"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
