import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Цієї сторінки ще немає.</h1>
      <p>Повернімося туди, де на вас чекають горішки.</p>
      <Link className="button button--primary" href="/">
        На головну <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
