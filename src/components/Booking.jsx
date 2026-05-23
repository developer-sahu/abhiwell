import { useState } from "react";
import "./Booking.css";

const SERVICES = [
  "Patient Care", "Elder Care", "Nursing Service",
  "Physiotherapy", "Home Health Checkup", "Doctor Consultation", "Blood Tests",
];

const STEPS = ["Personal", "Service", "Confirm"];

function StepIndicator({ current }) {
  return (
    <div className="step-indicator">
      {STEPS.map((label, i) => (
        <div key={label} className={`step-item ${i < current ? "done" : ""} ${i === current ? "active" : ""}`}>
          <div className="step-circle">
            {i < current
              ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              : <span>{i + 1}</span>
            }
          </div>
          <span className="step-label">{label}</span>
          {i < STEPS.length - 1 && <div className={`step-line ${i < current ? "done" : ""}`} />}
        </div>
      ))}
    </div>
  );
}

export default function Booking() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    address: "", pincode: "", service: "", date: "", time: "", message: "",
  });

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const handleChange = e => set(e.target.name, e.target.value);

  const next = () => setStep(s => Math.min(s + 1, 2));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="container">
          <div className="booking-success animate-fadeUp">
            <div className="success-icon">✅</div>
            <h2 className="display-lg">Booking Confirmed!</h2>
            <p>
              Thank you, <strong>{form.firstName}</strong>! We've received your booking for
              <strong> {form.service}</strong>. Our team will call you at <strong>{form.phone}</strong>
              {" "}to confirm your appointment.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => { setSubmitted(false); setStep(0); setForm({ firstName:"",lastName:"",phone:"",email:"",address:"",pincode:"",service:"",date:"",time:"",message:"" }); }}>
              Book Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-fadeUp">
            <p className="section-label">Schedule a Visit</p>
            <h1 className="display-xl">
              Book your<br /><em>home care</em>
            </h1>
            <p className="page-hero-desc">
              Simple 3-step process. We'll confirm within 2 hours of your request.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py booking-section">
        <div className="container">
          <div className="booking-wrap">
            <StepIndicator current={step} />

            <form className="booking-form card animate-fadeUp delay-2" onSubmit={submit}>

              {/* Step 0: Personal */}
              {step === 0 && (
                <div className="form-step animate-fadeUp">
                  <h2 className="step-heading">Your Details</h2>
                  <div className="form-row">
                    <div className="field">
                      <label>First Name *</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Priya" required />
                    </div>
                    <div className="field">
                      <label>Last Name *</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Sharma" required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Phone Number *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                  </div>
                  <div className="field">
                    <label>Email (optional)</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  </div>
                  <div className="field">
                    <label>Address *</label>
                    <textarea name="address" value={form.address} onChange={handleChange} placeholder="Your full address for the home visit" rows="3" required />
                  </div>
                  <div className="field">
                    <label>Pincode *</label>
                    <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="560001" required />
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn btn-primary" onClick={next}
                      disabled={!form.firstName || !form.phone || !form.address || !form.pincode}>
                      Next: Choose Service →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1: Service */}
              {step === 1 && (
                <div className="form-step animate-fadeUp">
                  <h2 className="step-heading">Service & Schedule</h2>
                  <div className="field">
                    <label>Service Required *</label>
                    <div className="service-pills">
                      {SERVICES.map(s => (
                        <button
                          key={s}
                          type="button"
                          className={`service-pill ${form.service === s ? "selected" : ""}`}
                          onClick={() => set("service", s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label>Preferred Date</label>
                      <input name="date" type="date" value={form.date} onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div className="field">
                      <label>Preferred Time</label>
                      <select name="time" value={form.time} onChange={handleChange}>
                        <option value="">Any time</option>
                        <option>8:00 AM – 10:00 AM</option>
                        <option>10:00 AM – 12:00 PM</option>
                        <option>12:00 PM – 2:00 PM</option>
                        <option>2:00 PM – 4:00 PM</option>
                        <option>4:00 PM – 6:00 PM</option>
                        <option>6:00 PM – 8:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label>Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Any specific requirements, medical history snippets, or notes for our team…" rows="4" />
                  </div>
                  <div className="form-actions two">
                    <button type="button" className="btn btn-secondary" onClick={back}>← Back</button>
                    <button type="button" className="btn btn-primary" onClick={next} disabled={!form.service}>
                      Review Booking →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Confirm */}
              {step === 2 && (
                <div className="form-step animate-fadeUp">
                  <h2 className="step-heading">Review & Confirm</h2>
                  <div className="review-grid">
                    <ReviewItem label="Name" value={`${form.firstName} ${form.lastName}`} />
                    <ReviewItem label="Phone" value={form.phone} />
                    {form.email && <ReviewItem label="Email" value={form.email} />}
                    <ReviewItem label="Address" value={`${form.address}, ${form.pincode}`} />
                    <ReviewItem label="Service" value={form.service} highlight />
                    {form.date && <ReviewItem label="Date" value={form.date} />}
                    {form.time && <ReviewItem label="Time" value={form.time} />}
                    {form.message && <ReviewItem label="Notes" value={form.message} />}
                  </div>
                  <div className="review-note">
                    By confirming, you agree that our team may contact you to finalise the appointment details.
                  </div>
                  <div className="form-actions two">
                    <button type="button" className="btn btn-secondary" onClick={back}>← Edit</button>
                    <button type="submit" className="btn btn-primary">
                      Confirm Booking ✓
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function ReviewItem({ label, value, highlight }) {
  return (
    <div className={`review-item ${highlight ? "review-highlight" : ""}`}>
      <span className="review-label">{label}</span>
      <span className="review-value">{value}</span>
    </div>
  );
}
