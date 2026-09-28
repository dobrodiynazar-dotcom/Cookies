"use client";

import { useEffect, useState } from "react";

const orderUrl = "https://www.instagram.com/milyami._?stkn=NXRobTN5NjFmejZt&utm_source=qr";

const navigation = [
  { href: "#product", label: "Про горішки" },
  { href: "#packaging", label: "Пакування" },
  { href: "#occasions", label: "Приводи" },
  { href: "#story", label: "Про нас" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#order", label: "На зв’язку" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
        aria-controls="site-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <a className="wordmark" href="#top" aria-label="Горішки — на початок">
        Горішки
      </a>

      <nav id="site-menu" className={isOpen ? "site-menu is-open" : "site-menu"} aria-label="Основна навігація">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-order" href={orderUrl} target="_blank" rel="noreferrer">
        Замовити
      </a>
    </header>
  );
}
