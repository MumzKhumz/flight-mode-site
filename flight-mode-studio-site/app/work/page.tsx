export const metadata = {
  title: "Work — Flight Mode Studio",
  description: "Content that moved real brands: TVCs, brand identity and AI-produced monthly content.",
};

const stats = [
  { value: "40+", label: "brands shipped" },
  { value: "180+", label: "pieces of content" },
  { value: "3–5", label: "day delivery" },
  { value: "100%", label: "human-polished" },
];

const projects = [
  { year: "2021", client: "Nike × Sportscene", title: "60-second spot" },
  { year: "2020", client: "Castle Lite × DJ Warras", title: "Livestream" },
  { year: "2024", client: "Kingdom of Lesotho", title: "Brand identity" },
  { year: "Q1", client: "DJI South Africa", title: "Black Friday campaign", result: "8.8× Performance Max ROAS · R1.49M revenue" },
];

const process = ["Brief", "AI-assist production", "Human polish", "Ready to post"];

export default function Work() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav__logo">
          <span className="nav__logo-text">FMS.</span>
        </a>
        <div className="nav__links">
          <a href="/#how-it-works">How it works</a>
          <a href="/work/">Work</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
        </div>
        <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="nav__cta">
          Book a call
        </a>
      </nav>

      {/* INTRO */}
      <section className="work-hero">
        <span className="section-tag-pill">OUR WORK</span>
        <h1 className="section-title">Content that moved <em>real brands.</em></h1>
        <p className="work-hero__sub">
          From Nike-fronted TVCs and national identity work for the Kingdom of Lesotho to AI-produced monthly content for growing small businesses — every project is built around one idea: make something people actually stop scrolling for.
        </p>
        <div className="work-stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="work-stats__item">
              <div className="work-stats__value">{value}</div>
              <div className="work-stats__label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="work-featured">
        <div className="work-featured__card">
          <span className="section-tag-pill">FEATURED · 2022</span>
          <h2 className="work-featured__title">Sportscene TVC × Nike Air Max</h2>
          <p>
            With Amapiano breaking globally, we built a TVC around the story of South African artists pioneering the shift. Set to DJ Doowap&apos;s &ldquo;Déjà Vu&rdquo; and shot across Paris, Brooklyn and Johannesburg, it presents the global south as creator, not consumer.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="work-projects">
        {projects.map(({ year, client, title, result }) => (
          <article key={client} className="work-projects__card">
            <span className="work-projects__year">{year}</span>
            <h3 className="work-projects__client">{client}</h3>
            <p className="work-projects__title">{title}</p>
            {result && <p className="work-projects__result">{result}</p>}
          </article>
        ))}
      </section>

      {/* PROCESS */}
      <section className="how">
        <span className="section-tag-pill">PROCESS</span>
        <div className="how__cards">
          {process.map((step, i) => (
            <div key={step} className="how__card">
              <div className="how__step">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="how__card-title">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__card">
          <div className="cta__blob"></div>
          <span className="section-tag-pill">READY?</span>
          <h2 className="cta__title">Let&apos;s turn your business into a <em>content machine.</em></h2>
          <div className="cta__actions">
            <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--black">Book a free call →</a>
            <a href="/#pricing" className="btn btn--white">See plans</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer__logo">Flight Mode Studio. Cape Town</span>
        <span className="footer__tagline">Affordable, high-quality content for small businesses and growing brands.</span>
      </footer>
    </>
  );
}
