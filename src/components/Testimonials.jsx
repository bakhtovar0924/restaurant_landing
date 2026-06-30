import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        name: "Анна Петрова",
        role: "Фуд-блогер",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "AURORE — это не просто ресторан, это целый мир. Стейк Рибай приготовлен безупречно, а подача каждого блюда — настоящий перформанс. Возвращаюсь сюда уже третий раз, и каждый раз открываю для себя что-то новое.",
        rating: 5,
        date: "Декабрь 2024",
    },
    {
        name: "Дмитрий Козлов",
        role: "Предприниматель",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Провёл здесь деловый ужин с партнёрами — впечатлило всех. Безупречный сервис, потрясающая винная карта и атмосфера, которая располагает к серьёзным разговорам. Шоколадный фондан — отдельный шедевр.",
        rating: 5,
        date: "Январь 2025",
    },
    {
        name: "Мария Иванова",
        role: "Дизайнер",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Праздновали здесь годовщину свадьбы. Меню дегустации на 7 курсов — это что-то невероятное. Каждое блюдо — как маленькая история. Отдельное спасибо сомелье за подбор вин.",
        rating: 5,
        date: "Февраль 2025",
    },
    {
        name: "Алексей Смирнов",
        role: "Журналист",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        text: "Объездил десятки ресторанов Москвы, но AURORE выделяется даже на этом фоне. Авторские коктейли — лучшие, что я пробовал. Интерьер продуман до мелочей, каждая деталь на своём месте.",
        rating: 5,
        date: "Март 2025",
    },
];

function Stars({ count }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < count ? "text-gold-500" : "text-white/15"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const len = reviews.length;

    const next = useCallback(() => setCurrent((p) => (p + 1) % len), [len]);
    const prev = useCallback(() => setCurrent((p) => (p - 1 + len) % len), [len]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [next]);

    const r = reviews[current];

    return (
        <section id="testimonials" className="relative py-28 sm:py-36 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 mb-6"
                >
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em]">Отзывы</span>
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-16 tracking-tight"
                >
                    Что говорят <span className="text-gold-500">гости</span>
                </motion.h2>

                {/* Carousel */}
                <div className="relative">
                    {/* Quote mark */}
                    <div className="absolute z-10 -top-6 left-0 sm:left-8 text-8xl text-gold-500/10 font-serif leading-none select-none pointer-events-none">
                        &ldquo;
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 sm:p-12 backdrop-blur-sm"
                        >
                            <Stars count={r.rating} />
                            <p className="text-white/70 text-base sm:text-lg leading-relaxed mt-6 mb-8 font-light italic">
                                &laquo;{r.text}&raquo;
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={r.avatar}
                                    alt={r.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/30"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="font-bold text-white/90">{r.name}</div>
                                    <div className="text-white/60 text-sm">{r.role} · {r.date}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation arrows */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-300"
                            aria-label="Previous"
                        >
                            <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {reviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-3 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#c59028]" : "w-2 bg-white/15 hover:bg-white/30"
                                        }`}
                                    aria-label={`Go to review ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-300"
                            aria-label="Next"
                        >
                            <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}