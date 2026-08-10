import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type ProductTag = "Новинка" | "Хит" | "Скидка";

/** Unified pill: same padding & type for every badge */
const BADGE_BASE =
  "pointer-events-none absolute left-3 top-3 z-20 inline-flex max-w-[calc(100%-1.5rem)] items-center justify-center rounded-[999px] border px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] shadow-[0_8px_24px_rgba(0,0,0,0.32)] backdrop-blur-md";

const badgeClassByTag: Record<ProductTag, string> = {
  Новинка:
    "border-indigo-300/40 bg-indigo-600/95 text-white shadow-indigo-950/55 ring-1 ring-indigo-400/30",
  Хит: "border-amber-300/45 bg-amber-500/95 text-stone-950 shadow-amber-950/40 ring-1 ring-amber-200/35",
  Скидка: "border-red-300/40 bg-red-600/95 text-white shadow-red-950/50 ring-1 ring-red-400/30",
};

function productBadgeClass(tag: string): string {
  if (tag in badgeClassByTag) {
    return `${BADGE_BASE} ${badgeClassByTag[tag as ProductTag]}`;
  }
  return `${BADGE_BASE} border-white/15 bg-[#0B0C0F]/90 text-[#E7D3A8] shadow-black/50 ring-1 ring-white/10`;
}

/** Neutral catalog: soft daylight, beige/gray/wood, same crop params */
const products: {
  id: number;
  name: string;
  price: string;
  tag: ProductTag | null;
  image: string;
}[] = [
  {
    id: 1,
    name: "Кресло Aura",
    price: "47 900 ₽",
    tag: "Новинка",
    image:
      "https://images.unsplash.com/photo-1759262151001-3f8841d02ce1?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    name: "Стеллаж Forma",
    price: "38 500 ₽",
    tag: "Хит",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
  {
    id: 3,
    name: "Столик Lux",
    price: "29 900 ₽",
    tag: "Скидка",
    image:
      "/table-lux.jpg",
  },
  {
    id: 4,
    name: "Торшер Glow",
    price: "18 700 ₽",
    tag: "Новинка",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="featured"
      className="scroll-mt-24 px-6 py-16 md:px-16 md:py-20 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-end justify-between md:mb-10"
      >
        <div>
          <p
            className="mb-3 text-[#E7D3A8]/70"
            style={{ fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase" }}
          >
            Бестселлеры
          </p>
          <h2
            className="leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}
          >
            Популярные товары
          </h2>
        </div>
        <a
          href="#categories"
          className="hidden cursor-pointer text-white/50 underline-offset-4 transition-all duration-200 ease-out hover:text-[#E7D3A8] hover:underline md:inline md:text-[0.875rem]"
        >
          Все товары →
        </a>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {products.map((product, i) => (
          <motion.a
            key={product.id}
            href="#"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group premium-card block cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D3A8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C0F] active:scale-[0.995]"
            aria-label={`${product.name}, ${product.price}`}
          >
            <div
              className="relative mb-5 aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.06] transition-[box-shadow,transform] duration-200 ease-out group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
              style={{
                background: "linear-gradient(135deg, #1a1b22 0%, #0e0f14 100%)",
              }}
            >
              <ImageWithFallback
                src={product.image}
                alt=""
                className="premium-card__image relative z-0 h-full w-full object-cover object-center"
              />
              <div className="premium-card__overlay pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-black/0" aria-hidden />
              {product.tag && (
                <div
                  className="pointer-events-none absolute left-0 top-0 z-10 h-36 w-[88%] max-w-md rounded-2xl bg-gradient-to-br from-black/50 via-black/18 to-transparent"
                  aria-hidden
                />
              )}
              <div
                className="pointer-events-none absolute inset-0 z-[11] rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-shadow duration-200 group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                aria-hidden
              />

              {product.tag && <span className={productBadgeClass(product.tag)}>{product.tag}</span>}

              <div
                className="absolute bottom-4 right-4 z-30 flex translate-y-2 items-center gap-2 rounded-xl border border-white/12 bg-white/12 px-4 py-2.5 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                style={{ fontSize: "0.8125rem", fontWeight: 500 }}
              >
                <ShoppingBag size={16} aria-hidden />
                В корзину
              </div>
            </div>

            <div className="space-y-2 px-1.5 pt-1">
              <h4
                className="premium-card__title text-white"
                style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.01em" }}
              >
                {product.name}
              </h4>
              <p className="text-[#E7D3A8]/95" style={{ fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.4 }}>
                {product.price}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <a
          href="#categories"
          className="inline-flex cursor-pointer text-[0.875rem] text-white/50 underline-offset-4 transition-all duration-200 ease-out hover:text-[#E7D3A8] hover:underline"
        >
          Все товары →
        </a>
      </div>
    </section>
  );
}
