import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image with parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 bg-fixed scale-105"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
                }}
            />

            {/* Dark overlay + gold gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-600/80 via-dark-600/70 to-dark-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-600/60 via-transparent to-dark-600/60" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-600 to-transparent" />

            {/* Decorative gold lines */}
            <div className="absolute top-1/4 left-10 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />
            <div className="absolute bottom-1/4 right-10 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
                {/* Small label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="inline-flex items-center gap-3 mb-8"
                >
                    <span className="w-8 h-[1px] bg-gold-500/60" />
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em]">
                        Авторская кухня
                    </span>
                    <span className="w-8 h-[1px] bg-gold-500/60" />
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-7"
                >
                    <span className="text-white">Вкус, который</span>
                    <br />
                    <span className="gold-shimmer">расскажет историю</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Ресторан AURORE — это пространство, где каждая тарелка становится произведением
                    искусства, а каждый вечер превращается в незабываемое событие
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="group px-9 py-4 bg-gold-500 text-dark-600 font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,83,0.3)] flex items-center gap-2"
                    >
                        Забронировать стол
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#menu"
                        className="px-9 py-4 border border-white/15 text-white/80 font-bold text-sm uppercase tracking-wider rounded-sm hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300"
                    >
                        Смотреть меню
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[0.65rem] text-white/60 uppercase tracking-[0.2em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-8 bg-gradient-to-b from-gold-500/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}