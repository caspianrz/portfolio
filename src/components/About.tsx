const items = [
    {
        title: "Master's in Computer Science and Engineering.",
        desc: "Graduated from Payame Noor University, with a foundation in systems programming, algorithms, and software architecture.",
    },
    {
        title: "From gameplay code to compiler internals.",
        desc: "I move across the stack — Node.js backends, Unity gameplay systems, and even language/compiler tooling — depending on what the problem needs.",
    },
    {
        title: "Comfortable in small, focused teams.",
        desc: "Most of my career has been in small studios and research teams, where I own problems end-to-end and collaborate closely across disciplines.",
    },
];

export default function About() {
    return (
        <section id="about" className="snap-start px-6 py-24">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text text-center mb-12">
                About Me
            </h2>
            <div className="max-w-5xl mx-auto grid gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-extrabold">
                        Problem solver &lt;coder&gt;
                    </h2>
                    <p className="mt-3 text-[var(--color-muted)]">
                        Senior Software Engineer with 11 years of experience across backend, systems, and game development.
                    </p>

                    <ul className="mt-10 space-y-6">
                        {items.map((item) => (
                            <li key={item.title} className="border-l-2 border-[var(--color-accent)]/40 pl-4">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-[var(--color-muted)] text-sm mt-1">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}