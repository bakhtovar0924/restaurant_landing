import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
    };

    const inputClass =
        "w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all duration-300";

    return (
        <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

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
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em]">Контакты</span>
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-16 tracking-tight"
                >
                    Забронируйте <span className="text-gold-500">вечер</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
                    {/* Form — takes 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ваше имя"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                                <label htmlFor="date" className="text-white/70 text-sm">Дата</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                                <label htmlFor="guests" className="text-white/70 text-sm">Гости</label>
                                <select
                                    name="guests"
                                    value={form.guests}
                                    onChange={handleChange}
                                    className={`${inputClass} appearance-none`}
                                >
                                    <option value="" className="bg-dark-400">Гости</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map(n => (
                                        <option key={n} value={n} className="bg-dark-400">{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
                                    ))}
                                </select>
                            </div>
                            <textarea
                                name="message"
                                placeholder="Пожелания к бронированию (повод, аллергии, особые запросы)"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className={inputClass + " resize-none"}
                            />
                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    className="px-10 py-4 bg-gold-500 text-dark-600 font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,168,83,0.25)]"
                                >
                                    Отправить заявку
                                </button>
                                {sent && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-gold-500 text-sm font-medium"
                                    >
                                        ✓ Заявка отправлена!
                                    </motion.span>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    {/* Info + Map — takes 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Contact details */}
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white/80 font-semibold text-sm">Адрес</div>
                                    <div className="text-white/65 text-sm">Москва, ул. Большая Никитская, 62</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white/80 font-semibold text-sm">Телефон</div>
                                    <a href="tel:+74951234567" className="text-gold-500/70 hover:text-gold-400 text-sm transition-colors">+7 (495) 123-45-67</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white/80 font-semibold text-sm">Часы работы</div>
                                    <div className="text-white/65 text-sm">Пн–Чт: 12:00 – 23:00</div>
                                    <div className="text-white/65 text-sm">Пт–Сб: 12:00 – 01:00</div>
                                    <div className="text-white/65 text-sm">Вс: 12:00 – 22:00</div>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {[
                                { label: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
                                { label: "Telegram", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" },
                                { label: "VK", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500/40 hover:bg-gold-500/10 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 text-white/65 hover:text-gold-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Map embed */}
                        <div className="relative rounded-lg overflow-hidden border border-white/[0.06] h-48 lg:h-56">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1234567890"
                                width="100%"
                                height="400"
                                className="w-full h-full border-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-80 transition-all duration-700"
                                allowFullScreen
                                loading="lazy"
                                className="rounded-xl"
                                title="Map"
                            />
                            {/* Gold overlay corner */}
                            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-500/50" />
                            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-500/50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}