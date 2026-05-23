import { Link } from "react-router-dom";
import "./Footer.css";

const LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact",  to: "/contact" },
  { label: "Book Now", to: "/booking" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="white" fillOpacity=".15"/>
                  <path d="M14 6v16M6 14h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <div className="footer-logo-brand">Abhiwell</div>
                <div className="footer-logo-sub">Home Health Care</div>
              </div>
            </Link>
            <p className="footer-tagline">
              Compassionate, professional home healthcare across Bangalore — available 24×7.
            </p>
            <div className="footer-contact-list">
              <a href="tel:+919876543210" className="footer-contact-item">📞 +91 98765 43210</a>
              <a href="mailto:Abhiwellhealthcare@gmail.com" className="footer-contact-item">✉️ Abhiwellhealthcare@gmail.com</a>
              <span className="footer-contact-item">📍 Bangalore, Karnataka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {["Home Care", "Nursing Service", "Physiotherapy", "Elderly Care", "Doctor Consultation", "Blood Tests"].map(s => (
                <li key={s}>
                  <Link to="/services" className="footer-link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Abhiwell Home Health Care. All Rights Reserved.</p>
          <p>Developed by <span className="footer-dev">Nexusdev</span></p>
        </div>
      </div>
    </footer>
  );
}
