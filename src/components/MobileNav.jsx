import { NavLink } from "react-router-dom";
import "./MobileNav.css";

const ITEMS = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 9.5L11 3l8 6.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M8 20v-8h6v8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    to: "/about",
    label: "About",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M5 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    to: "/services",
    label: "Services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="3" y="12" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="12" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    to: "/booking",
    label: "Book",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 3v4M15 3v4M3 10h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M11 13v4M9 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    highlight: true,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3.5 5.5A2 2 0 015.5 3.5h11A2 2 0 0118.5 5.5v9a2 2 0 01-2 2H7l-4 3.5V5.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function MobileNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {ITEMS.map(({ to, label, icon, highlight }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `mob-nav-item ${isActive ? "active" : ""} ${highlight ? "highlight" : ""}`
          }
        >
          <span className="mob-nav-icon">{icon}</span>
          <span className="mob-nav-label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
