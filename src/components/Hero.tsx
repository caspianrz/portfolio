const jobTitle = "Senior Software Engineer";
const techStack = ["C/C++", "C#", "Game Development", "Frontend Development", "Backend Development"];

export default function Hero() {
  return (
      <section id="home" className="h-screen snap-start pt-40 pb-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight gradient-text">
          {jobTitle}
        </h1>

        <p className="mt-4 text-sm md:text-base font-mono px-4">
            <span className="text-[var(--color-muted)]">{"{ "}</span>
            <span className="text-[var(--color-accent)]">{techStack.join(", ")}</span>
            <span className="text-[var(--color-muted)]">{" }"}</span>
        </p>

        <p className="mt-6 text-[var(--color-muted)] text-lg leading-relaxed max-w-xl mx-auto">
            11 years building backend systems, real-time applications, from Node.js APIs and 
            distributed backends to Unity gameplay code, game engines and compiler tooling.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="./resume.pdf"
                      className="px-6 py-3 rounded-full bg-[var(--color-accent)] text-[#06121a] font-semibold text-sm hover:scale-105 transition-transform"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}