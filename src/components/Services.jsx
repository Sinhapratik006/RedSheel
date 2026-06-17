const SERVICES = [
  {
    featured: true,
    tag: "Reddit + X", tagClass: "rs-both-tag",
    glowColor: "var(--red)",
    title: "Full-Funnel Community Growth",
    desc: "We build your brand across both platforms simultaneously — driving Reddit thread visibility while growing your X audience. Most agencies pick one. We specialize in the synergy between both ecosystems.",
    features: ["Cross-platform strategy", "Audience mapping", "Content calendar", "Monthly reporting"],
  },
  {
    featured: false,
    tag: "Reddit", tagClass: "rs-reddit-tag",
    glowColor: "var(--reddit-orange)",
    title: "Reddit Community Management",
    desc: "Authentic engagement in subreddits where your buyers live. We find the right communities, create content that doesn't get downvoted, and build genuine brand trust.",
    features: ["Subreddit research", "AMA coordination", "Comment seeding"],
  },
  {
    featured: false,
    tag: "X / Twitter", tagClass: "rs-x-tag",
    glowColor: "var(--x-blue)",
    title: "X Account Growth & Monetization",
    desc: "We grow your X following with real people in your niche. Ghost-writing, reply strategy, thread creation, and monetization setup — from 0 to revenue.",
    features: ["Thread writing", "Ghost-writing", "Reply strategy"],
  },
  {
    featured: false,
    tag: "Reddit", tagClass: "rs-reddit-tag",
    glowColor: "var(--red)",
    title: "Reddit Ads Management",
    desc: "Reddit's ad platform is underpriced and underutilized. We run targeted campaigns against subreddits with surgical precision — lower CPCs, higher intent.",
    features: ["Campaign setup", "Subreddit targeting", "A/B testing"],
  },
];

export default function Services() {
  return (
    <section className="rs-section rs-services-bg" id="services">
      <div className="rs-section-inner">
        <div className="rs-eyebrow rs-reveal">What We Do</div>
        <h2 className="rs-section-title rs-reveal">
          Every service built for<br />platform-native growth
        </h2>
        <p className="rs-section-sub rs-reveal">
          No generic social media playbooks. Everything we do is engineered for how Reddit and X actually work.
        </p>

        <div className="rs-services-layout">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`rs-service-card rs-reveal${s.featured ? " featured" : ""}`}
            >
              <div className="rs-service-glow" style={{ background: s.glowColor }} />
              <div className="rs-service-platform">
                <span className={`rs-platform-tag ${s.tagClass}`}>{s.tag}</span>
              </div>
              <div className="rs-service-title">{s.title}</div>
              <div className="rs-service-desc">{s.desc}</div>
              <div className="rs-service-features">
                {s.features.map((f) => (
                  <span className="rs-feature-tag" key={f}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
