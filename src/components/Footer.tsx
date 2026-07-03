import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socials = [
    {
        label: "Email",
        href: "mailto:caspianrz@gmail.com",
        icon: Mail,
    },
    {
        label: "GitHub",
        href: "https://github.com/caspianrz",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/caspianrz",
        icon: FaLinkedin,
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 border-t border-[var(--color-muted)]/10">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight gradient-text">
                    Let's work together
                </h1>
                <p className="mt-4 text-[var(--color-muted)] max-w-md mx-auto">
                    Open to new opportunities, collaborations, or just a chat about
                    gameplay systems and backend architecture. Reach out anytime.
                </p>

                <div className="mt-8 flex items-center justify-center gap-6">
                    {socials.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={label !== "Email" ? "_blank" : undefined}
                            rel={label !== "Email" ? "noopener noreferrer" : undefined}
                            aria-label={label}
                            className="p-3 rounded-full border border-[var(--color-muted)]/20 text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div >

            <div className="mt-16 flex items-center justify-between max-w-5xl mx-auto w-full text-xs text-[var(--color-muted)]/60">
                <span>&copy; {new Date().getFullYear()} Caspian Rezai, All rights reserved.</span>
                <a
                    href="#home"
                    className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors"
                >
                    Back to top <ArrowUp size={14} />
                </a>
            </div >
        </footer >
    );
}