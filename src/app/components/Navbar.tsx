import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const navLinks: { label: string; href: string }[] = [
  { label: "Каталог", href: "#categories" },
  { label: "Интерьеры", href: "#inspiration" },
  { label: "О нас", href: "#advantages" },
  { label: "Доставка", href: "#advantages" },
  { label: "Контакты", href: "#footer" },
];

const navTransition = "transition-all duration-200 ease-out";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(11,12,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="flex h-20 max-w-[100vw] items-center justify-between px-6 md:px-16 lg:px-24">
          <a
            href="#top"
            className={`cursor-pointer text-white ${navTransition} hover:text-white/90 hover:opacity-95 active:scale-[0.98]`}
            style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            <span className="text-[#E7D3A8]">LUXE</span>HOME
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`cursor-pointer text-white/50 underline-offset-[6px] ${navTransition} hover:text-[#E7D3A8] hover:underline hover:decoration-[#E7D3A8]/40 active:opacity-80`}
                style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.02em" }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className={`cursor-pointer rounded-lg p-1.5 text-white/50 ${navTransition} hover:scale-[1.03] hover:text-white hover:brightness-110 active:scale-95`}
              aria-label="Поиск"
            >
              <Search size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className={`relative cursor-pointer rounded-lg p-1.5 text-white/50 ${navTransition} hover:scale-[1.03] hover:text-white hover:brightness-110 active:scale-95`}
              aria-label="Корзина"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span
                className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#E7D3A8] text-[#0B0C0F] shadow-sm"
                style={{ fontSize: "0.5625rem", fontWeight: 700 }}
              >
                2
              </span>
            </a>
            <button
              type="button"
              className={`cursor-pointer rounded-lg p-1.5 text-white/50 md:hidden ${navTransition} hover:text-white active:scale-95`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0B0C0F]/95 backdrop-blur-xl md:hidden"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`cursor-pointer text-white/75 underline-offset-8 ${navTransition} hover:text-[#E7D3A8] hover:underline hover:decoration-[#E7D3A8]/50 active:opacity-80`}
              style={{ fontSize: "1.5rem", fontWeight: 500 }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
