import ProjectImage from "./ProjectImage";

type CardData = {
    role: string;
    title: string;
    period: string;
    tech: string[];
    link?: string;
    description: string;
    img: string;
};

const placeholderCards: CardData[] = [
    {
        "title": "cashash.c",
        "role": "Personal Project",
        "period": "June 2026",
        "description": "Developed a generic hash table library in C with support for binary key-value pairs. Implemented collision handling using separate chaining and open addressing, with linear probing, quadratic probing, and double hashing. Designed APIs for insertion, deletion, lookup, iteration, and internal hash table validation. Added unit tests to verify collision handling, deletion, iteration, and correctness of different hash strategies.",
        "tech": ["C", "Hash Tables", "Separate Chaining", "Open Addressing", "Unit Testing"],
        "link": "https://github.com/caspianrz/cashash.c",
        "img": "./cashash.c.jpg"
    },
    {
        "title": "Z Programming Language",
        "role": "Sharif AI Research Center",
        "period": "Jan 2025 - Present",
        "description": "Designed and implemented components of the Z Programming Language and its compiler/toolchain infrastructure. Worked on systems-level language features involving parsing, code generation, linking, library management, and runtime behavior.",
        "tech": ["C++", "Compiler", "Parsing", "Code Generation", "Linking", "Runtime"],
        "link": "https://github.com/zii-lang",
        "img": "./zlang.jpg"
    },
    {
        title: "DeltaClash",
        role: "Software Engineer",
        period: "May 2023 - Jan 2025",
        description:
            "An online multiplayer clone of Deltarune's battle system, built client-side in Haxe using the Heaps engine. Designed a custom scripting engine to drive gameplay control, bullet patterns, and modding support, alongside server netcode for real-time multiplayer combat.",
        tech: ["Haxe", "Heaps", "WebSocket", "Scripting Engine"],
        link: "https://github.com/Deltarune-PVP-Project",
        img: "./deltaclash.jpg",
    },
    {
        "title": "Taawoos Studio",
        "role": "Gameplay Programmer",
        "period": "May 2021 - May 2023",
        "description": "Worked on Lucid Lenses, implementing gameplay systems, interactive logic, and production application features. Designed optimized graph traversal logic for planet-based gameplay mechanics and complex state interactions. Created a node-based dialogue system for managing branching conversations and structured gameplay flows. Implemented and maintained core application features with a focus on performance, stability, maintainability, and production delivery.",
        "tech": ["Gameplay Programming", "Graph Traversal", "Dialogue Systems", "Game Systems", "Performance Optimization"],
        "link": "https://play.google.com/store/apps/details?id=studio.taawoos.lucid",
        "img": "./lucid-lenses.jpg"
    },
    {
        "title": "BlueBoxGames",
        "role": "Game and Back-End Developer",
        "period": "Sep 2020 - Nov 2020",
        "description": "Worked as a full-stack developer across the client, core, and server components. Developed backend and application logic for a client/server architecture with shared core functionality. Built required native extensions, including the Metrix Native Extension, to integrate platform-specific functionality. Connected native functionality with higher-level application code to support cross-platform development and production builds.",
        "tech": ["Game Development", "Backend Development", "Client/Server Architecture", "Native Extensions", "Cross-Platform Development"],
        "link": "https://github.com/blueboxgames/mmory-client",
        "img": "./boomland.jpg"
    },
    {
        "title": "Dropthing",
        "role": "Personal Project",
        "period": "",
        "description": "Developed the client application using the Heaps engine. Built the server-side component in Haxe using Colyseus WebSocket. Designed a client/server structure for real-time interactive application behavior.",
        "tech": ["Haxe", "Heaps", "WebSocket", "Colyseus", "Client/Server Architecture"],
        "link": "https://github.com/aemorax/dropthing",
        "img": "./dropthing.png"
    },
    {
        "title": "HTTP Request Parser",
        "role": "Personal Project",
        "period": "",
        "description": "Built a fast HTTP request parser in C focused on parsing performance, low-level control, and networking fundamentals. Implemented parser logic suitable for systems-level backend infrastructure experiments.",
        "tech": ["C", "HTTP", "Request Parsing", "Networking", "Backend Infrastructure", "Systems Programming"],
        "link": "https://github.com/aemorax/libnhttp-parser",
        "img": "./httpparser.jpg"
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="snap-start min-h-screen px-6 py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text text-center mb-12">Portfolio</h2>
                <p className="mt-3 text-[var(--color-muted)] text-center mb-6">
                    A mix of frontend, backend, game dev, and low-level projects.
                </p>

                <div className="mt-12 grid sm:grid-cols-2 gap-6">
                    {placeholderCards.map((card) => (
                        <article
                            key={card.title}
                            className="group rounded-2xl border border-[var(--color-muted)]/15 bg-[var(--color-bg-soft)] p-6 hover:border-[var(--color-accent)]/50 transition-colors"
                        >
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]">
                                {card.role} · {card.period}
                            </span>

                            <h3 className="mt-3 text-xl font-bold">{card.title}</h3>

                            <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                                {card.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {card.tech.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--color-muted)]/20 text-[var(--color-muted)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 aspect-video rounded-xl overflow-hidden bg-[var(--color-bg)]/60 border border-[var(--color-muted)]/10">
                                <ProjectImage src={card.img} alt={card.title} />
                            </div>

                            {card.link && (
                                <a
                                    href={card.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 hover:text-white transition-colors"
                                >
                                    View project
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section >
    );
}