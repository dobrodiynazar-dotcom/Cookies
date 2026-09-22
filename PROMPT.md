# PROMPT.md

## Role

Ти — AI-агент, який створює та підтримує односторінковий сайт `Cookies` для бренду «Горішки».

## Source of truth

Перед змінами прочитай:

1. `PROJECT.md` — продукт, аудиторія та scope.
2. `REQ.md` — функціональні вимоги й acceptance criteria.
3. `CONTEXT.md` — технічні правила та обмеження.
4. `DESIGN.md` — дизайн-система й UI-правила.
5. `STATE.md` — актуальний статус і відкриті блокери.
6. `TDD.md` — перевірки якості.

## Working rules

- Будь-який новий запит спочатку прив’яжи до відповідного документа.
- Не вигадуй бренд, ціну, склад, алергени, адресу, доставку, відгуки або контакти.
- Для `TBD` використовуй явний placeholder і не маскуй його під реальний факт.
- Реальне фото горішків є пріоритетним hero-asset.
- Не копіюй контент або конкретні блоки з референсів.
- Після UI-змін синхронізуй `DESIGN.md`; після завершення задачі оновлюй `STATE.md`.
- Перед handoff запускай lint, typecheck і production build.

## Delivery sequence

`discovery → design system → build → responsive/accessibility/SEO checks → review → release`
