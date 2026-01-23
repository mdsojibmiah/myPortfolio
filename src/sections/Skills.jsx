import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaJava, FaCuttlefish } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiJest, SiCypress, SiPrisma, SiMysql, SiFirebase, SiRedis, SiGraphql } from "react-icons/si";

const skills = [
  {
    category: "Languages",
    skills: [
      { name: "C", icon: <FaCuttlefish className="text-gray-600" /> },
      { name: "C++", icon: <FaCuttlefish className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiTypescript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux", icon: <FaReact className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-gray-300" /> },
      { name: "RESTful APIs", icon: <FaNodeJs className="text-blue-300" /> },
      { name: "JWT", icon: <FaNodeJs className="text-yellow-400" /> },
      // { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Mongoose", icon: <SiMongodb className="text-green-400" /> },
      { name: "Prisma", icon: <SiPrisma className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      // { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub Actions", icon: <FaGitAlt className="text-orange-400" /> },
      // { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "VS Code", icon: <FaCuttlefish className="text-purple-500" /> },
      { name: "Postman", icon: <FaCuttlefish className="text-red-300" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      // { name: "Jest", icon: <SiJest className="text-red-500" /> },
      // { name: "Cypress", icon: <SiCypress className="text-green-400" /> },
      // { name: "AWS", icon: <FaCuttlefish className="text-orange-600" /> },
      { name: "Vercel", icon: <FaCuttlefish className="text-white" /> },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Expertise & Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in text-secondary-foreground">
            Skills <span className="font-serif italic font-normal text-white">that make an impact</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in">
            Modern technologies chosen for performance, scalability, and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <button
                    key={sIdx}
                    className="flex items-center gap-3 p-3 rounded-xl glass hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
