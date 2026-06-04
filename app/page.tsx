import Image from "next/image";
import { ExternalLink, Mail, Code, Smartphone, Palette } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

const projects = [
  {
    name: "Ruaha Catholic University",
    description: "Official website for RUCU - a leading Catholic university in Tanzania offering quality education and academic programs.",
    url: "https://rucu.ac.tz",
    tags: ["Next.js", "Education", "Web Development"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Talkna",
    description: "Innovative communication platform connecting people through seamless digital conversations and collaboration.",
    url: "https://talkna.co.tz",
    tags: ["React", "Communication", "Platform"],
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "NexiiPos",
    description: "Modern point of sale system designed to streamline business operations and enhance retail management efficiency.",
    url: "#",
    tags: ["TypeScript", "POS", "Business"],
    gradient: "from-orange-400 to-red-500",
  },
  {
    name: "Inness Stream Tour",
    description: "Travel and tour booking platform offering curated experiences and memorable adventures across destinations.",
    url: "https://www.innessstreamtour.com",
    tags: ["Next.js", "Travel", "Booking"],
    gradient: "from-pink-500 to-rose-500",
  },
];

const skills = [
  {
    title: "Frontend Development",
    icon: Code,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend & Tools",
    icon: Smartphone,
    tags: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Git", "Docker"],
  },
  {
    title: "Design & UX",
    icon: Palette,
    tags: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping", "Responsive Design", "Accessibility"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">PhortChrispin</span>
          <div className="hidden sm:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-6xl flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-muted">
              <Image
                src="/phort.jpg"
                alt="PhortChrispin"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">PhortChrispin</h1>
            <p className="mt-2 text-lg text-muted-foreground">Creative Developer & Digital Innovator from Tanzania</p>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Passionate about creating beautiful, functional digital experiences that make a difference. I blend creativity with technology to bring ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">About Me</h2>
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I&apos;m PhortChrispin, a passionate developer from Tanzania who loves turning complex problems into simple, beautiful solutions. With a keen eye for design and a strong technical background, I create digital experiences that are both functional and delightful.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I currently work with <a href="https://www.instagram.com/quicksoft_solutions/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quicksoftsolution</a> and <a href="https://www.instagram.com/nexiiafrica/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Nexii</a>, where I collaborate on innovative projects that push the boundaries of technology. When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying at the forefront of technology trends.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Problem Solver", "Creative Thinker", "Team Player", "Continuous Learner"].map((trait) => (
                  <span key={trait} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-section-bg">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Skills & Technologies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.title} className="bg-card border border-border rounded-2xl p-6">
                  <skill.icon className="w-8 h-8 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Featured Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.name} className="bg-card border border-border rounded-2xl overflow-hidden group">
                  <div className={`h-32 bg-gradient-to-br ${project.gradient}`} />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-section-bg">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Let&apos;s Connect</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:middlephort@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="https://tz.linkedin.com/in/phort-chrispin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/PhortKid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PhortChrispin. Powered by <a href="https://www.instagram.com/nexiiafrica/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Nexii</a>.</p>
        </div>
      </footer>
    </div>
  );
}
