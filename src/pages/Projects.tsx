// src/pages/Projects.tsx
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Projets</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border rounded-lg p-4 shadow hover:shadow-md transition-shadow"
          >
            {}
            <h3 className="text-lg font-bold">{p.title}</h3>

            {}
            <p className="text-sm text-muted-foreground mt-1">{p.description}</p>

            {}
            {p.tech?.length ? (
              <div className="flex flex-wrap mt-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="mr-2 mb-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            {}
            <p className="mt-2 text-xs text-gray-500">
              © {p.year} • {p.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}