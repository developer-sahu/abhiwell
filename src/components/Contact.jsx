import "./Contact.css";

const CONTACTS = [
  {
    emoji: "📞",
    title: "Phone",
    primary: "+91 98765 43210",
    secondary: "Mon–Sat, 8am–8pm",
    href: "tel:+919876543210",
    cta: "Call Now",
  },
  {
    emoji: "✉️",
    title: "Email",
    primary: "Abhiwellhealthcare@gmail.com",
    secondary: "Replies within 2 hours",
    href: "mailto:Abhiwellhealthcare@gmail.com",
    cta: "Send Email",
  },
  {
    emoji: "📍",
    title: "Location",
    primary: "Bangalore, Karnataka",
    secondary: "India — serving city-wide",
    href: "https://maps.google.com",
    cta: "Get Directions",
  },
];

export default function Contact() {
  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="page-hero contact-hero">
        <div className="container">
          <div className="page-hero-content animate-fadeUp">
            <p className="section-label">Get In Touch</p>
            <h1 className="display-xl">
              We're here<br /><em>for you</em>
            </h1>
            <p className="page-hero-desc">
              Have a question, need a quote, or just want to talk to someone about care options?
              Our team is ready to help — no bots, real people.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="section-py">
        <div className="container">
          <div className="contact-cards">
            {CONTACTS.map(({ emoji, title, primary, secondary, href, cta }, i) => (
              <div key={title} className={`contact-card card animate-fadeUp delay-${i + 1}`}>
                <div className="contact-card-icon">{emoji}</div>
                <h3 className="contact-card-title">{title}</h3>
                <p className="contact-card-primary">{primary}</p>
                <p className="contact-card-secondary">{secondary}</p>
                <a href={href} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK MESSAGE ── */}
      <section className="section-py contact-form-section">
        <div className="container contact-form-grid">
          <div className="contact-form-info animate-fadeUp">
            <p className="section-label">Quick Message</p>
            <h2 className="display-lg">
              Send us a<br /><em>message</em>
            </h2>
            <p className="contact-info-desc">
              Fill in the form and we'll get back to you within a couple of hours.
              For urgent care, please call us directly.
            </p>
            <div className="contact-hours">
              <div className="hours-row">
                <span className="hours-day">Mon – Sat</span>
                <span className="hours-time">8:00 AM – 8:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">9:00 AM – 5:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Emergency</span>
                <span className="hours-time hours-24">24 × 7 on call</span>
              </div>
            </div>
          </div>
          <form
            className="contact-form card animate-fadeUp delay-2"
            onSubmit={e => { e.preventDefault(); alert("Message sent! We'll be in touch soon."); e.target.reset(); }}
          >
            <div className="form-row">
              <div className="field">
                <label>First Name</label>
                <input type="text" placeholder="Priya" required />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" placeholder="Sharma" required />
              </div>
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea placeholder="Tell us how we can help…" rows="4" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="map-section animate-fadeIn">
        <div className="container" style={{ paddingBottom: "3rem" }}>
          <div className="map-wrap">
            <iframe
              title="Abhiwell Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59126.127369913476!2d77.65194326361615!3d12.988124555990238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172c583b2515%3A0x22797a5cd52775da!2sS.B%20Complex!5e1!3m2!1sen!2sin!4v1779336317574!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
