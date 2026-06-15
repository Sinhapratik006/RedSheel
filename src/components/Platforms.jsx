const REDDIT_ITEMS = [
  "Subreddit targeting & community infiltration",
  "Native post creation that earns upvotes",
  "AMA (Ask Me Anything) campaign management",
  "Reddit Ads with interest & subreddit targeting",
  "Reputation and crisis management on Reddit",
];

const X_ITEMS = [
  "Daily posting & thread creation",
  "Ghost-writing for founders and executives",
  "Follower growth via reply and engagement loops",
  "X monetization setup (subscriptions, tips)",
  "Influencer collaborations and reposts",
];

export default function Platforms() {
  return (
    <section className="rs-section rs-platforms-bg" id="platforms">
      <div className="rs-section-inner">
        <div className="rs-eyebrow rs-reveal">Platform Expertise</div>
        <h2 className="rs-section-title rs-reveal">
          Two platforms.<br />One agency that gets both.
        </h2>

        <div className="rs-platforms-grid">
          <div className="rs-platform-card reddit-card rs-reveal">
            <span className="rs-platform-logo">r/</span>
            <h3>Reddit Marketing</h3>
            <p>
              Reddit users are the most skeptical buyers on the internet — and the most loyal once
              you earn their trust. We know how to market here without getting torched.
            </p>
            <ul className="rs-platform-list">
              {REDDIT_ITEMS.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="rs-platform-card x-card rs-reveal">
            <span className="rs-platform-logo">𝕏</span>
            <h3>X (Twitter) Marketing</h3>
            <p>
              X is the fastest platform for building a personal or brand audience from scratch.
              We write the threads, handle the replies, and grow the numbers.
            </p>
            <ul className="rs-platform-list">
              {X_ITEMS.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
