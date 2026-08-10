import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const images = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1080&q=85&ixlib=rb-4.1.0",
];

export function Inspiration() {
  return (
    <section
      id="inspiration"
      className="scroll-mt-24 px-6 py-16 md:px-16 md:py-20 lg:px-24"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/[0.06] md:rounded-3xl">
        <div className="relative min-h-[min(70vh,560px)] overflow-hidden md:h-[600px] md:min-h-0">
          <ImageWithFallback
            src={images[0]}
            alt="Интерьер LUXEHOME"
            className="h-full min-h-[560px] w-full object-cover object-center md:min-h-0"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F]/95 via-[#0B0C0F]/65 to-[#0B0C0F]/35"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/85 via-transparent to-[#0B0C0F]/25"
            aria-hidden
          />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#E7D3A8]/8 blur-[110px]" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-6 py-12 md:px-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-[#E7D3A8]/80"
                style={{ fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase" }}
              >
                Вдохновение
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-5 text-white"
                style={{
                  fontSize: "clamp(1.85rem, 4vw, 3.15rem)",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                }}
              >
                Создайте пространство,
                <br />
                <span className="text-[#E7D3A8]">в которое хочется возвращаться</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-9 max-w-md text-white/60"
                style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
              >
                Подборка интерьеров и готовых композиций — от спокойного минимализма до тёплого modern
                luxury. Найдите свой ритм и соберите дом слой за слоем.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="#categories"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#E7D3A8] px-8 py-4 text-[#0B0C0F] shadow-[0_8px_32px_rgba(231,211,168,0.25)] transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-[#efe4d0] hover:shadow-[0_12px_40px_rgba(231,211,168,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D3A8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C0F] active:scale-[0.98]"
                  style={{ fontSize: "0.9375rem", fontWeight: 600 }}
                >
                  Смотреть идеи →
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-10 right-10 hidden h-80 w-64 overflow-hidden rounded-2xl border border-white/12 shadow-2xl ring-1 ring-white/[0.06] lg:block"
          >
            <ImageWithFallback src={images[1]} alt="" className="h-full w-full object-cover object-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
