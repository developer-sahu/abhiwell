import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const NAV = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact",  to: "/contact" },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} ref={menuRef}>
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo-wrap" aria-label="Abhiwell Home Health Care">
          <span className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="var(--teal-600)"/>
              <path d="M14 6v16M6 14h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-brand">Abhiwell</span>
            <span className="logo-sub">Home Health Care</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className="header-actions">
          <Link to="/booking" className="btn btn-primary btn-sm header-cta">
            Book Now
          </Link>
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${open ? "visible" : ""}`} aria-hidden={!open}>
        <nav>
          {NAV.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
            >
              {label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
          ))}
          <Link to="/booking" className="btn btn-primary btn-lg mobile-book-btn">
            Book an Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
