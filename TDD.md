# TDD.md

## Meta

- Last updated: 2026-09-22
- Owner: TBD
- Status: active

## 1. Strategy

Для першої версії достатньо lightweight quality gates: lint, typecheck, production build, responsive review, accessibility smoke check і ручна перевірка CTA/anchors.

Повна unit/integration/E2E система не входить до v1, але структура компонентів і контенту має дозволяти її додати.

## 2. Required checks

- `lint` проходить.
- `typecheck` проходить.
- Production build проходить.
- Немає горизонтального scroll на 360/390/768/1024/1440 px.
- Hero image завантажується з правильним crop і alt.
- Sticky-header не перекриває anchor targets.
- Усі CTA та соціальні посилання мають правильний URL або явний `TBD` placeholder.
- Видимий keyboard focus присутній.
- `prefers-reduced-motion` вимикає необов’язкові рухи.
- Metadata, Open Graph, favicon, sitemap, robots.txt і 404 присутні.

## 3. Manual scenarios

1. Відкрити сторінку на 360 px і пройти всі секції пальцем.
2. Відкрити сторінку на 1440 px і перевірити editorial-композицію.
3. Натиснути кожен пункт anchor navigation.
4. Натиснути CTA до налаштованого каналу замовлення.
5. Перейти сторінкою лише клавіатурою.
6. Увімкнути reduced motion і перевірити, що контент залишається доступним.
