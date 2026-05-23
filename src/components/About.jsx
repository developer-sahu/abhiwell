import { Link } from "react-router-dom";
import "./About.css";

const VALUES = [
  { emoji: "💚", title: "Compassion", desc: "We create a welcoming, supportive environment for every patient and their family — no matter what they're going through." },
  { emoji: "🤝", title: "Respect", desc: "Every individual is treated with dignity and kindness, irrespective of background, age, or belief." },
  { emoji: "🏆", title: "Excellence", desc: "We are committed to the highest standards of care, continuously improving our services and training." },
  { emoji: "🔬", title: "Integrity", desc: "Honest and transparent in everything — from pricing to treatment plans. Patient-first, always." },
  { emoji: "👥", title: "Teamwork", desc: "Our doctors, nurses, and caregivers collaborate seamlessly to deliver holistic, effective care." },
  { emoji: "⚡", title: "Responsiveness", desc: "Fast, reliable response times — because when it comes to health, every minute matters." },
];

const TEAM = [
  { initials: "Dr. A", name: "Dr. Anil Kumar", role: "Medical Director, MBBS, MD", bg: "#0a8f9e" },
  { initials: "Dr. S", name: "Dr. Sunita Rao",  role: "Lead Physiotherapist, MPT",  bg: "#087381" },
  { initials: "N. P", name: "Nurse Priya M.", role: "Senior Care Nurse, B.Sc Nursing", bg: "#065c67" },
];

export default function About() {
  return (
    <div className="about-page">

      {/* ── PAGE HERO ── */}
      <section className="page-hero about-hero">
        <div className="container">
          <div className="page-hero-content animate-fadeUp">
            <p className="section-label">Our Story</p>
            <h1 className="display-xl">
              Caring for lives,<br />
              <em>one home at a time</em>
            </h1>
            <p className="page-hero-desc">
              Abhiwell Home Health Care was founded with a single belief — every person
              deserves hospital-quality care in the comfort of their own home. Since our
              founding we've served over 15,000 families across Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section-py">
        <div className="container mission-grid">
          <div className="mission-text animate-fadeUp">
            <p className="section-label">Who We Are</p>
            <h2 className="display-lg">
              A team you can<br /><em>trust at home</em>
            </h2>
            <p className="mission-desc">
              At Abhiwell, our highly trained and professional team of doctors, nurses,
              attendants and physiotherapists deliver a broad spectrum of services — from
              elderly care to post-operative recovery — right at your doorstep.
            </p>
            <p className="mission-desc">
              We also partner with corporates and industries to manage employee health with
              our trained on-site medical expertise.
            </p>
            <Link to="/booking" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>
          <div className="mission-visual animate-fadeIn delay-2">
            <div className="mission-blob" />
            <div className="mission-stat-cards">
              {[
                { n: "10+", l: "Years of Service" },
                { n: "50+", l: "Expert Professionals" },
                { n: "99%", l: "Patient Satisfaction" },
              ].map(({ n, l }) => (
                <div key={l} className="mission-stat-card">
                  <span className="msc-n">{n}</span>
                  <span className="msc-l">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-py values-section">
        <div className="container">
          <div className="section-header animate-fadeUp">
            <p className="section-label">What Drives Us</p>
            <h2 className="display-lg">Our core <em>values</em></h2>
          </div>
          <div className="values-grid">
            {VALUES.map(({ emoji, title, desc }, i) => (
              <div key={title} className={`value-card card animate-fadeUp delay-${(i % 3) + 1}`}>
                <div className="value-emoji">{emoji}</div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-py">
        <div className="container">
          <div className="section-header animate-fadeUp">
            <p className="section-label">Our People</p>
            <h2 className="display-lg">Meet the <em>team</em></h2>
            <p className="section-desc">
              Every member of Abhiwell is handpicked, background-verified, and committed
              to your loved one's well-being.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map(({ initials, name, role, bg }, i) => (
              <div key={name} className={`team-card card animate-fadeUp delay-${i + 1}`}>
                <div className="team-avatar" style={{ background: bg }}>
                  {initials}
                </div>
                <h3 className="team-name">{name}</h3>
                <p className="team-role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="about-cta">
        <div className="container cta-inner animate-fadeUp">
          <h2 className="display-md" style={{ color: "white", marginBottom: ".75rem" }}>
            Ready to experience the <em>Abhiwell</em> difference?
          </h2>
          <p className="cta-desc">Join 26,000+ families who trust us with their health.</p>
          <Link to="/booking" className="btn btn-lime btn-lg">
            Book Your First Visit
          </Link>
        </div>
      </section>

    </div>
  );
}
