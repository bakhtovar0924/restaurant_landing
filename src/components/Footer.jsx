const footerLinks = {
    Навигация: [
        { name: "О нас", href: "#about" },
        { name: "Меню", href: "#menu" },
        { name: "Галерея", href: "#gallery" },
        { name: "Отзывы", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Контакты", href: "#contact" },
    ],
    Меню: [
        { name: "Закуски", href: "#menu" },
        { name: "Горячие блюда", href: "#menu" },
        { name: "Десерты", href: "#menu" },
        { name: "Напитки", href: "#menu" },
        { name: "Винная карта", href: "#menu" },
        { name: "Дегустационное меню", href: "#menu" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.06]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="#" className="inline-block mb-5">
                            <span className="text-2xl font-black text-gold-500 tracking-tight">AURORE</span>
                        </a>
                        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
                            Ресторан авторской кухни в самом сердце Москвы. Гастрономические путешествия с 2009 года.
                        </p>
                        <div className="flex gap-3">
                            {["M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z",
                                "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9",
                                "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                            ].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center hover:border-gold-500/40 hover:bg-gold-500/10 transition-all duration-300"
                                >
                                    <svg className="w-3.5 h-3.5 text-white/60 hover:text-gold-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-white/70 font-bold text-sm uppercase tracking-wider mb-5">{title}</h3>
                            <ul className="space-y-3">
                                {links.map((l) => (
                                    <li key={l.name}>
                                        <a href={l.href} className="text-white/60 text-sm hover:text-gold-500 transition-colors duration-300">
                                            {l.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Hours column */}
                    <div>
                        <h4 className="text-white/70 font-bold text-sm uppercase tracking-wider mb-5">Часы работы</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex justify-between">
                                <span>Пн – Чт</span>
                                <span className="text-white/50">12:00 – 23:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Пт – Сб</span>
                                <span className="text-white/50">12:00 – 01:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Воскресенье</span>
                                <span className="text-white/50">12:00 – 22:00</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-5 border-t border-white/[0.06]">
                            <p>
                                <a href="tel:+74951234567" className="text-gold-500/70 hover:text-gold-400 text-sm transition-colors">+7 (495) 123-45-67</a>
                            </p>
                            <p>
                                <a href="mailto:info@aurore-restaurant.ru" className="text-gold-500/70 hover:text-gold-400 text-sm transition-colors">info@aurore-restaurant.ru</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/50 text-xs">
                        © 2025 AURORE Restaurant. Все права защищены.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/50 text-xs hover:text-white/65 transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="text-white/50 text-xs hover:text-white/65 transition-colors">Пользовательское соглашение</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}