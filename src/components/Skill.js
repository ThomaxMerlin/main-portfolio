import React from "react";

const Skill = () => {
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
      {/* Skills Section */}
      <section id="skills" className="py-24">
        <SectionHeading>My Skills</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            "React",
            "JavaScript",
            "Node.js",
            "Python",
            "Tailwind CSS",
            "Next.js",
            "SQL",
            "Git",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-3xl p-6 text-center transition-transform duration-300 hover:scale-105 border border-neutral-800 hover:border-red-500 animate-fade-in-up delay-100"
            >
              <span className="text-red-500 text-4xl mb-2 block">
                {/* Placeholder for future icons */}
              </span>
              <p className="text-lg font-bold text-white">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;
