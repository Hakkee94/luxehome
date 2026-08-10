import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анна М.",
    city: "Москва",
    text: "Заказывала диван и кресло. Качество превзошло ожидания — ткань приятная, каркас прочный. Доставили за 4 дня, всё аккуратно упаковано.",
    rating: 5,
    product: "Диван Velvet",
  },
  {
    id: 2,
    name: "Дмитрий К.",
    city: "Санкт-Петербург",
    text: "Кухню делали на заказ. Дизайнер помог с планировкой, учли все пожелания. Результат — просто космос. Рекомендую всем знакомым.",
    rating: 5,
    product: "Кухня Moderno",
  },
  {
    id: 3,
    name: "Елена В.",
    city: "Казань",
    text: "Третий раз заказываю мебель здесь. Стабильное качество, адекватные цены для такого уровня. Стеллаж Forma — моя любовь.",
    rating: 5,
    product: "Стеллаж Forma",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
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
          Отзывы
        </p>
        <h2
          className="leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}
        >
          Нам доверяют
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {reviews.map((review, i) => (
          <motion.article
            key={review.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group premium-card premium-surface-card rounded-2xl p-7 ring-1 ring-white/[0.04] md:p-8"
          >
            <div className="mb-5 flex gap-1">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-[#E7D3A8] text-[#E7D3A8]" aria-hidden />
              ))}
            </div>

            <p
              className="mb-6 text-pretty text-white/60"
              style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}
            >
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="premium-card__title font-semibold text-white" style={{ fontSize: "0.875rem", lineHeight: 1.4 }}>
                  {review.name}
                </p>
                <p className="text-white/38" style={{ fontSize: "0.75rem", lineHeight: 1.45 }}>
                  {review.city}
                </p>
              </div>
              <span className="text-[#E7D3A8]/50" style={{ fontSize: "0.75rem" }}>
                {review.product}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
