import { useState } from "react";
import "./Estimate.css";

const initialForm = {
  make: "",
  model: "",
  year: "",
  fuel: "",
  transmission: "",
  kilometres: "",
  city: "",
  condition: "",
  owners: "",
  name: "",
  phone: "",
  email: "",
  contactMethod: "WhatsApp",
};

const makes = [
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Land Rover",
  "Volvo",
  "Lexus",
  "Toyota",
  "Honda",
  "Hyundai",
  "Kia",
  "Skoda",
  "Volkswagen",
  "Other",
];

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1999 },
  (_, i) => currentYear - i
);

export default function Estimate() {
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSuccess(false);
    setError("");
  };

  const submit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    console.info("Car valuation enquiry (frontend demo):", form);

    setSuccess(true);
    setForm(initialForm);
  };

  return (
    <main className="estimate-page">

      {/* INTRODUCTION */}
      <section className="estimate-intro">
        <div className="estimate-wrap estimate-intro-grid">

          <div className="estimate-intro-copy">
            <span className="estimate-kicker">
              <i />
              OPTIMUM AUTOMOBILES · CAR VALUATION
            </span>

            <h1>
              Get a Free Estimate
              <br />
              <em>for Your Car.</em>
            </h1>

            <p>
              Find out what your car could be worth. Share a few
              details about your vehicle and our team will contact
              you to discuss an estimate.
            </p>

            <div className="estimate-trust">
              <span>✓ Free initial estimate</span>
              <span>✓ Transparent process</span>
              <span>✓ Personal assistance</span>
            </div>
          </div>

          <div className="estimate-visual">
            <img
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85"
              alt="Premium car at a showroom"
            />

            <div className="estimate-badge">
              <b>✓</b>

              <span>
                <strong>THE OPTIMUM STANDARD</strong>
                <small>
                  Clear. Considered. Customer-focused.
                </small>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* VALUATION FORM */}
      <section className="estimate-form-area" id="valuation-form">
        <div className="estimate-wrap">

          <header className="estimate-heading">
            <span className="estimate-kicker">
              <i />
              START YOUR VALUATION
            </span>

            <h2>Tell Us About Your Car</h2>

            <p>
              Complete the details below so our team can better
              understand your vehicle.
            </p>
          </header>

          {success && (
            <div className="estimate-success" role="status">
              <strong>
                Thank you! Your form passed validation.
              </strong>

              <span>
                This is a frontend demo. Connect it to your backend
                to send and store enquiries.
              </span>
            </div>
          )}

          {error && (
            <div className="estimate-error" role="alert">
              {error}
            </div>
          )}

          <form className="estimate-form" onSubmit={submit}>

            {/* VEHICLE DETAILS */}
            <FormHeading
              number="01"
              title="Your Vehicle Details"
              description="Tell us about the car you want to sell."
            />

            <div className="estimate-fields">

              <Field label="Car Brand" required>
                <select
                  name="make"
                  value={form.make}
                  onChange={update}
                  required
                >
                  <option value="">Select brand</option>

                  {makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Car Model" required>
                <input
                  name="model"
                  value={form.model}
                  onChange={update}
                  placeholder="e.g. 3 Series, C-Class"
                  required
                />
              </Field>

              <Field label="Manufacturing Year" required>
                <select
                  name="year"
                  value={form.year}
                  onChange={update}
                  required
                >
                  <option value="">Select year</option>

                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Fuel Type" required>
                <select
                  name="fuel"
                  value={form.fuel}
                  onChange={update}
                  required
                >
                  <option value="">Select fuel type</option>

                  {[
                    "Petrol",
                    "Diesel",
                    "CNG",
                    "Electric",
                    "Hybrid",
                  ].map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Transmission" required>
                <select
                  name="transmission"
                  value={form.transmission}
                  onChange={update}
                  required
                >
                  <option value="">Select transmission</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </Field>

              <Field label="Kilometres Driven" required>
                <input
                  type="number"
                  min="0"
                  name="kilometres"
                  value={form.kilometres}
                  onChange={update}
                  placeholder="e.g. 45000"
                  required
                />
              </Field>

              <Field label="Registration City" required>
                <input
                  name="city"
                  value={form.city}
                  onChange={update}
                  placeholder="e.g. Pune"
                  required
                />
              </Field>

              <Field label="Vehicle Condition">
                <select
                  name="condition"
                  value={form.condition}
                  onChange={update}
                >
                  <option value="">Select condition</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Needs attention</option>
                </select>
              </Field>

            </div>

            <div className="estimate-divider" />

            {/* OWNERSHIP AND RECORDS */}
            <FormHeading
              number="02"
              title="Ownership & Records"
              description="Optional details that help us understand your vehicle."
            />

            <div className="estimate-fields estimate-fields-four">

              <Field label="Insurance">
                <select
                  name="insured"
                  value={form.insured || ""}
                  onChange={update}
                >
                  <option value="">Select option</option>
                  <option>Currently insured</option>
                  <option>Not currently insured</option>
                  <option>Not sure</option>
                </select>
              </Field>

              <Field label="Accident History">
                <select
                  name="accident"
                  value={form.accident || ""}
                  onChange={update}
                >
                  <option value="">Select option</option>
                  <option>No known accidents</option>
                  <option>Previous accident</option>
                  <option>Prefer to discuss</option>
                </select>
              </Field>

              <Field label="Service Records">
                <select
                  name="service"
                  value={form.service || ""}
                  onChange={update}
                >
                  <option value="">Select option</option>
                  <option>Available</option>
                  <option>Partially available</option>
                  <option>Not available</option>
                </select>
              </Field>

              <Field label="Previous Owners">
                <select
                  name="owners"
                  value={form.owners}
                  onChange={update}
                >
                  <option value="">Select owners</option>
                  <option>1st owner</option>
                  <option>2nd owner</option>
                  <option>3rd owner</option>
                  <option>4 or more</option>
                </select>
              </Field>

            </div>

            <div className="estimate-divider" />

            {/* CONTACT DETAILS */}
            <FormHeading
              number="03"
              title="Your Contact Details"
              description="How should our team get in touch with you?"
            />

            <div className="estimate-fields">

              <Field label="Full Name" required>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </Field>

              <Field label="Mobile Number" required>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength="10"
                  value={form.phone}
                  onChange={update}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  required
                />
              </Field>

              <Field label="Email Address">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </Field>

              <Field label="Preferred Contact Method">
                <select
                  name="contactMethod"
                  value={form.contactMethod}
                  onChange={update}
                >
                  <option>WhatsApp</option>
                  <option>Phone</option>
                  <option>Email</option>
                </select>
              </Field>

            </div>

            <div className="estimate-form-bottom">
              <p>
                Your details will be used to respond to your valuation
                enquiry. An estimate is not a guaranteed final sale price.
              </p>

              <button type="submit" className="estimate-submit">
                GET MY FREE ESTIMATE
                <span>→</span>
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="estimate-process">
        <div className="estimate-wrap">

          <header className="estimate-heading estimate-center">
            <span className="estimate-kicker">
              <i />
              SIMPLE & TRANSPARENT
            </span>

            <h2>How It Works</h2>
          </header>

          <div className="estimate-steps">

            <article>
              <b className="estimate-step">01</b>
              <span className="estimate-icon">▤</span>
              <h3>Share Your Details</h3>
              <p>
                Tell us about your car using our valuation form.
              </p>
            </article>

            <article>
              <b className="estimate-step">02</b>
              <span className="estimate-icon">⌕</span>
              <h3>Get an Estimate</h3>
              <p>
                Our team reviews your information and discusses
                an estimated value.
              </p>
            </article>

            <article>
              <b className="estimate-step">03</b>
              <span className="estimate-icon">↗</span>
              <h3>Discuss Next Steps</h3>
              <p>
                If you wish to proceed, we'll explain inspection
                and selling options.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* WHY OPTIMUM AUTOMOBILES */}
      <section className="estimate-standard">
        <div className="estimate-wrap estimate-standard-grid">

          <div>
            <span className="estimate-kicker">
              <i />
              THE OPTIMUM STANDARD
            </span>

            <h2>A Clearer Way to Sell Your Car.</h2>

            <p>
              Get helpful guidance from your first enquiry through
              the next steps.
            </p>
          </div>

          <div className="estimate-benefits">

            <article>
              <b>₹</b>
              <div>
                <h3>Free Initial Estimate</h3>
                <p>
                  Start with a valuation enquiry without an initial
                  estimation fee.
                </p>
              </div>
            </article>

            <article>
              <b>✓</b>
              <div>
                <h3>Transparent Process</h3>
                <p>
                  Understand the factors that may influence your car's value.
                </p>
              </div>
            </article>

            <article>
              <b>◎</b>
              <div>
                <h3>Personal Assistance</h3>
                <p>
                  Discuss your vehicle and questions with our team.
                </p>
              </div>
            </article>

            <article>
              <b>▣</b>
              <div>
                <h3>Documentation Guidance</h3>
                <p>
                  Get guidance on paperwork involved in selling your vehicle.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="estimate-help">
        <div className="estimate-wrap estimate-help-inner">

          <div>
            <span className="estimate-kicker">
              <i />
              WE'RE HERE TO HELP
            </span>

            <h2>Have Questions About Your Car's Value?</h2>

            <p>
              Talk to our team about the valuation process and next steps.
            </p>
          </div>

          <div className="estimate-help-actions">
            <a
              className="estimate-action estimate-action-red"
              href="tel:+919373778780"
            >
              CALL OUR TEAM <span>↗</span>
            </a>

            <a
              className="estimate-action estimate-action-outline"
              href="https://wa.me/919373778780"
              target="_blank"
              rel="noreferrer"
            >
              CHAT ON WHATSAPP <span>↗</span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

function FormHeading({ number, title, description }) {
  return (
    <div className="estimate-form-heading">
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="estimate-field">
      {label}
      {required && <em> *</em>}
      {children}
    </label>
  );
}