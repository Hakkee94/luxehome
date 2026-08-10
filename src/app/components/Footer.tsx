import { Instagram, Send } from "lucide-react";

const links = {
  Каталог: ["Диваны", "Кровати", "Шкафы", "Кухни", "Столы"],
  Компания: ["О нас", "Доставка", "Гарантия", "Контакты"],
  Помощь: ["FAQ", "Возврат", "Оплата", "Размеры"],
};

const linkClass =
  "cursor-pointer text-white/38 underline-offset-4 transition-all duration-200 ease-out hover:text-[#E7D3A8] hover:underline hover:decoration-[#E7D3A8]/35 focus-visible:outline-none focus-visible:text-[#E7D3A8]";

export function Footer() {
  return (
    <footer
      id="footer"
      className="scroll-mt-24 border-t border-white/[0.06] px-6 pb-8 pt-14 md:px-16 md:pt-16 lg:px-24"
    >
      <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-white" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            <span className="text-[#E7D3A8]">LUXE</span>HOME
          </h3>
          <p className="mb-6 max-w-sm text-white/40" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
            Премиальная мебель для современных интерьеров. Создаём пространства, в которых хочется жить.
          </p>
          <div className="flex gap-3">
            {[Instagram, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all duration-200 hover:scale-105 hover:border-[#E7D3A8]/25 hover:text-[#E7D3A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D3A8]/40 active:scale-95"
                aria-label={i === 0 ? "Instagram" : "Telegram"}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4
              className="mb-4 text-white/70"
              style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              {title}
            </h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className={linkClass} style={{ fontSize: "0.875rem" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
        <p className="text-white/20" style={{ fontSize: "0.75rem" }}>
          © 2026 LUXEHOME. Все права защищены.
        </p>
        <p className="text-center text-white/20 md:text-right" style={{ fontSize: "0.75rem" }}>
          8 (800) 123-45-67 · info@luxehome.ru
        </p>
      </div>
    </footer>
  );
}
