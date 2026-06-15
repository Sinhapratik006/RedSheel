import { X_HANDLE, COPYRIGHT_YEAR } from "../config";
import { scrollTo } from "../utils/scrollTo";
import "./Footer.css";

export default function Footer() {
  const hasHandle = X_HANDLE && X_HANDLE.trim() !== "";

  return (
    <footer className="rs-footer">
      <div className="rs-logo" onClick={() => scrollTo("hero")}>
        <div className="rs-logo-dot" />
        RedSheel
      </div>

      <div className="rs-footer-copy">
        © {COPYRIGHT_YEAR} RedSheel. All rights reserved.
      </div>

      <div className="rs-footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>

        {/* ── X Profile link ─────────────────────────────────────────
            To activate: open src/config.js and set X_HANDLE to your
            username, e.g.  export const X_HANDLE = "redsheel";
        ────────────────────────────────────────────────────────────── */}
        {hasHandle ? (
          <a
            className="rs-footer-x-link"
            href={`https://x.com/${X_HANDLE}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="rs-footer-x-icon">𝕏</span>
            @{X_HANDLE}
          </a>
        ) : (
          <span className="rs-footer-x-placeholder" title="Add your X handle in src/config.js">
            𝕏 @handle
          </span>
        )}

        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
          Contact
        </a>
      </div>
    </footer>
  );
}
