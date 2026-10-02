import Image from "next/image";
import { PackagingCarousel } from "../components/PackagingCarousel";
import { SiteHeader } from "../components/SiteHeader";

const orderUrl = "https://www.instagram.com/milyami._?stkn=NXRobTN5NjFmejZt&utm_source=qr";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <video
            className="hero-video"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            poster="/media/hero-nuts-first-frame.jpg"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/media/hero-nuts.mp4" type="video/mp4" />
          </video>

          <div className="hero-copy">
            <h1 id="hero-title">Горішки</h1>
            <p className="hero-subtitle">Домашня кондитерська</p>
            <a className="button hero-cta" href={orderUrl} target="_blank" rel="noreferrer">
              Замовити
            </a>
          </div>
        </section>

        <section className="product section-pad" id="product" aria-labelledby="product-title">
          <div className="product-header">
            <span className="label">01 / Продукт</span>
            <h2 id="product-title">
              Знайомі з дитинства.<br />
              <em>По-своєму особливі.</em>
            </h2>
          </div>
          <div className="product-body">
            <div className="product-photo">
              <Image src="/images/nut-filling.jpg" alt="Розламаний горішок із начинкою зі згущеного молока" fill sizes="(max-width: 780px) 90vw, 42vw" />
            </div>
            <div className="product-description">
              <Image className="floating-nut" src="/images/nut-single.webp" alt="" width={210} height={170} />
              <p className="lead">Пісочне тісто. Ніжна начинка зі згущеним молоком.</p>
              <p>Якщо хочеться іншого смаку, до начинки можна обрати смажений арахіс або волоський горіх.</p>
              <p className="small-note">Кожне замовлення зазвичай готуємо 3–4 дні. На Великдень і Різдво приймаємо передзамовлення.</p>
            </div>
          </div>
        </section>

        <section className="packaging section-pad" id="packaging" aria-labelledby="packaging-title">
          <div className="section-heading">
            <span className="label">02 / Формати</span>
            <h2 id="packaging-title">
              Для себе.<br />
              <em>І для когось особливого.</em>
            </h2>
          </div>
          <PackagingCarousel />
        </section>

        <section className="occasions section-pad" id="occasions" aria-labelledby="occasions-title">
          <div className="occasions-title">
            <span className="label">03 / Приводи</span>
            <h2 id="occasions-title">
              Маленький жест.<br />
              <em>Тепла пам’ять.</em>
            </h2>
            <p>Горішки пасують і до тихої паузи, і до події, яку хочеться запам’ятати.</p>
          </div>
          <div className="occasion-grid">
            <article><span className="label occasion-number">01</span><h3>До кави та розмови</h3><p>Для затишної зустрічі вдома або в гостях.</p></article>
            <article><span className="label occasion-number">02</span><h3>Як знак уваги</h3><p>Три горішки в окремому подарунковому пакуванні.</p></article>
            <article><span className="label occasion-number">03</span><h3>Для свята</h3><p>Для днів народження, весіль та інших особливих моментів.</p></article>
          </div>
          <div className="occasion-photo">
            <Image src="/images/nuts-bowl.webp" alt="Миска з домашніми горішками" fill sizes="(max-width: 780px) 90vw, 42vw" />
          </div>
        </section>

        <section className="story section-pad" id="story" aria-labelledby="story-title">
          <div className="story-art">
            <div className="story-photo">
              <Image src="/images/nuts-box.webp" alt="Горішки у відкритій коробці" fill sizes="(max-width: 780px) 90vw, 42vw" />
            </div>
          </div>
          <div className="story-copy">
            <span className="label">04 / Майстриня та бренд</span>
            <h2 id="story-title">
              За кожним смаком<br />
              <em>є своя історія.</em>
            </h2>
            <p>Тут буде історія майстрині та кондитерської. Додамо її разом зі справжнім портретом, коли матеріали будуть готові.</p>
          </div>
        </section>

        <section className="reviews section-pad" id="reviews" aria-labelledby="reviews-title">
          <span className="label">05 / Відгуки</span>
          <h2 id="reviews-title">
            Слова тих,<br />
            <em>хто вже скуштував.</em>
          </h2>
          <div className="review-pending"><span aria-hidden="true">“</span><p>Незабаром тут з’являться справжні відгуки про горішки.</p></div>
        </section>

        <section className="order section-pad" id="order" aria-labelledby="order-title">
          <span className="label">06 / На зв’язку</span>
          <h2 id="order-title">
            Поділимося<br />
            <em>чимось смачним?</em>
          </h2>
          <div className="order-grid">
            <div><h3>Замовити горішки</h3><p>Напишіть нам у соцмережі, щоб обговорити пакування й деталі. Контактне посилання додамо після підтвердження.</p></div>
            <div><h3>Для кав’ярень</h3><p>Хочете обговорити співпрацю? Зверніться до нас тим самим способом.</p></div>
          </div>
          <div className="social-status">
            <a className="button contact-cta" href={orderUrl} target="_blank" rel="noreferrer">Instagram / Telegram</a>
            <span>Посилання незабаром</span>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a href="#top">Горішки ↑</a><span>Домашня кондитерська</span></footer>
    </>
  );
}
