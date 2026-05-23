import { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const SERVICES = [
  { emoji: "🏠", title: "Home Care", color: "#0a8f9e", desc: "Professional, compassionate in-home care — assistance with daily activities, medication management, companionship and more for those who need support to live safely at home." },
  { emoji: "🩺", title: "Health Checkup", color: "#087381", desc: "Proactive, comprehensive health assessments at your doorstep. Medical history reviews, physical exams and diagnostic tests to identify risks and empower healthier decisions." },
  { emoji: "💉", title: "Nursing Service", color: "#065c67", desc: "Skilled nurses for post-surgical care, IV therapy, wound management and medication administration — bringing ICU-level attention to your home." },
  { emoji: "🦽", title: "Physiotherapy", color: "#04444d", desc: "Personalised rehabilitation plans for injury recovery, pain management and improved mobility — delivered by certified physiotherapists at your schedule." },
  { emoji: "🧓", title: "Elderly Care", color: "#0a8f9e", desc: "Compassionate day-to-day support, companionship and safety monitoring for senior citizens — preserving independence while ensuring well-being." },
  { emoji: "👨‍⚕️", title: "Doctor Consultation", color: "#087381", desc: "Connect with experienced physicians for in-person or virtual appointments — get professional guidance, diagnoses and prescriptions without leaving home." },
  { emoji: "🧪", title: "Blood Tests", color: "#065c67", desc: "Convenient home blood draws with a wide diagnostic panel. Prompt digital results forwarded directly to your phone or email." },
  { emoji: "🏥", title: "Medical Services", color: "#04444d", desc: "Comprehensive medical support from routine check-ups to specialised post-operative care — affordable, accessible and always patient-first." },
];

const EQUIPMENT = [
  { emoji: "💨", title: "Oxygen Concentrator" },
  { emoji: "🛏️", title: "Hospital Cot & Bed" },
  { emoji: "🫁", title: "Oxygen Cylinder" },
  { emoji: "🫀", title: "Ventilator" },
  { emoji: "♿", title: "Wheel Chairs" },
  { emoji: "🦵", title: "CPM Machine" },
  { emoji: "📟", title: "Cardiac Monitor" },
  { emoji: "🔬", title: "Suction Machine" },
  { emoji: "😮‍💨", title: "BIPAP / CPAP" },
];

export default function Services() {
  const [flipped, setFlipped] = useState({});
  const toggle = (i) => setFlipped(p => ({ ...p, [i]: !p[i] }));

  return (
    <div className="services-page">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-fadeUp">
            <p className="section-label">What We Do</p>
            <h1 className="display-xl">
              Services built for<br /><em>your recovery</em>
            </h1>
            <p className="page-hero-desc">
              Eight specialised care services — all delivered at home by verified,
              qualified professionals. Tap any card to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="section-py">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map(({ emoji, title, color, desc }, i) => (
              <div
                key={title}
                className={`svc-flip animate-fadeUp delay-${(i % 3) + 1}`}
                onClick={() => toggle(i)}
                onKeyDown={e => e.key === "Enter" && toggle(i)}
                role="button"
                tabIndex={0}
                aria-pressed={!!flipped[i]}
                aria-label={`${title} — click to read details`}
              >
                <div className={`svc-flip-inner ${flipped[i] ? "flipped" : ""}`}>
                  {/* Front */}
                  <div className="svc-front" style={{ background: color }}>
                    <span className="svc-emoji">{emoji}</span>
                    <h3 className="svc-title">{title}</h3>
                    <span className="svc-hint">Tap to learn more</span>
                  </div>
                  {/* Back */}
                  <div className="svc-back">
                    <span className="svc-emoji-sm">{emoji}</span>
                    <h3 className="svc-back-title">{title}</h3>
                    <p className="svc-desc">{desc}</p>
                    <Link
                      to="/booking"
                      className="btn btn-primary btn-sm"
                      onClick={e => e.stopPropagation()}
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT ── */}
      <section className="section-py equipment-section">
        <div className="container">
          <div className="section-header animate-fadeUp">
            <p className="section-label">Medical Equipment</p>
            <h2 className="display-lg">Rent or Buy</h2>
            <p className="section-desc">
              High-quality medical equipment delivered and set up at your home.
              Available for rent or purchase with trained operator support.
            </p>
          </div>
          <div className="equipment-grid">
            {EQUIPMENT.map(({ emoji, title }, i) => (
              <div key={title} className={`equip-card card animate-fadeUp delay-${(i % 4) + 1}`}>
                <div className="equip-emoji">{emoji}</div>
                <h3 className="equip-title">{title}</h3>
                <Link to="/contact" className="equip-link">Enquire →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container cta-inner animate-fadeUp">
          <h2 className="display-md cta-heading">
            Not sure which service <em>you need?</em>
          </h2>
          <p className="cta-desc">
            Talk to our care coordinator — free, no obligation advice.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-lime btn-lg">Talk to Us</Link>
            <Link to="/booking" className="btn" style={{ color: "rgba(255,255,255,.85)" }}>
              Book Directly →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
