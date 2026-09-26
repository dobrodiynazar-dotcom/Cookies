import Image from "next/image";
import { PackagingCarousel } from "../components/PackagingCarousel";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Горішки — на початок">г<span>о</span>рішки</a>
        <nav aria-label="Основна навігація">
          <a href="#product">Про горішки</a>
          <a href="#packaging">Пакування</a>
          <a href="#story">Про нас</a>
        </nav>
        <a className="header-order" href="#order">Замовити <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art">
            <div className="hero-halo" />
            <Image src="/images/nuts-box.webp" alt="Коробка з домашніми горішками зі згущеним молоком" fill priority sizes="(max-width: 780px) 96vw, 58vw" />
          </div>
          <div className="hero-copy">
            <span className="eyebrow">Домашня кондитерська</span>
            <h1 id="hero-title">Горішки<span className="dot">.</span></h1>
            <p>Домашні горішки зі згущеним молоком — до чаю, для близьких і для теплих зустрічей.</p>
            <a className="button button-cream" href="#order">Замовити <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-footnote">Зроблені для моментів, які хочеться розділити.</div>
        </section>

        <section className="product section-pad" id="product" aria-labelledby="product-title">
          <div className="product-header">
            <span className="eyebrow">01 / Продукт</span>
            <h2 id="product-title">Знайомі з дитинства.<br /><em>По-своєму особливі.</em></h2>
          </div>
          <div className="product-body">
            <div className="product-photo"><Image src="/images/nut-filling.jpg" alt="Розламаний горішок із начинкою зі згущеного молока" fill sizes="(max-width: 780px) 85vw, 34vw" /></div>
            <div className="product-description">
              <Image className="floating-nut" src="/images/nut-single.webp" alt="" width={210} height={170} />
              <p className="lead">Пісочне тісто. Ніжна начинка зі згущеним молоком.</p>
              <p>Якщо хочеться іншого смаку, до начинки можна обрати смажений арахіс або волоський горіх.</p>
              <span className="small-rule" />
              <p className="small-note">Кожне замовлення зазвичай готуємо 3–4 дні. На Великдень і Різдво приймаємо передзамовлення.</p>
            </div>
          </div>
        </section>

        <section className="packaging section-pad" id="packaging" aria-labelledby="packaging-title">
          <div className="section-heading"><span className="eyebrow">02 / Формати</span><h2 id="packaging-title">Для себе.<br /><em>І для когось особливого.</em></h2></div>
          <PackagingCarousel />
        </section>

        <section className="occasions section-pad" id="occasions" aria-labelledby="occasions-title">
          <div className="occasions-title"><span className="eyebrow">03 / Приводи</span><h2 id="occasions-title">Маленький жест.<br /><em>Тепла пам’ять.</em></h2><p>Горішки пасують і до тихої паузи, і до події, яку хочеться запам’ятати.</p></div>
          <div className="occasion-grid">
            <article><span>01</span><h3>До кави та розмови</h3><p>Для затишної зустрічі вдома або в гостях.</p></article>
            <article><span>02</span><h3>Як знак уваги</h3><p>Три горішки в окремому подарунковому пакуванні.</p></article>
            <article><span>03</span><h3>Для свята</h3><p>Для днів народження, весіль та інших особливих моментів.</p></article>
          </div>
          <Image className="occasion-bowl" src="/images/nuts-bowl.webp" alt="Миска з домашніми горішками" width={700} height={560} sizes="(max-width: 780px) 85vw, 38vw" />
        </section>

        <section className="story section-pad" id="story" aria-labelledby="story-title">
          <div className="story-art"><div className="story-arch"><Image src="/images/nuts-box.webp" alt="Горішки у відкритій коробці" fill sizes="(max-width: 780px) 85vw, 40vw" /></div></div>
          <div className="story-copy"><span className="eyebrow">04 / Майстриня та бренд</span><h2 id="story-title">За кожним смаком<br /><em>є своя історія.</em></h2><p>Тут буде історія майстрині та кондитерської. Додамо її разом зі справжнім портретом, коли матеріали будуть готові.</p></div>
        </section>

        <section className="reviews section-pad" id="reviews" aria-labelledby="reviews-title">
          <span className="eyebrow">05 / Відгуки</span><h2 id="reviews-title">Слова тих,<br /><em>хто вже скуштував.</em></h2>
          <div className="review-pending"><span aria-hidden="true">“</span><p>Незабаром тут з’являться справжні відгуки про горішки.</p></div>
        </section>

        <section className="order section-pad" id="order" aria-labelledby="order-title">
          <span className="eyebrow">06 / На зв’язку</span><h2 id="order-title">Поділимося<br /><em>чимось смачним?</em></h2>
          <div className="order-grid">
            <div><h3>Замовити горішки</h3><p>Напишіть нам у соцмережі, щоб обговорити пакування й деталі. Контактне посилання додамо після підтвердження.</p></div>
            <div><h3>Для кав’ярень</h3><p>Хочете обговорити співпрацю? Зверніться до нас тим самим способом.</p></div>
          </div>
          <div className="social-status">Instagram / Telegram <span>Посилання незабаром</span></div>
        </section>
      </main>
      <footer className="site-footer"><a href="#top">Горішки ↑</a><span>Домашня кондитерська</span></footer>
    </>
  );
}
