import { useState } from "react";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

    if (!src) {
        return null;
    }

    if(status === "error") {
        return (
            <div className="w-full h-full flex items-center justify-center bg-[var(--color-bg)]/60 animate-pulse">
                <span className="text-xs text-[var(--color-muted)]/60">
                    Image coming soon
                </span>
            </div>
        );
    }

    return (
        <>
            {status === "loading" && (
                <div className="absolute inset-0 bg-[var(--color-bg)]/60 animate-pulse" />
            )}
            <img
                src={src}
                alt={alt}
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                className="w-full h-full object-cover"
            />
        </>
    );
}

export default ProjectImage;