"use client";
import { scrollTo } from "../utils/scrollTo";

const PLANS = [
  {
    name: "Starter",
    price: "499",
    featured: false,
    features: [
      "1 platform (Reddit OR X)",
      "12 posts/month",
      "Weekly reporting",
      "Community monitoring",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    ctaPrimary: false,
  },
  {
    name: "Growth",
    price: "999",
    featured: true,
    features: [
      "Both Reddit + X",
      "30 posts/month",
      "Daily engagement",
      "Reddit Ads management",
      "Monthly strategy call",
      "Viral content targeting",
    ],
    cta: "Get Started",
    ctaPrimary: true,
  },
  {
    name: "Agency",
    price: "2,499",
    featured: false,
    features: [
      "Reddit + X + Full funnel",
      "Unlimited posts",
      "Ghost-writing included",
      "AMA campaign setup",
      "Weekly strategy calls",
      "Priority Slack support",
    ],
    cta: "Let's Talk",
    ctaPrimary: false,
  },
];

export default function Pricing() {
  return (
    <section className="rs-section rs-pricing-bg" id="pricing">
      <div className="rs-section-inner">
        <div className="rs-eyebrow rs-reveal">Pricing</div>
        <h2 className="rs-section-title rs-reveal">
          Transparent pricing.<br />No lock-in contracts.
        </h2>

        <div className="rs-pricing-grid">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rs-plan-card rs-reveal${p.featured ? " featured" : ""}`}
            >
              {p.featured && <div className="rs-plan-badge">Most Popular</div>}
              <div className="rs-plan-name">{p.name}</div>
              <div className="rs-plan-price"><sup>$</sup>{p.price}</div>
              <div className="rs-plan-period">per month</div>
              <div className="rs-plan-divider" />
              <ul className="rs-plan-features">
                {p.features.map((f) => (
                  <li key={f}><span className="rs-check">✓</span> {f}</li>
                ))}
              </ul>
              <button
                className={p.ctaPrimary ? "rs-plan-btn-primary" : "rs-plan-btn-ghost"}
                onClick={() => scrollTo("contact")}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
