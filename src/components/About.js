import React from "react";

const About = () => {
  const SectionHeading = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 relative z-10">
      <span className="relative">
        {children}
        <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-red-500 rounded-full transform -translate-x-1/2"></span>
      </span>
    </h2>
  );
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-24">
        <SectionHeading>About Me</SectionHeading>
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border border-neutral-800 animate-fade-in-up">
          <p className="text-neutral-300 leading-relaxed text-lg">
            I am a recent graduate with a strong foundation in computer science
            and a passion for creating impactful software. I love tackling
            complex problems and writing clean, efficient code. My journey in
            tech began with a curiosity for how things work, and it has evolved
            into a full-fledged dedication to building seamless user
            experiences. I am eager to contribute to a team, learn from
            experienced developers, and grow my skills in a dynamic environment.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
