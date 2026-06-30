import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "Как забронировать столик?",
        a: "Забронировать столик можно несколькими способами: через форму на нашем сайте, по телефону +7 (495) 123-45-67 или в мессенджерах (Telegram, WhatsApp). Рекомендуем бронировать за 2–3 дня, а для выходных — за неделю. При бронировании от 6 человек требуется предоплата 2000 ₽ за человека.",
    },
    {
        q: "Есть ли дресс-код?",
        a: "Мы приветствуем элегантный casual: для мужчин — рубашка или поло с брюками, для женщин — платье, костюм или блузка со skirt/trousers. Спортивная одежда, шлёпаны и короткие шорты не допускаются. Вечерние пятница и суббота — smart casual.",
    },
    {
        q: "Можно ли заказать банкет или корпоративное мероприятие?",
        a: "Да, у нас есть два VIP-зала на 12 и 24 места, а также возможность эксклюзивной аренды всего ресторана на 80 гостей. Мы предлагаем индивидуальные банкетные меню, подбор вин и координацию мероприятия. Свяжитесь с нашим менеджером для обсуждения деталей.",
    },
    {
        q: "Есть ли вегетарианские и безглютеновые опции?",
        a: "Безусловно. В нашем меню выделены вегетарианские (V) и безглютеновые (GF) позиции. Наш шеф-повар с удовольствием адаптирует любое блюдо под ваши диетические предпочтения — просто сообщите официанту при заказе.",
    },
    {
        q: "Какова политика отмены бронирования?",
        a: "Отмена бесплатная за 4 часа до назначенного времени. При отмене менее чем за 4 часа или неявке списывается депозит. Для групп от 6 человек — за 24 часа. Перенос бронирования возможен без штрафов при наличии свободных мест.",
    },
    {
        q: "Принимаете ли вы оплату картой и есть ли парковка?",
        a: "Мы принимаем все виды оплаты: банковские карты (Visa, Mastercard, Мир), SberPay, Яндекс.Пей, а также наличные. Для гостей предоставляется бесплатная подземная парковка на 20 мест — сообщите номер машины при бронировании.",
    },
];

function FAQItem({ item, isOpen, onToggle }) {
    return (
        <div className="border-b border-white/[0.06]">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className={`text-base sm:text-lg font-semibold pr-4 transition-colors duration-300 ${isOpen ? "text-gold-500" : "text-white/80 group-hover:text-white"}`}>
                    {item.q}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white/10 rounded-full group-hover:border-gold-500/30 transition-colors"
                >
                    <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
                    </svg>
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-white/65 text-sm sm:text-base leading-relaxed pb-6 pr-12">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section id="faq" className="relative py-28 sm:py-36 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 mb-6"
                >
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em]">Вопросы</span>
                    <span className="w-10 h-[1px] bg-gold-500/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-14 tracking-tight"
                >
                    Частые <span className="text-gold-500">вопросы</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {faqs.map((item, i) => (
                        <FAQItem
                            key={i}
                            item={item}
                            isOpen={openIdx === i}
                            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}