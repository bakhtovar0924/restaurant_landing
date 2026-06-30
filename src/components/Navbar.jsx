import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { name: "О нас", href: "#about" },
    { name: "Меню", href: "#menu" },
    { name: "Галерея", href: "#gallery" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Контакты", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-dark-600/85 backdrop-blur-2xl border-b border-gold-500/10 shadow-2xl shadow-black/40"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-baseline gap-2.5 group">
                        <span className="text-2xl sm:text-[1.7rem] font-black tracking-tight text-gold-500 group-hover:text-gold-300 transition-colors">
                            AURORE
                        </span>
                        <span className="hidden sm:block text-[0.6rem] text-gold-500/50 uppercase tracking-[0.35em] font-medium">
                            Restaurant
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {links.map((l) => (
                            <a
                                key={l.name}
                                href={l.href}
                                className="relative text-[0.82rem] text-white/55 font-medium uppercase tracking-wider hover:text-gold-500 transition-colors duration-300 group"
                            >
                                {l.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA desktop */}
                    <a
                        href="#contact"
                        className="hidden lg:inline-flex px-7 py-2.5 bg-gold-500 text-dark-600 text-sm font-bold rounded-sm hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,168,83,0.25)] uppercase tracking-wider"
                    >
                        Забронировать
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden flex flex-col gap-[5px] p-2 group"
                        aria-label="Menu"
                    >
                        <span
                            className={`w-6 h-[1.5px] bg-gold-500 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-[1.5px] bg-gold-500 transition-all duration-300 ${open ? "opacity-0 scale-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-[1.5px] bg-gold-500 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden bg-dark-500/95 backdrop-blur-2xl border-t border-gold-500/10 overflow-hidden"
                    >
                        <div className="px-7 py-8 flex flex-col gap-5">
                            {links.map((l, i) => (
                                <motion.a
                                    key={l.name}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="text-lg text-white/70 hover:text-gold-500 transition-colors font-medium"
                                >
                                    {l.name}
                                </motion.a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="mt-3 px-7 py-3.5 bg-gold-500 text-dark-600 text-sm font-bold text-center rounded-sm uppercase tracking-wider"
                            >
                                Забронировать
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}