import { Link } from "react-router-dom";
import "./Home.css";

const STATS = [
  { n: "15K+",  label: "Home Care Visits" },
  { n: "1,024", label: "Caregivers" },
  { n: "26K+",  label: "Patients Cured" },
  { n: "51K+",  label: "Lab Tests Done" },
];

const FEATURES = [
  {
    icon: "🏠",
    title: "Home Visits",
    desc: "Professional care delivered at your doorstep — no hospital trips needed.",
  },
  {
    icon: "🩺",
    title: "Expert Doctors",
    desc: "Board-certified physicians for consultations, follow-ups & prescriptions.",
  },
  {
    icon: "🏥",
    title: "Nursing Care",
    desc: "Trained nurses for post-surgery, IV therapy & wound management.",
  },
  {
    icon: "🦽",
    title: "Physiotherapy",
    desc: "Personalised rehab plans for mobility, pain relief & recovery.",
  },
  {
    icon: "🧓",
    title: "Elder Care",
    desc: "Compassionate daily assistance & companionship for seniors.",
  },
  {
    icon: "🧪",
    title: "Lab at Home",
    desc: "Blood draws & diagnostics — results delivered digitally.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Patient's daughter",
    avatar: "PS",
    text: "Abhiwell's nurses were incredibly kind with my father post his surgery. The whole team made recovery at home stress-free.",
    rating: 5,
  },
  {
    name: "Rajan Mehta",
    role: "Patient",
    avatar: "RM",
    text: "Booking was effortless and the physiotherapist arrived on time every single day. Highly recommend their rehab program.",
    rating: 5,
  },
  {
    name: "Kavitha Nair",
    role: "Caregiver",
    avatar: "KN",
    text: "The elder care support for my mother is outstanding. Staff is warm, professional and genuinely caring.",
    rating: 5,
  },
];

const PARTNERS = [
  "Apollo Hospitals", "Manipal Hospitals", "Dr Lal PathLabs",
  "Redcliffe Labs", "SRL Diagnostics", "Thyrocare",
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--lime-500)">
          <path d="M7 1l1.763 3.573L13 5.18l-3 2.924.708 4.131L7 10.235l-3.708 2L4 8.104 1 5.18l4.237-.607L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-shape" aria-hidden />
        <div className="container hero-inner">
          <div className="hero-content animate-fadeUp">
            <div className="badge badge-teal animate-fadeUp delay-1">
              <span className="pulse-dot" /> Available 24 × 7
            </div>
            <h1 className="display-xl hero-heading animate-fadeUp delay-2">
              Healthcare <em>at Home</em>,<br />
              On Your Terms.
            </h1>
            <p className="hero-desc animate-fadeUp delay-3">
              Trusted doctors, nurses & caregivers coming to you — in Bangalore
              and beyond. Book in minutes, heal in comfort.
            </p>
            <div className="hero-actions animate-fadeUp delay-4">
              <Link to="/booking" className="btn btn-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="3" width="14" height="12" rx="2" stroke="white" strokeWidth="1.6"/>
                  <path d="M6 2v3M12 2v3M2 8h14" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M9 11v3M7.5 12.5h3" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                Book an Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Our Services
              </Link>
            </div>
            <div className="hero-trust animate-fadeUp delay-5">
              <div className="trust-avatars">
                {["A","B","C","D"].map(l => <span key={l} className="avatar-circle">{l}</span>)}
              </div>
              <p className="trust-text"><strong>26,000+</strong> patients recovered with us</p>
            </div>
          </div>
          <div className="hero-visual animate-fadeIn delay-3">
            <div className="hero-card">
              <div className="hero-card-icon">🏥</div>
              <div>
                <div className="hero-card-title">Next Available</div>
                <div className="hero-card-sub">Today · 2:00 PM</div>
              </div>
              <div className="hero-card-badge">Now</div>
            </div>
            <div className="hero-blob" aria-hidden />
            <div className="hero-ring" aria-hidden />
            <div className="hero-stats-pill animate-fadeUp delay-6">
              <span className="pill-icon">⭐</span>
              <span><strong>4.9</strong> avg rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-band">
        <div className="container stats-grid">
          {STATS.map(({ n, label }, i) => (
            <div key={label} className={`stat-item animate-fadeUp delay-${i + 1}`}>
              <span className="stat-n">{n}</span>
              <span className="stat-l">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-py features-section">
        <div className="container">
          <div className="section-header animate-fadeUp">
            <p className="section-label">What We Offer</p>
            <h2 className="display-lg">Comprehensive care,<br /><em>close to home</em></h2>
            <p className="section-desc">
              From emergency response to elder companionship — we cover every health need
              with trained professionals you can trust.
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map(({ icon, title, desc }, i) => (
              <div key={title} className={`feature-card card animate-fadeUp delay-${(i % 3) + 1}`}>
                <div className="feature-icon">{icon}</div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
                <Link to="/services" className="feature-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="features-cta animate-fadeUp delay-4">
            <Link to="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-section section-py">
        <div className="container why-inner">
          <div className="why-visual animate-fadeIn">
            <div className="why-blob" aria-hidden />
            <div className="why-checklist">
              {[
                "Qualified & background-verified staff",
                "Same-day booking available",
                "GPS-tracked caregiver arrivals",
                "Transparent pricing, no hidden fees",
                "24×7 family support helpline",
              ].map((item, i) => (
                <div key={i} className={`why-check animate-slideRight delay-${i + 1}`}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="why-content animate-fadeUp">
            <p className="section-label">Why Abhiwell</p>
            <h2 className="display-lg">Your family's health<br />is our <em>mission</em></h2>
            <p className="why-desc">
              We understand modern life doesn't always allow you to be present.
              Our team brings hospital-grade care to your living room, handled with
              professionalism and genuine compassion.
            </p>
            <Link to="/about" className="btn btn-primary">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-py testimonials-section">
        <div className="container">
          <div className="section-header animate-fadeUp">
            <p className="section-label">Testimonials</p>
            <h2 className="display-lg">Families who trust us</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map(({ name, role, avatar, text, rating }, i) => (
              <div key={name} className={`testimonial-card card animate-fadeUp delay-${i + 1}`}>
                <Stars count={rating} />
                <p className="testimonial-text">"{text}"</p>
                <div className="testimonial-author">
                  <span className="t-avatar">{avatar}</span>
                  <div>
                    <div className="t-name">{name}</div>
                    <div className="t-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="partners-section section-py">
        <div className="container">
          <p className="section-label" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Our Trusted Lab & Hospital Partners
          </p>
          <div className="partners-strip">
            {PARTNERS.map(p => (
              <div key={p} className="partner-pill">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container cta-inner animate-fadeUp">
          <h2 className="display-md cta-heading">
            Ready to experience care <em>at home</em>?
          </h2>
          <p className="cta-desc">
            Book your first appointment in under 2 minutes. Our team will reach you within hours.
          </p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-lime btn-lg">
              Book Now — It's Free
            </Link>
            <Link to="/contact" className="btn" style={{ color: "rgba(255,255,255,.85)" }}>
              Talk to us →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
