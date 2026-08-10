import { motion } from "motion/react";
import { Truck, Gem, Palette, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: Truck,
    title: "Доставка по России",
    desc: "3–7 дней, бережная упаковка и отслеживание заказа.",
  },
  {
    icon: Gem,
    title: "Материалы премиум-класса",
    desc: "Массив, кожа и ткани от проверенных поставщиков.",
  },
  {
    icon: Palette,
    title: "Дизайн, который не устаревает",
    desc: "Коллекции в духе современной классики и минимализма.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 5 лет",
    desc: "Каркас, фурнитура и обивка под официальной защитой бренда.",
  },
];

export function WhyUs() {
  return (
    <section
      id="advantages"
      className="scroll-mt-24 px-6 py-16 md:px-16 md:py-20 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center md:mb-10"
      >
        <p
          className="mb-3 text-[#E7D3A8]/70"
          style={{ fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase" }}
        >
          Преимущества
        </p>
        <h2
          className="leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}
        >
          Почему выбирают нас
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {advantages.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group premium-card premium-surface-card relative overflow-hidden rounded-2xl p-7 md:p-8"
              style={{
                backdropFilter: "blur(24px)",
              }}
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(520px at 50% 0%, rgba(231,211,168,0.14) 0%, transparent 68%)",
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08)",
                }}
              />
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-xl border border-[#E7D3A8]/20 bg-[#E7D3A8]/12 p-3.5 shadow-[0_0_32px_rgba(231,211,168,0.12)] transition-transform duration-200 group-hover:scale-105">
                  <Icon size={28} className="text-[#E7D3A8]" strokeWidth={1.5} />
                </div>
                <h3
                  className="premium-card__title mb-2.5 font-bold text-white"
                  style={{ fontSize: "1.0625rem", lineHeight: 1.3, letterSpacing: "-0.02em" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/42">{item.desc}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
