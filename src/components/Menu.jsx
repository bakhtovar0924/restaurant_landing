import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Закуски", "Горячие блюда", "Десерты", "Напитки"];

const menuData = {
    Закуски: [
        {
            name: "Тартар из тунца",
            desc: "Свежий тунец с авокадо, юдзу и хрустящими чипсами нори",
            price: 1450,
            img: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80",
            chef: true,
        },
        {
            name: "Карпаччо из говядины",
            desc: "Мраморная говядина с трюфельным маслом, пармезаном и рукколой",
            price: 1280,
            img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80",
            chef: false,
        },
        {
            name: "Брускетта с томатами",
            desc: "Запечённый чиабатта с томатами черри, базиликом и бурратой",
            price: 680,
            img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80",
            chef: false,
        },
        {
            name: "Крем-суп из тыквы",
            desc: "Нежное пюре с тыквенными семечками и трюфельным кремом",
            price: 590,
            img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
            chef: false,
        },
    ],
    "Горячие блюда": [
        {
            name: "Рибай стейк 300г",
            desc: "Зерновой откорм, мраморность USDA Prime, соус из зелёного перца",
            price: 4200,
            img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
            chef: true,
        },
        {
            name: "Сёмга на гриле",
            desc: "Филе сёмги с сезонными овощами гриль и лимонным маслом",
            price: 2350,
            img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
            chef: false,
        },
        {
            name: "Паста с морепродуктами",
            desc: "Лингвини с креветками, мидиями и кальмаром в томатном соусе",
            price: 1680,
            img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
            chef: false,
        },
        {
            name: "Утиная грудка",
            desc: "Конфи с вишнёвым соусом, пюре из сельдерея и микрозеленью",
            price: 2750,
            img: "https://images.unsplash.com/photo-1580554530778-ca36943571b4?w=600&q=80",
            chef: false,
        },
    ],
    Десерты: [
        {
            name: "Шоколадный фондан",
            desc: "Тёплый шоколадный кекс с жидким центром и малиновым сорбетом",
            price: 750,
            img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
            chef: true,
        },
        {
            name: "Крем-брюле",
            desc: "Классический ванильный крем с хрустящей карамельной корочкой",
            price: 580,
            img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&q=80",
            chef: false,
        },
        {
            name: "Тирамису",
            desc: "Итальянский десерт с маскарпоне, эспрессо и какао",
            price: 620,
            img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
            chef: false,
        },
        {
            name: "Чизкейк Нью-Йорк",
            desc: "Нежный сливочный чизкейк с ягодным компоте",
            price: 680,
            img: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&q=80",
            chef: false,
        },
    ],
    Напитки: [
        {
            name: "«Золотой закат»",
            desc: "Бурбон, апельсиновый ликёр, мёд и 24-каратное золотое листье",
            price: 890,
            img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
            chef: true,
        },
        {
            name: "Лимонад с лавандой",
            desc: "Домашний лимонад с лавандой, мятой и цветочным мёдом",
            price: 450,
            img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
            chef: false,
        },
        {
            name: "Двойной эспрессо",
            desc: "Зёрна арабики из Эфиопии, средняя обжарка",
            price: 280,
            img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80",
            chef: false,
        },
        {
            name: "Вино по бокалам",
            desc: "Красное, белое, розовое — от 650 ₽ за бокал",
            price: 650,
            img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
            chef: false,
        },
    ],
};

export default function Menu() {
    const [active, setActive] = useState("Закуски");
    const items = menuData[active];

    return (
        <section id="menu" className="relative py-28 sm:py-36 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 mb-6"
                >
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em]">Наше меню</span>
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-14 tracking-tight"
                >
                    Гастрономическое <span className="text-gold-500">путешествие</span>
                </motion.h2>

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${active === cat
                                ? "bg-gold-500 text-dark-600 shadow-[0_0_25px_rgba(212,168,83,0.2)]"
                                : "bg-white/[0.04] text-white/50 hover:text-white/80 hover:bg-white/[0.08] border border-white/[0.06]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Menu grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    >
                        {items.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-lg overflow-hidden hover:border-gold-500/20 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(212,168,83,0.08)]"
                            >
                                {/* Chef badge */}
                                {item.chef && (
                                    <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-gold-500 text-dark-600 text-[0.6rem] font-bold uppercase tracking-wider rounded-sm">
                                        Шеф рекомендует
                                    </div>
                                )}

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-600 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="text-base font-bold text-white/90 group-hover:text-gold-400 transition-colors duration-300 leading-snug">
                                            {item.name}
                                        </h3>
                                        <span className="text-gold-500 font-bold text-sm whitespace-nowrap">
                                            {item.price.toLocaleString("ru-RU")} ₽
                                        </span>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-14"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-gold-500/70 hover:text-gold-400 text-sm font-medium transition-colors group"
                    >
                        Полное меню в PDF
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}