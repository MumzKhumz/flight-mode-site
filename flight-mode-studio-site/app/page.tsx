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
          <h1 className="hero__title">Big brand content, small business pricing.</h1>
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
            <span className="hero__pill">✓ Socia
