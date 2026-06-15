import { scrollTo } from "../utils/scrollTo";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="rs-hero" id="hero">
      <div className="rs-hero-bg" />
      <div className="rs-slash-line" />
      <div className="rs-hero-grid" />

      <div className="rs-hero-content">
        <div className="rs-hero-badge">
          <span className="rs-badge-dot" />
          Reddit × X Marketing Agency
        </div>

        <h1 className="rs-h1">
          We turn<br />
          <span className="rs-accent">communities</span>
          <span className="rs-slash-text"> / </span>
          <span className="rs-accent">conversations</span><br />
          into customers
        </h1>

        <p className="rs-hero-sub">
          RedSheel is the only agency built exclusively for Reddit and X marketing.
          We don't spray and pray — we go where your audience actually lives.
        </p>

        <div className="rs-hero-actions">
          <button className="rs-btn-primary" onClick={() => scrollTo("contact")}>
            Start Growing →
          </button>
          <button className="rs-btn-ghost" onClick={() => scrollTo("results")}>
            See Results
          </button>
        </div>

        <div className="rs-platform-strip">
          <div className="rs-platform-pill">
            <div className="rs-platform-icon rs-reddit-icon">r/</div>
            Reddit Marketing
          </div>
          <span className="rs-strip-divider">/</span>
          <div className="rs-platform-pill">
            <div className="rs-platform-icon rs-x-icon">𝕏</div>
            X Growth
          </div>
          <span className="rs-strip-divider">/</span>
          <div className="rs-platform-pill">
            <span style={{ fontSize: 18 }}>🚀</span>
            Audience Building
          </div>
        </div>
      </div>
    </section>
  );
}
