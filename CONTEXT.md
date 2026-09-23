# CONTEXT.md

## Meta

- Last updated: 2026-09-22
- Owner: TBD
- Status: active

## 1. System overview

Статичний або переважно статичний one-page сайт без бази даних і backend у першій версії. Контент має зберігатися окремо від UI-компонентів, щоб пізніше можна було підключити Git-based CMS або адмін-панель.

## 2. Proposed tech stack

- Frontend: Next.js 16 + TypeScript, App Router.
- Styling: локальна token-based CSS layer у `src/styles/tokens.css`.
- Content: typed TypeScript data або JSON; без непідтверджених значень.
- Hosting: Vercel через GitHub.
- Backend/database: відсутні у v1.
- CI/CD: build checks у GitHub/Vercel; конкретна конфігурація `TBD`.

## 3. Repository map

- `/`: documentation and project metadata.
- `/src`: page, sections, components and content adapters — planned.
- `/public`: favicon, social preview and approved assets — planned.
- `/src/content` or `/content`: typed editable content — choose one during implementation.
- `/src/styles`: design tokens and global styles — planned.
- `/tests`: only lightweight checks if needed; no full test suite in v1.

## 4. Global rules

- Писати українською весь видимий контент.
- Не вигадувати фактів про бізнес.
- Не переносити логотипи, тексти, кольори або конкретні блоки з референсів.
- Зберігати великий реальний hero-asset окремо від декоративних placeholder-ів.
- Дизайн має залишатися світлим, м’яким і editorial; не повертати темну Verge-палітру зі starter-документа.
- Уникати важких залежностей, зайвого JavaScript і компонентів, які не потрібні односторінковому сайту.

## 5. Domain model

Основні сутності:

- `Brand`: workingName, finalName, tagline, description.
- `Product`: name, description, ingredients, allergens, weight, price, leadTime, packaging.
- `Contact`: orderUrl, instagramUrl, telegramUrl, whatsappUrl, phone.
- `Review`: quote, author, approved.
- `Asset`: src, alt, role, approved.

Усі поля, яких ще немає, мають бути nullable або мати явний `TBD`-стан і не рендеритися як вигаданий факт.

## 6. Security and privacy

- У v1 не збирати персональні дані через власну форму.
- Не додавати секрети в репозиторій.
- Зовнішні посилання перевірити перед release.
- Політику конфіденційності додати після отримання юридичних даних.

## 7. Performance constraints

- Mobile-first.
- Hero image оптимізувати без помітної втрати якості.
- Below-the-fold images — lazy loading.
- Не використовувати autoplay video або важкі фонові ефекти.
- Перевірити Core Web Vitals перед release, якщо буде доступний production preview.

## 8. Decisions

1. Decision: one-page static-first architecture.
   - Context: один продукт, одна головна дія, немає потреби у checkout.
   - Choice: компоненти + структурований контент без backend.
   - Consequence: швидкий v1; CMS і форма залишаються майбутніми розширеннями.

2. Decision: Next.js/TypeScript implementation.
   - Context: потрібні SEO, Vercel і швидке завантаження.
   - Choice: використовується Next.js 16, TypeScript і App Router.
   - Consequence: Vercel-сумісний статичний сайт із metadata, sitemap, robots і 404.
