const skillGroups = [
    {
        label: "Languages",
        items: ["C", "C++", "C#", "Java", "Haxe", "TypeScript", "JavaScript", "Go", "Rust", "Python", "Lua"],
    },
    {
        label: "Game Dev & Systems",
        items: ["Unity", "Heaps", "OpenFL", "Starling", "OpenGL", "SDL", "LLVM"],
    },
    {
        label: "Backend & Distributed Systems",
        items: ["Node.js", "Express.js", "GraphQL", "gRPC", "REST", "Redis", "RabbitMQ"],
    },
    {
        label: "Databases",
        items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "PouchDB"],
    },
    {
        label: "Frontend",
        items: ["React", "Next.js"],
    },
    {
        label: "Mobile",
        items: ["React Native", "Android", "Kotlin", "Swift"],
    },
    {
        label: "Build & Tooling",
        items: ["CMake", "Make", "Git", "Linux", "CI/CD"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="snap-start py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text text-center mb-12">
                    Skills
                </h2>

                <div className="grid gap-8 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div key={group.label}>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-3">
                                {group.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-mono"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}