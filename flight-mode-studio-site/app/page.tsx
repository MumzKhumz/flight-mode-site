export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav__logo">
          <div className="nav__logo-icon">FM</div>
          <span className="nav__logo-text">Flight Mode Studio</span>
        </div>
        <div className="nav__links">
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="nav__cta">
          Get content
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero__left">
          <div className="hero__tag">✦ AI Content Studio for small businesses</div>
          <h1 className="hero__title">Big brand content, small business <em>pricing.</em></h1>
          <p className="hero__sub">
            High-quality short-form videos for small businesses and growing brands — delivered every month using AI-powered production.
          </p>
          <div className="hero__actions">
            <a href="#pricing" className="btn btn--yellow">View pricing →</a>
            <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--outline">Book a call →</a>
          </div>
          <div className="hero__pills">
            <span className="hero__pill">✓ No big shoots</span>
            <span className="hero__pill">✓ 3–5 day delivery</span>
            <span className="hero__pill">✓ Social + ads ready</span>
            <span className="hero__pill">✓ Cancel or pause</span>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__mockup">
            <div className="hero__mockup-header">
              <span className="hero__mockup-badge">NOW EDITING</span>
            </div>
            <div className="hero__mockup-item">
              <div className="hero__mockup-play">▶</div>
              <div>
                <div className="hero__mockup-title">TikTok product teaser</div>
                <div className="hero__mockup-status">Ready in 2 days</div>
              </div>
            </div>
            <div className="hero__mockup-item">
              <div className="hero__mockup-play">▶</div>
              <div>
                <div className="hero__mockup-title">Instagram reel ad</div>
                <div className="hero__mockup-status">Script approved</div>
              </div>
            </div>
            <div className="hero__mockup-item">
              <div className="hero__mockup-play">▶</div>
              <div>
                <div className="hero__mockup-title">Founder story video</div>
                <div className="hero__mockup-status">In polish</div>
              </div>
            </div>
          </div>
          <div className="hero__blob hero__blob--yellow"></div>
          <div className="hero__blob hero__blob--teal"></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee__track">
          {[...Array(2)].map((_, j) =>
            ["3–5 Day Delivery", "Small Business Friendly", "Social + Ads Ready", "AI-Powered", "Short-Form Video"].map((t, i) => (
              <span key={`${j}-${i}`} className="marquee__item">{t} <span className="marquee__dot">•</span></span>
            ))
          )}
        </div>
      </div>

      {/* LOGO STRIP */}
      <section className="logo-strip">
        <p className="logo-strip__label">Brands we&apos;ve worked with</p>
        <div className="logo-strip__logos">
          <span className="logo-strip__logo" style={{fontFamily: 'Arial Black, sans-serif', letterSpacing: '-0.04em'}}>NIKE</span>
          <span className="logo-strip__logo" style={{fontFamily: 'Georgia, serif', letterSpacing: '0.12em', fontSize: '18px'}}>SPORTSCENE</span>
          <span className="logo-strip__logo" style={{fontFamily: 'Arial Black, sans-serif', letterSpacing: '0.05em'}}>DJI</span>
          <span className="logo-strip__logo" style={{fontFamily: 'Arial, sans-serif', letterSpacing: '-0.02em', fontStyle: 'italic'}}>fitbit</span>
        </div>
      </section>

      {/* WHY IT EXISTS */}
      <section className="why">
        <div className="why__left">
          <span className="section-tag-pill">WHY IT EXISTS</span>
          <h2 className="section-title">Content should not feel like a <em>full production.</em></h2>
        </div>
        <div className="why__right">
          <div className="why__card why__card--white">
            <p>Traditional shoots are expensive, slow, and hard to repeat every month.</p>
          </div>
          <div className="why__card why__card--orange">
            <p>Flight Mode Studio gives your brand a simple monthly content engine: brief it, we create it, you post it.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how-it-works">
        <span className="section-tag-pill">HOW IT WORKS</span>
        <h2 className="section-title">A ridiculously <em>simple</em> way to get content every month.</h2>
        <div className="how__cards">
          {[
            { n: "01", title: "Subscribe", desc: "Choose the monthly plan that fits your business." },
            { n: "02", title: "Send your brief", desc: "Share your idea, product, promo, or campaign angle." },
            { n: "03", title: "We create", desc: "AI-assisted production, editing, optimisation, and polish." },
            { n: "04", title: "Post & grow", desc: "Receive ready-to-use videos for socials and ads." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="how__card">
              <div className="how__step">{n}</div>
              <h3 className="how__card-title">{title}</h3>
              <p className="how__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="features__header">
          <div className="features__header-left">
            <span className="section-tag-pill">WHY SMALL BUSINESSES LOVE US</span>
            <h2 className="section-title">Made for brands that need <em>speed, volume,</em> and results.</h2>
          </div>
          <p className="features__header-right">Stop waiting weeks for content. Start building a repeatable content rhythm your audience can actually see.</p>
        </div>
        <div className="features__grid">
          {[
            { icon: "✦", title: "Affordable", desc: "No massive shoot days or R20k+ production bills." },
            { icon: "◷", title: "Fast turnaround", desc: "Get ready-to-post content in 3–5 days, not weeks." },
            { icon: "↻", title: "Always-on output", desc: "Stay visible every month with consistent videos." },
            { icon: "◁", title: "Built for social", desc: "Made for Instagram, TikTok, Facebook, and ads." },
            { icon: "⚡", title: "AI-powered speed", desc: "More content, faster production, lower cost." },
            { icon: "✓", title: "Human polish", desc: "AI-assisted, edited and quality-checked by humans." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="features__card">
              <div className="features__icon">{icon}</div>
              <h3 className="features__title">{title}</h3>
              <p className="features__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-wrapper" id="pricing">
        <div className="pricing-wrapper__inner">
          <div className="pricing-wrapper__header">
            <span className="section-tag-pill section-tag-pill--orange">PRICING</span>
            <h2 className="pricing-wrapper__title">Simple monthly plans.</h2>
            <p className="pricing-wrapper__sub">Start small, stay consistent, scale when you are ready.</p>
          </div>
          <div className="pricing-section">

            <article className="price-card price-card--grad-yellow">
              <h2 className="price-card__title">Starter</h2>
              <p className="price-card__subtitle">Best for getting consistent</p>
              <div className="price-card__price">R2,500<span>/mo</span></div>
              <div className="price-card__pill">1 video / month</div>
              <ul className="price-card__features">
                <li>AI-powered production</li>
                <li>Human-edited final cut</li>
                <li>3–5 day delivery</li>
                <li>Basic revisions</li>
              </ul>
              <div className="price-card__actions">
                <button className="btn btn--black">Choose Starter</button>
                <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Book a call</a>
              </div>
            </article>

            <article className="price-card price-card--grad-blue price-card--featured">
              <div className="price-card__badge">MOST POPULAR</div>
              <h2 className="price-card__title">Growth</h2>
              <p className="price-card__subtitle">Most popular for growing brands</p>
              <div className="price-card__price">R6,000<span>/mo</span></div>
              <div className="price-card__pill">3 videos / month</div>
              <ul className="price-card__features">
                <li>Social + ad-ready videos</li>
                <li>Priority turnaround</li>
                <li>Performance-focused edits</li>
                <li>Creative direction included</li>
              </ul>
              <div className="price-card__actions">
                <button className="btn btn--black">Choose Growth</button>
                <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Book a call</a>
              </div>
            </article>

            <article className="price-card price-card--grad-orange">
              <h2 className="price-card__title">Scale</h2>
              <p className="price-card__subtitle">For brands ready to push volume</p>
              <div className="price-card__price">R10,000<span>/mo</span></div>
              <div className="price-card__pill">6 videos / month</div>
              <ul className="price-card__features">
                <li>Advanced edits + variations</li>
                <li>Fastest turnaround</li>
                <li>Campaign-ready creatives</li>
                <li>Monthly creative planning</li>
              </ul>
              <div className="price-card__actions">
                <button className="btn btn--black">Choose Scale</button>
                <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Book a call</a>
              </div>
            </article>

          </div>

          <div className="pricing-campaign">
            <div className="pricing-campaign__left">
              <h3>Need a launch push?</h3>
              <p>Campaign bursts available for product drops, paid ads, launches, and seasonal content.</p>
            </div>
            <span className="pricing-campaign__price">R30k – R60k</span>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="who">
        <div className="who__card">
          <span className="section-tag-pill">WHO IT IS FOR</span>
          <h2 className="section-title">For brands that need to show up more often.</h2>
          <div className="who__tags">
            {["Small businesses", "E-commerce", "Coaches", "Creators", "Growing brands"].map(t => (
              <span key={t} className="who__tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq__left">
          <span className="section-tag-pill">FAQ</span>
          <h2 className="faq__title">Questions before takeoff?</h2>
        </div>
        <div className="faq__list">
          {[
            { q: "Who is this for?", a: "Flight Mode Studio is built for small businesses, e-commerce brands, coaches, creators, and growing brands who need consistent video content without the cost of traditional production." },
            { q: "How fast do I get my videos?", a: "Most videos are delivered within 3–5 business days of receiving your brief." },
            { q: "Is everything AI-generated?", a: "No. We use AI to speed up production, but every video is reviewed, edited, and polished by a human before delivery." },
            { q: "Can I use the videos for ads?", a: "Yes — all plans include ad-ready formats optimised for paid social on Instagram, TikTok, and Facebook." },
            { q: "Can I request a bigger campaign?", a: "Yes. Campaign bursts are available for product launches, paid ad campaigns, and seasonal content. Pricing starts at R30k." },
            { q: "Can I cancel or pause?", a: "Absolutely. You can pause or cancel your subscription at any time with no penalty." },
          ].map(({ q, a }) => (
            <details key={q} className="faq__item">
              <summary className="faq__q">{q}</summary>
              <p className="faq__a">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__card">
          <div className="cta__blob"></div>
          <span className="section-tag-pill">READY?</span>
          <h2 className="cta__title">Let's turn your business into a <em>content machine.</em></h2>
          <p className="cta__sub">Get consistent, high-quality videos without expensive shoots, long delays, or content panic.</p>
          <div className="cta__actions">
            <a href="mailto:hello@flightmodestudio.co.za" className="btn btn--black">✈ Email us</a>
            <a href="#pricing" className="btn btn--white">See plans</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer__logo">Flight Mode Studio © {new Date().getFullYear()}</span>
        <span className="footer__tagline">Affordable, high-quality content for small businesses and growing brands.</span>
      </footer>
    </>
  );
}
