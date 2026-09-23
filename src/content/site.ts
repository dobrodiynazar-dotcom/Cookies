export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ContactLink = {
  label: string;
  href: string | null;
};

export type SiteContent = {
  brand: {
    name: string;
  };
  navigation: NavigationItem[];
  hero: {
    title: string;
    tagline: string;
    cta: { label: string; href: string | null };
    image: { src: string; alt: string };
  };
  about: { title: string; description: string };
  product: { title: string; lines: string[] };
  specialMoments: { title: string; items: string[] };
  reviews: { title: string; items: string[] };
  order: {
    title: string;
    description: string;
    cta: { label: string; href: string | null };
    contacts: ContactLink[];
    partnerTitle: string;
    partnerDescription: string;
    partnerCta: { label: string; href: string | null };
  };
};

export const siteContent: SiteContent = {
  brand: { name: "Горішки" },
  navigation: [
    { label: "Про нас", href: "#about" },
    { label: "Горішки", href: "#product" },
    { label: "Відгуки", href: "#reviews" },
    { label: "Замовити", href: "#order" },
  ],
  hero: {
    title: "Горішки",
    tagline: "Теплий смак для тихих моментів.",
    cta: { label: "Замовити", href: null },
    image: {
      src: "/images/hero-nuts.png",
      alt: "Золотисті горішки з ніжною карамельною начинкою",
    },
  },
  about: {
    title: "Для маленьких теплих пауз.",
    description: "Пісочні горішки для чаю, гостей і близьких.",
  },
  product: {
    title: "Рецепт тепла",
    lines: ["Пісочне тісто.", "Ніжна начинка зі згущеним молоком."],
  },
  specialMoments: {
    title: "Для особливих моментів",
    items: ["Для близьких", "Як маленький подарунок", "До чаю або кави"],
  },
  reviews: {
    title: "Відгуки",
    items: ["Відгук з’явиться тут.", "Місце для теплого слова.", "Скоро додамо враження."],
  },
  order: {
    title: "Замовити горішки",
    description: "Напишіть нам — підкажемо доступні формати.",
    cta: { label: "Замовити", href: null },
    contacts: [
      { label: "Instagram", href: null },
      { label: "Telegram", href: null },
      { label: "Телефон", href: null },
    ],
    partnerTitle: "Для кав’ярень і партнерів",
    partnerDescription:
      "Для кав’ярень, закладів і партнерів — напишіть нам, щоб обговорити замовлення партіями.",
    partnerCta: { label: "Написати про співпрацю", href: null },
  },
};
