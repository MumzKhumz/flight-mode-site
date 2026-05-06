export default function Home() {
  return (
    <section className="pricing-section">

      <article className="price-card price-card--cream">
        <h2 className="price-card__title">Starter</h2>
        <p className="price-card__subtitle">Best for getting consistent</p>
        <div className="price-card__price">R3,000 <span>/mo</span></div>
        <div className="price-card__pill">1 video / month</div>
        <ul className="price-card__features">
          <li>AI-powered production</li>
          <li>Human-edited final cut</li>
          <li>3–5 day delivery</li>
          <li>Basic revisions</li>
        </ul>
        <div className="price-card__actions">
          <button className="btn btn--primary">Choose Starter</button>
          <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Book a call</a>
        </div>
      </article>

      <article className="price-card price-card--yellow price-card--featured">
        <div className="price-card__badge">MOST POPULAR</div>
        <h2 className="price-card__title">Growth</h2>
        <p className="price-card__subtitle">Most popular for growing brands</p>
        <div className="price-card__price">R6,000 <span>/mo</span></div>
        <div className="price-card__pill">3 videos / month</div>
        <ul className="price-card__features">
          <li>Social + ad-ready videos</li>
          <li>Priority turnaround</li>
          <li>Performance-focused edits</li>
          <li>Creative direction included</li>
        </ul>
        <div className="price-card__actions">
          <button className="btn btn--primary">Choose Growth</button>
          <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Book a call</a>
        </div>
      </article>

      <article className="price-card price-card--cream">
        <h2 className="price-card__title">Scale</h2>
        <p className="price-card__subtitle">For brands ready to push volume</p>
        <div className="price-card__price">R10,000 <span>/mo</span></div>
        <div className="price-card__pill">6 videos / month</div>
        <ul className="price-card__features">
          <li>Advanced edits + variations</li>
          <li>Fastest turnaround</li>
          <li>Campaign-ready creatives</li>
          <li>Monthly creative planning</li>
        </ul>
        <div className="price-card__actions">
          <button className="btn btn--primary">Choose Scale</button>
          <a href="https://calendly.com/fms-meet" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Book a call</a>
        </div>
      </article>

    </section>
  );
}



