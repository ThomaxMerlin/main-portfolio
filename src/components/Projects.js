import React from "react";

const Projects = () => {
  const IconArrowRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
  const SectionHeading = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 relative z-10">
      <span className="relative">
        {children}
        <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-red-500 rounded-full transform -translate-x-1/2"></span>
      </span>
    </h2>
  );

  const ProjectCard = ({ title, description, skills, githubLink }) => (
    <div className="bg-neutral-900 rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:bg-neutral-800 border border-neutral-800 hover:border-red-500 animate-fade-in-up">
      <div>
        <h3 className="text-2xl font-bold text-red-500 mb-2">{title}</h3>
        <p className="text-neutral-400 mb-4">{description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-red-500/10 text-red-300 text-sm font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
        >
          View on GitHub
          <IconArrowRight />
        </a>
      </div>
    </div>
  );
  return (
    <>
      {/* Projects Section */}

      <section id="projects" className="py-24">
        <SectionHeading>Recent Projects</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Task Management"
            description="A full-stack web application for task management. Features user authentication and real-time updates."
            skills={["Next.js", "React Query", "TypeScript", "Tailwind CSS"]}
            githubLink="https://github.com/ThomaxMerlin/task-manager"
          />
          <ProjectCard
            title="Movie Finder"
            description="A movie search application that allows users to search for movies, view details, and manage a list of favorite movies."
            skills={["React", "ESLint", "Vite"]}
            githubLink="https://github.com/ThomaxMerlin/movie-app"
          />
          <ProjectCard
            title="Recipe Finder"
            description="A recipe search application that allows users to find recipes based on ingredients and dietary preferences."
            skills={["React", "Redux", "React-Router", "Material -UI"]}
            githubLink="https://github.com/ThomaxMerlin/recipe-finder"
          />
          <ProjectCard
            title="Gaming Website"
            description="A gaming tournament website that provides information about upcoming tournaments, teams, and players."
            skills={["HTML", "CSS", "JavaScript"]}
            githubLink="https://github.com/ThomaxMerlin/Game-tournament-"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
