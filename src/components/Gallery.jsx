import { motion } from "framer-motion";

const galleryItems = [
    {
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
        title: "Авторская подача",
        span: "sm:row-span-2",
    },
    {
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        title: "Стейк Рибай",
        span: "",
    },
    {
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
        title: "Интерьер зала",
        span: "",
    },
    {
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
        title: "Десерты",
        span: "sm:row-span-2",
    },
    {
        img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
        title: "Свежие ингредиенты",
        span: "",
    },
    {
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
        title: "Завтраки",
        span: "sm:col-span-2",
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="relative py-28 sm:py-36 overflow-hidden">
            {/* Divider gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

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
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em]">Галерея</span>
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-14 tracking-tight"
                >
                    Искусство на <span className="text-gold-500">каждой тарелке</span>
                </motion.h2>

                {/* Masonry grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px] sm:auto-rows-[260px]">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className={`relative group overflow-hidden rounded-lg ${item.span}`}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-dark-600/0 group-hover:bg-dark-600/70 transition-all duration-500 flex items-end">
                                <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    <div className="w-8 h-[2px] bg-gold-500 mt-2" />
                                </div>
                            </div>
                            {/* Corner accent */}
                            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-500" />
                            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}