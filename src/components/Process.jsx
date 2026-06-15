import "./Process.css";

const STEPS = [
  {
    n: 1,
    title: "Deep Audit",
    desc: "We analyze where your audience hangs out — which subreddits, which X accounts, what they talk about.",
  },
  {
    n: 2,
    title: "Strategy Build",
    desc: "Custom content and engagement plan tailored to your brand voice and growth goals.",
  },
  {
    n: 3,
    title: "Execute",
    desc: "Our team posts, replies, and engages daily — natively, not robotically. No bots, no spam.",
  },
  {
    n: 4,
    title: "Report & Iterate",
    desc: "Weekly metrics, monthly deep dives. We double down on what's working, cut what isn't.",
  },
];

export default function Process() {
  return (
    <section className="rs-section rs-process-bg" id="process">
      <div className="rs-section-inner">
        <div className="rs-eyebrow rs-reveal">Our Process</div>
        <h2 className="rs-section-title rs-reveal">
          From audit to audience<br />in four steps
        </h2>

        <div className="rs-process-steps">
          {STEPS.map((s) => (
            <div className="rs-step rs-reveal" key={s.n}>
              <div className="rs-step-num">{s.n}</div>
              <div className="rs-step-title">{s.title}</div>
              <div className="rs-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
