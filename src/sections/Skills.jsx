import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaCuttlefish,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiMysql,
  SiFirebase,
  SiRedux,
  SiExpress,
  SiGithubactions,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
  Network,
  ShieldCheck,
} from "lucide-react";

const skillCategories = [
  {
    number: "01",
    category: "Programming Languages",
    description: "Languages I use for problem-solving and development.",
    icon: Code2,
    skills: [
      {
        name: "C",
        icon: FaCuttlefish,
        color: "text-gray-400",
      },
      {
        name: "C++",
        icon: FaCuttlefish,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "text-red-500",
      },
    ],
  },

  {
    number: "02",
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Monitor,
    skills: [
      {
        name: "React.js",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-teal-400",
      },
    ],
  },

  {
    number: "03",
    category: "Backend & APIs",
    description: "Developing server-side applications and API integrations.",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-foreground",
      },
      {
        name: "RESTful APIs",
        icon: Network,
        color: "text-blue-400",
      },
      {
        name: "JWT",
        icon: ShieldCheck,
        color: "text-yellow-500",
      },
    ],
  },

  {
    number: "04",
    category: "Databases & ORM",
    description: "Working with relational and NoSQL database systems.",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-500",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "Mongoose",
        icon: SiMongodb,
        color: "text-green-400",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-indigo-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-400",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-yellow-500",
      },
    ],
  },

  {
    number: "05",
    category: "Tools & Platforms",
    description: "Tools I use for development, collaboration and deployment.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-foreground",
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "text-blue-400",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "text-blue-500",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-500",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-foreground",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Code2 className="h-4 w-4" />
            Technical Expertise
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Technologies I{" "}
            <span className="font-serif font-normal italic text-primary">
              work with.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A collection of programming languages, frameworks, databases, and
            development tools I use to build modern and reliable software
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.number}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border border-border/70
                  bg-card/40 p-6
                  backdrop-blur-sm
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:bg-card/70
                  hover:shadow-xl hover:shadow-primary/5
                  animate-fade-in
                  ${index === 4 ? "md:col-span-2 xl:col-span-1" : ""}
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

                {/* Card Header */}
                <div className="relative mb-7 flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <CategoryIcon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.category}
                      </h3>

                      <p className="mt-1 max-w-[250px] text-sm leading-6 text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-medium tabular-nums text-muted-foreground/50">
                    {category.number}
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-5 h-px w-full bg-border/70 transition-colors duration-300 group-hover:bg-primary/20" />

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          inline-flex items-center gap-2.5
                          rounded-lg border border-border/70
                          bg-background/50 px-3 py-2.5
                          transition-all duration-300
                          hover:border-primary/40
                          hover:bg-primary/5
                          hover:-translate-y-0.5
                        "
                      >
                        <SkillIcon
                          className={`h-[18px] w-[18px] shrink-0 ${skill.color}`}
                        />

                        <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
          <div className="h-px w-16 bg-primary/40" />

          <p className="text-sm text-muted-foreground">
            Continuously learning, exploring, and improving my engineering
            skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
