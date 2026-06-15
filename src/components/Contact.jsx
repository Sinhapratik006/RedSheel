import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <section className="rs-contact-bg" id="contact">
      <div className="rs-cta-box">
        <div className="rs-eyebrow rs-reveal" style={{ justifyContent: "center" }}>
          Get In Touch
        </div>
        <h2 className="rs-reveal">
          Ready to own<br />your communities?
        </h2>
        <p className="rs-reveal">
          Drop your email and we'll send you a free Reddit + X audit for your brand — no pitch call required.
        </p>
        <div className="rs-cta-form rs-reveal">
          <input
            type="email"
            className="rs-cta-input"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="rs-btn-primary">Get Free Audit</button>
        </div>
      </div>
    </section>
  );
}
