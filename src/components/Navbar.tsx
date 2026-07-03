import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const name = "Caspian Rezai";
const jobTitle = "Senior Software Engineer";
const links = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[var(--color-bg)]/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M4 4L14 12L4 20"
                            stroke="var(--color-accent)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div>
                        <p className="text-sm font-bold leading-none">{name}</p>
                        <p className="text-xs text-[var(--color-muted)] leading-none mt-1">
                            {jobTitle}
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-muted)]">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-[var(--color-heading)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-full border border-[var(--color-muted)]/30 text-sm font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                        Contact me
                    </a>
                    <ThemeToggle />
                </div>

                <button
                    onClick={() => setOpen((o) => !o)}
                    className="md:hidden text-[var(--color-heading)]"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {open ? (
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        )}
                    </svg>
                </button>
            </div >

            {/* mobile panel */}
            < div
                className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`
                }
            >
                <div className="flex flex-col gap-4 pb-4 text-sm font-medium text-[var(--color-muted)]">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="hover:text-[var(--color-heading)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="px-5 py-2 rounded-full border border-[var(--color-muted)]/30 text-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                        Contact me
                    </a >
                    <div className="pt-2">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}