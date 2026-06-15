import "./Stats.css";

const STATS = [
  { num: "12", sup: "M+", label: "Impressions Driven" },
  { num: "4.8", sup: "×",  label: "Avg. Engagement Lift" },
  { num: "80",  sup: "+",  label: "Brands Grown" },
  { num: "98",  sup: "%",  label: "Client Retention" },
];

export default function Stats() {
  return (
    <div className="rs-stats">
      <div className="rs-stats-grid">
        {STATS.map((s) => (
          <div className="rs-stat-item rs-reveal" key={s.label}>
            <div className="rs-stat-num">
              {s.num}<span>{s.sup}</span>
            </div>
            <div className="rs-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
