import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Ruaha Catholic University",
    description: "Official website for RUCU - a leading Catholic university in Tanzania offering quality education and academic programs.",
    url: "https://rucu.ac.tz",
    tags: ["Education", "University", "Web Development"],
  },
  {
    name: "Talkna",
    description: "Innovative communication platform connecting people through seamless digital conversations and collaboration.",
    url: "https://talkna.co.tz",
    tags: ["Communication", "SaaS", "Platform"],
  },
  {
    name: "NexiiPos",
    description: "Modern point of sale system designed to streamline business operations and enhance retail management efficiency.",
    url: "#",
    tags: ["POS", "Retail", "Business Software"],
  },
  {
    name: "Inness Stream Tour",
    description: "Travel and tour booking platform offering curated experiences and memorable adventures across destinations.",
    url: "https://www.innessstreamtour.com",
    tags: ["Travel", "Tourism", "Booking"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">PhortKid</h1>
          <p className="mt-1 text-muted-foreground">Full-Stack Developer</p>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-16">
        <section>
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">
            A selection of projects I have worked on
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PhortKid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
