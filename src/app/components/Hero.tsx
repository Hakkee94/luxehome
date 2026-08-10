import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImg =
  "/hero-premium.jpg";

const btnBase =
  "inline-flex cursor-pointer items-center justify-center rounded-xl text-center transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D3A8]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C0F] active:scale-[0.98]";

export function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden scroll-mt-0">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImg}
          alt="Интерьер гостиной"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/95 via-[#0B0C0F]/66 to-[#0B0C0F]/34" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[120px]" />
      </div>

      <div className="relative z-10 flex h-full items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 tracking-[0.3em] text-[#E7D3A8]/85"
            style={{ fontSize: "0.75rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.28em" }}
          >
            Premium Collection 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-white"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Мебель, в которую
            <br />
            <span className="text-[#E7D3A8]">хочется возвращаться</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10 max-w-lg text-white/65"
            style={{ fontSize: "1.125rem", lineHeight: 1.75 }}
          >
            Современные решения для дома — спокойная эстетика, продуманная эргономика и материалы, которым
            доверяют.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#categories"
              className={`${btnBase} bg-[#E7D3A8] px-8 py-4 text-[#0B0C0F] shadow-[0_8px_32px_rgba(231,211,168,0.2)] hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(231,211,168,0.35)]`}
              style={{ fontSize: "0.9375rem", fontWeight: 600 }}
            >
              Смотреть каталог
            </a>
            <a
              href="#inspiration"
              className={`${btnBase} border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-sm hover:scale-[1.03] hover:border-white/35 hover:bg-white/12 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]`}
              style={{ fontSize: "0.9375rem", fontWeight: 500 }}
            >
              Подобрать интерьер
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#categories"
          className="flex cursor-pointer flex-col items-center gap-2 rounded-sm text-white/45 transition-all duration-200 ease-out hover:text-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D3A8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label="Перейти к каталогу"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[0.6875rem] tracking-[0.15em]">SCROLL</span>
            <div className="h-10 w-px bg-gradient-to-b from-white/45 to-transparent" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
