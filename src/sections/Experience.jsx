import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Clock3,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Softvence Agency",
    role: "Frontend Developer",
    employmentType: "Full-time",
    period: "Apr 2026 — Sep 2026",
    duration: "6 months",
    location: "Dhaka, Bangladesh",
    workMode: "On-site",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHsB0cNozjoAg/company-logo_100_100/B4DZlSDXDbH0AQ-/0/1758018237349/softvence_agency_logo?e=1796860800&v=beta&t=sjY5eG2xGTPZ7fE-sjPNXPIq1E2E0vm8lQlF0Eyfe7Y",
    companyUrl: "https://www.linkedin.com/company/99067799/",
    description:
      "Worked as a Frontend Developer at Softvence Agency, contributing to frontend development and web application implementation.",
    responsibilities: [
      "Contributed to frontend development using React.js and modern web technologies.",
      "Worked on implementing responsive user interfaces and frontend functionality.",
    ],
    technologies: ["React.js", "JavaScript", "Frontend Development"],
  },

  {
    id: 2,
    company: "Digitex Crew",
    role: "Junior Software Engineer",
    employmentType: "Full-time",
    period: "Oct 2022 — Dec 2025",
    duration: "3 years 3 months",
    location: "Dhaka, Bangladesh",
    workMode: "Remote",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGLmj9HkiQRuQ/company-logo_100_100/company-logo_100_100/0/1697955959837/digitexcrew_logo?e=1796860800&v=beta&t=8d5q6NkjHT4RXtcw2SExxSc2BBKB4ISQl9EA_Uz8b58",
    companyUrl: "https://www.linkedin.com/company/78386032/",
    description:
      "Developed and maintained web applications and client-focused software solutions, contributing to frontend development, backend integration, and software delivery.",
    responsibilities: [
      "Developed and maintained web applications and client-focused software solutions.",
      "Supported responsive frontend development and website implementation.",
      "Assisted with database design, API integration, debugging, testing, and deployment.",
      "Collaborated with senior engineers and cross-functional teams to deliver maintainable software solutions.",
      "Contributed to software projects based on client requirements and business objectives.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Frontend Development",
      "API Integration",
      "Database Design",
      "Software Development",
    ],
  },

  {
    id: 3,
    company: "Nexcent Tech Ltd",
    role: "Junior Software Engineer",
    employmentType: "Full-time",
    period: "Aug 2025 — Oct 2025",
    duration: "3 months",
    location: "Dhaka, Bangladesh",
    workMode: "Remote",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFdJzhacusiOQ/company-logo_100_100/B56aGnjzaOK4AQ-/0/1793812543572/nexcent_tech_ltd_logo?e=1796860800&v=beta&t=6JzdDay-wPuNXOEDTBduRSTWpMrgD2-DdY5cuJEsdgk",
    companyUrl: "https://www.linkedin.com/company/107127901/",
    description: "Worked as a Junior Software Engineer at Nexcent Tech Ltd.",
    responsibilities: [],
    technologies: [],
  },

  {
    id: 4,
    company: "Nexcent Tech Ltd",
    role: "Frontend Developer",
    employmentType: "Internship",
    period: "Jun 2025 — Aug 2025",
    duration: "3 months",
    location: "Dhaka, Bangladesh",
    workMode: "Remote",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFdJzhacusiOQ/company-logo_100_100/B56aGnjzaOK4AQ-/0/1793812543572/nexcent_tech_ltd_logo?e=1796860800&v=beta&t=6JzdDay-wPuNXOEDTBduRSTWpMrgD2-DdY5cuJEsdgk",
    companyUrl: "https://www.linkedin.com/company/107127901/",
    description: "Joined Nexcent Tech Ltd as a Frontend Developer Intern.",
    responsibilities: [],
    technologies: [],
  },

  {
    id: 5,
    company: "ICT Olympiad Bangladesh",
    role: "Ambassador",
    employmentType: "Seasonal",
    period: "Oct 2024 — Mar 2025",
    duration: "6 months",
    location: "Dhaka, Bangladesh",
    workMode: "On-site",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEYbzRYptg5kw/company-logo_100_100/B56Zc1W5v4HUAQ-/0/1748946886078/ict_olympiad_bangladesh_logo?e=1796860800&v=beta&t=4qiqMwqE5NDYo0FuvDiI0u4xnUEG60okAZ1FND3maCk",
    companyUrl: "https://www.linkedin.com/company/89833754/",
    description:
      "Served as an Ambassador for ICT Olympiad Bangladesh during a six-month seasonal engagement.",
    responsibilities: [],
    technologies: [],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden py-10 md:py-16"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <BriefcaseBusiness className="h-4 w-4" />
            Professional Journey
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            My professional{" "}
            <span className="font-serif font-normal italic text-primary">
              experience.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            My journey through software engineering, frontend development, and
            professional collaboration. Each experience has contributed to my
            growth as an engineer.
          </p>
        </div>

        {/* Experience Count */}
        <div className="mb-10 flex items-center justify-between border-b border-border/60 pb-5">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Work Experience
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Professional roles and activities
            </p>
          </div>

          <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            {experiences.length} Positions
          </span>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:left-[27px]" />

          <div className="space-y-7">
            {experiences.map((exp, index) => (
              <article
                key={exp.id}
                className="group relative pl-12 md:pl-16 animate-fade-in"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[12px] top-8 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary md:left-[20px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-background" />
                </div>

                {/* Experience Card */}
                <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/5 sm:p-7">
                  {/* Top Accent */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                  {/* Card Header */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${exp.company} LinkedIn page`}
                        className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-1.5 transition-colors duration-300 group-hover:border-primary/30"
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          loading="lazy"
                          className="h-full w-full rounded-lg object-contain"
                        />
                      </a>

                      {/* Company and Role */}
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-foreground sm:text-xl">
                          {exp.role}
                        </h3>

                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          {exp.company}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
                            {exp.employmentType}
                          </span>

                          <span className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
                            {exp.workMode}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="shrink-0 sm:text-right">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <CalendarDays className="h-4 w-4" />

                        {exp.period}
                      </div>

                      <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground sm:justify-end">
                        <Clock3 className="h-3.5 w-3.5" />

                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-border/70" />

                  {/* Description */}
                  <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {exp.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {exp.technologies.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-border/70 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Location */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/50 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {exp.location}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {exp.workMode}
                    </span>
                  </div>

                  {/* Company Link */}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground opacity-0 transition-all duration-300 hover:border-primary/40 hover:text-primary group-hover:opacity-100 max-sm:hidden"
                    aria-label={`View ${exp.company} on LinkedIn`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-primary/50" />

          <p className="text-sm leading-7 text-muted-foreground">
            Every experience is another step toward becoming a better software
            engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
