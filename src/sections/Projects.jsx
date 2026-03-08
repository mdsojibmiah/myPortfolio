import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Mess Management System — Landing Page",
    description:
      "Built a responsive and clean landing page for the Mess Management System using Next.js and TypeScript. Focused on clear UI, intuitive navigation, and mobile optimization.",
    images: [
      "/projects/Mess_landing.png",
      "/projects/Mess_login.png",
      "/projects/Mess_register.png",
    ],
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://mess-management-orcin.vercel.app/",
    github: "https://github.com/mdsojibmiah/Mess_Management_LandingPage",
  },
  {
    title: "Mess Management System — Dashboard",
    description:
      "Developed a React-based admin dashboard for the Mess Management System to manage members, meals, expenses, deposits, and monthly calculations. Added reports and analytics for tracking and insights, optimized for mobile devices.",
    images: [
      "/projects/Mess_Dashboard1.svg",
      "/projects/Mess_Dashboard2.svg",
      "/projects/Mess_Dashboard5.png",
      "/projects/Mess_Dashboard6.png",
    ],
    tags: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite"],
    link: "https://mess-management-system-orcin.vercel.app/",
    github: "https://github.com/mdsojibmiah/Mess_Management_Frontend",
  },
  {
    title: "Social Profile Marketplace",
    description:
      "A full-stack marketplace built with the PERN stack. Implemented authentication, subscriptions, Stripe payments, admin verification panel, and user chat system.",
    images: ["/projects/project_11.png"],
    tags: ["React.js", "Node.js", "PostgreSQL", "Redux", "Tailwind CSS"],
    link: "https://flipearnsocial.vercel.app/",
    github: "https://github.com/mdsojibmiah/flipearn",
  },
  {
    title: "Mosque & Cemetery Management Website",
    description:
      "Digitally managed mosque cemetery records with responsive UI. Integrated live prayer times using AlAdhan API, monitored donations, expenses, committee details, and added notice board, gallery, and FAQ section.",
    images: ["/projects/project_2.png"],
    tags: ["React.js", "Tailwind CSS", "EmailJS", "Vite", "AlAdhan API"],
    link: "https://bpmosquegrave.vercel.app/",
    github: "https://github.com/mdsojibmiah/bpmosquegrave",
  },
  {
    title: "QuickCart Ecommerce",
    description:
      "A full-stack e-commerce website built with Next.js, MongoDB, Tailwind CSS, Clerk, and Inngest, featuring user authentication, cart functionality, admin panel, and deployment.",
    images: ["/projects/Project-5.png"],
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Clerk",
      "Inngest",
      "Cloudinary",
      "Vercel",
    ],
    link: "https://quick-cart-one-taupe.vercel.app/",
    github: "https://github.com/mdsojibmiah/QuickCart",
  },
  {
    title: "AI Thumbnail Generator App",
    description:
      "A full-stack AI thumbnail generator using React and MERN stack. Implemented user authentication, stored generated thumbnails in MongoDB, and integrated Google Gemini API for AI-powered thumbnail creation.",
    images: ["/projects/project_3.png"],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API"],
    link: "https://thumblify-five.vercel.app/",
    github: "https://github.com/mdsojibmiah/Thumblify",
  },
  {
    title: "Gemini 2.0 Clone",
    description:
      "A financial platform clone built with React and Tailwind CSS, featuring real-time data visualization and portfolio tracking inspired by Gemini 2.0.",
    images: ["/projects/project_4.png"],
    tags: ["React", "Tailwind CSS", "Gemini API"],
    link: "https://gemini2-0-clone-xi.vercel.app/",
    github: "https://github.com/mdsojibmiah/gemini2.0_clone",
  },
];

/* ---------------- MODAL ---------------- */
const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-3xl p-8 max-w-4xl w-full shadow-2xl relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 text-xl text-muted-foreground hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6 text-white">{project.title}</h2>

        {/* MAIN IMAGE */}
        <img
          src={project.images[activeImage]}
          className="w-full h-80 object-contain rounded-xl mb-6 shadow-lg"
        />

        {/* IMAGE GALLERY */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setActiveImage(idx)}
              className={`w-28 h-20 object-cover rounded-lg cursor-pointer border ${
                activeImage === idx ? "border-primary" : "border-transparent"
              }`}
            />
          ))}
        </div>

        <p className="text-muted-foreground mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 rounded-full text-xs border border-border/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium cursor-pointer"
          >
            Live Demo <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2  px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium cursor-pointer"
          >
            GitHub <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ---------------- PROJECT SECTION ---------------- */
export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 transform hover:-translate-y-1 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-card/50 to-transparent opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Always Visible Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "Collapse Projects" : "View All Projects"}{" "}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
