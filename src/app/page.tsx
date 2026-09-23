import { ActionLink } from "@/components/ActionLink";
import { PolaroidImage } from "@/components/PolaroidImage";
import { siteContent } from "@/content/site";

export default function HomePage() {
  const { about, brand, hero, navigation, order, product, reviews, specialMoments } = siteContent;

  return (
    <div className="site-shell">
      <header className="site-header">
        <a aria-label="На початок сторінки" className="brand-mark" href="#top">
          {brand.name}
        </a>
        <nav aria-label="Основна навігація" className="site-nav">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-order" href="#order">Замовити</a>
      </header>

      <main id="top">
        <section aria-labelledby="hero-title" className="hero section">
          <div className="hero__lead">
            <h1 id="hero-title">{hero.title}</h1>
            <p>{hero.tagline}</p>
            <ActionLink href={hero.cta.href} label={hero.cta.label} />
          </div>
          <div className="hero__visual">
            <span aria-hidden="true" className="hero__halo" />
            <PolaroidImage alt={hero.image.alt} priority src={hero.image.src} />
          </div>
        </section>

        <section aria-labelledby="about-title" className="about section" id="about">
          <div className="about__copy">
            <h2 id="about-title">{about.title}</h2>
            <p>{about.description}</p>
          </div>
          <div aria-label="Місце для майбутніх фотографій бренду" className="about__photos">
            <figure className="polaroid polaroid--placeholder polaroid--one" aria-hidden="true"><div /></figure>
            <figure className="polaroid polaroid--placeholder polaroid--two" aria-hidden="true"><div /></figure>
            <figure className="polaroid polaroid--placeholder polaroid--three" aria-hidden="true"><div /></figure>
          </div>
        </section>

        <section aria-labelledby="product-title" className="product" id="product">
          <div className="product__inner">
            <div aria-hidden="true" className="product__art-space" />
            <div className="product__copy">
              <h2 id="product-title">{product.title}</h2>
              {product.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          </div>
        </section>

        <section aria-labelledby="moments-title" className="special section" id="moments">
          <h2 id="moments-title">{specialMoments.title}</h2>
          <div className="special__gallery">
            {specialMoments.items.map((item, index) => (
              <figure className={`polaroid polaroid--placeholder special__photo special__photo--${index + 1}`} key={item}>
                <div aria-hidden="true" />
                <figcaption>{item}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="reviews-title" className="reviews section" id="reviews">
          <h2 id="reviews-title">{reviews.title}</h2>
          <div aria-label="Місце для майбутніх відгуків" className="reviews__cards">
            {reviews.items.map((item, index) => (
              <article className={`review-card review-card--${index + 1}`} key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="order-title" className="order section" id="order">
          <div className="order__personal">
            <h2 id="order-title">{order.title}</h2>
            <p>{order.description}</p>
            <ActionLink href={order.cta.href} label={order.cta.label} />
            <div aria-label="Канали зв’язку" className="order__contacts">
              {order.contacts.map((contact) => <span key={contact.label}>{contact.label}</span>)}
            </div>
          </div>
          <div className="order__partners">
            <h2>{order.partnerTitle}</h2>
            <p>{order.partnerDescription}</p>
            <ActionLink href={order.partnerCta.href} label={order.partnerCta.label} />
          </div>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} {brand.name}</footer>
    </div>
  );
}
