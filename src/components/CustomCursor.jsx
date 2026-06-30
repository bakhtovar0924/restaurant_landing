import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [hover, setHover] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Skip on mobile/touch devices
        if (window.matchMedia("(max-width: 768px)").matches) return;
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const onMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            setVisible(true);
            const t = e.target;
            setHover(!!t.closest("a, button, input, textarea, select, [data-hover]"));
        };
        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        document.addEventListener("mousemove", onMove);
        document.documentElement.addEventListener("mouseleave", onLeave);
        document.documentElement.addEventListener("mouseenter", onEnter);
        return () => {
            document.removeEventListener("mousemove", onMove);
            document.documentElement.removeEventListener("mouseleave", onLeave);
            document.documentElement.removeEventListener("mouseenter", onEnter);
        };
    }, []);

    // Don't render on mobile
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) return null;

    return (
        <>
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-gold-400 rounded-full pointer-events-none z-[9999]"
                animate={{ x: pos.x - 4, y: pos.y - 4, opacity: visible ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.4 }}
            />
            {/* Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
                style={{ borderColor: hover ? "rgba(212,168,83,0.7)" : "rgba(212,168,83,0.3)" }}
                animate={{
                    x: pos.x - (hover ? 22 : 15),
                    y: pos.y - (hover ? 22 : 15),
                    width: hover ? 44 : 30,
                    height: hover ? 44 : 30,
                    opacity: visible ? (hover ? 0.7 : 0.4) : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
            />
        </>
    );
}