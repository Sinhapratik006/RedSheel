import { scrollTo } from "../utils/scrollTo";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="rs-nav">
      <div className="rs-logo" onClick={() => scrollTo("hero")}>
        <div className="rs-logo-dot" />
        RedSheel
      </div>

      <ul className="rs-nav-links">
        {["services", "platforms", "results", "pricing"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(id);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button className="rs-nav-cta" onClick={() => scrollTo("contact")}>
        Book a Call
      </button>
    </nav>
  );
}
