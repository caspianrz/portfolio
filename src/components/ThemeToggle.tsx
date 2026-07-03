import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="relative w-14 h-7 rounded-full bg-[var(--color-bg-soft)] border border-[var(--color-muted)]/20 flex items-center px-1"
        >
            <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-[var(--color-accent)] transition-transform duration-300 ${isDark ? "translate-x-7" : "translate-x-0"
                    }`}
            />
            <svg className="w-3.5 h-3.5 text-[var(--color-muted)] ml-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
            </svg>
            <svg className="w-3.5 h-3.5 text-[var(--color-muted)] ml-auto mr-0.5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <path
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </button>
    );
}
