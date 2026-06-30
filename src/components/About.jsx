import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// Animated counter hook
function useCounter(end, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return [count, ref];
}

const stats = [
    { value: 15, suffix: "+", label: "Лет опыта" },
    { value: 50000, suffix: "+", label: "Довольных гостей" },
    { value: 200, suffix: "+", label: "Блюд в меню" },
    { value: 12, suffix: "", label: "Премиальных наград" },
];

function StatCard({ value, suffix, label }) {
    const [count, ref] = useCounter(value);
    return (
        <div ref={ref} className="text-center group">
            <div className="text-4xl sm:text-5xl font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                {count.toLocaleString("ru-RU")}
                <span className="text-gold-400">{suffix}</span>
            </div>
            <div className="text-white/65 text-sm uppercase tracking-wider font-medium">{label}</div>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 mb-6"
                >
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em]">О ресторане</span>
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-6 tracking-tight"
                >
                    Традиции и <span className="text-gold-500">совершенство</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-white/45 text-center max-w-3xl mx-auto leading-relaxed mb-20 text-base sm:text-lg font-light"
                >
                    С 2009 года мы создаём гастрономические шедевры, объединяя классические французские
                    техники с лучшими ингредиентами от местных фермеров и поставщиков со всего мира.
                    Наш шеф-повар Артём Волков и его команда превращают каждый приём пищи в путешествие
                    через вкусы и эмоции.
                </motion.p>

                {/* Stats grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
                >
                    {stats.map((s) => (
                        <StatCard key={s.label} {...s} />
                    ))}
                </motion.div>

                {/* Decorative line */}
                <div className="mt-20 flex justify-center">
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
                </div>
            </div>
        </section>
    );
}