const RESULTS = [
  {
    metric: "340%",
    label: "Traffic increase",
    desc: "SaaS startup saw 340% more website traffic in 60 days after we launched their Reddit community strategy.",
  },
  {
    metric: "18K",
    label: "New followers in 90 days",
    desc: "X account for a fintech founder grew from 800 to 18K followers using our thread + reply growth system.",
  },
  {
    metric: "$0.38",
    label: "CPC on Reddit Ads",
    desc: "E-commerce brand achieved $0.38 CPC on Reddit — 6× cheaper than their Google Ads cost-per-click.",
  },
  {
    metric: "2.1M",
    label: "Organic impressions",
    desc: "A single Reddit AMA we coordinated drove 2.1M impressions and 4,000 product signups in 24 hours.",
  },
  {
    metric: "72hrs",
    label: "To first viral post",
    desc: "Our fastest onboarding to first viral piece of content — a Reddit thread that hit the front page of r/entrepreneur.",
  },
  {
    metric: "$220K",
    label: "Revenue attributed",
    desc: "D2C brand tracked $220,000 in direct revenue from RedSheel's Reddit + X campaigns over one quarter.",
  },
];

export default function Results() {
  return (
    <section className="rs-section rs-results-bg" id="results">
      <div className="rs-section-inner">
        <div className="rs-eyebrow rs-reveal">Results</div>
        <h2 className="rs-section-title rs-reveal">
          Numbers that moved<br />the needle
        </h2>

        <div className="rs-results-grid">
          {RESULTS.map((r) => (
            <div className="rs-result-card rs-reveal" key={r.metric}>
              <div className="rs-result-metric">{r.metric}</div>
              <div className="rs-result-label">{r.label}</div>
              <div className="rs-result-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
