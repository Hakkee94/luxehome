import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/** One catalog look: soft daylight, warm neutrals, same crop + quality */
const categories = [
  {
    title: "Диваны",
    subtitle: "от 89 000 ₽",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
  {
    title: "Кровати",
    subtitle: "от 65 000 ₽",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
  {
    title: "Шкафы",
    subtitle: "от 45 000 ₽",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
  {
    title: "Кухни",
    subtitle: "от 120 000 ₽",
    image:
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
  {
    title: "Столы",
    subtitle: "от 32 000 ₽",
    image:
      "https://images.unsplash.com/photo-1461218779480-bb61b6be1924?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
  {
    title: "Кресла",
    subtitle: "от 28 000 ₽",
    image:
      "https://images.unsplash.com/photo-1758915753395-a5dddea1d813?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="scroll-mt-24 px-6 py-16 md:px-16 md:py-20 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-10"
      >
        <p
          className="mb-3 text-[#E7D3A8]/70"
          style={{ fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase" }}
        >
          Каталог
        </p>
        <h2
          className="leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}
        >
          Категории
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
        {categories.map((item, index) => (
          <motion.a
            key={item.title}
            href="#"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group premium-card relative block aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl shadow-[0_10px_34px_rgba(0,0,0,0.32)] ring-1 ring-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D3A8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C0F] active:scale-[0.995]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="premium-card__image h-full w-full object-cover object-center"
              />
            </div>
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B0C0F]/92 via-[#0B0C0F]/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div
              className="premium-card__overlay absolute inset-0 rounded-2xl bg-black/0"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
              <p
                className="mb-1 text-[#E7D3A8]/72 transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                {item.subtitle}
              </p>
              <h3
                className="premium-card__title font-semibold text-white transition-transform duration-200 group-hover:-translate-y-1"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 600, lineHeight: 1.2 }}
              >
                {item.title}
              </h3>
              <span
                className="mt-3 block max-h-0 overflow-hidden text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-8 group-hover:opacity-100"
                style={{ fontSize: "0.875rem", lineHeight: 1.45 }}
              >
                Перейти в каталог →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
