"use client";

import { useState } from "react";
import Image from "next/image";

const formats = [
  { title: "Маленький подарунок", detail: "Три горішки у святковому пакуванні — знак уваги для близьких.", image: "/images/gift-three.jpg", alt: "Три горішки у прозорому подарунковому пакеті зі стрічкою" },
  { title: "Коробка горішків", detail: "Більший формат у коробці. Доступну вагу й ціну уточнимо під час замовлення.", image: "/images/gift-box.jpg", alt: "Велика подарункова коробка з квітковим папером і червоною ниткою" },
];

export function PackagingCarousel() {
  const [current, setCurrent] = useState(0);
  const item = formats[current];
  return (
    <div className="packaging-carousel" aria-roledescription="карусель" aria-label="Формати пакування">
      <div className="package-photo">
        <Image key={item.image} src={item.image} alt={item.alt} fill sizes="(max-width: 780px) 92vw, 45vw" />
      </div>
      <div className="package-details" aria-live="polite">
        <span className="eyebrow">0{current + 1} / 0{formats.length}</span>
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
        <div className="carousel-controls">
          <button type="button" aria-label="Попередній формат" onClick={() => setCurrent((current + formats.length - 1) % formats.length)}>←</button>
          <button type="button" aria-label="Наступний формат" onClick={() => setCurrent((current + 1) % formats.length)}>→</button>
        </div>
      </div>
    </div>
  );
}
