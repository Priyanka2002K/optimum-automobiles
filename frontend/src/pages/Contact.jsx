import React, { useEffect, useState } from "react";
import "./Contact.css";

const showroomImage =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85";

const ctaImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85";

const heroImages = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=90",
];

const services = [
  {
    icon: "♧",
    title: "BUY LUXURY CARS",
    desc: "Browse our curated premium pre-owned cars.",
  },
  {
    icon: "♢",
    title: "SELL YOUR CAR",
    desc: "Request a valuation and sell your vehicle quickly.",
  },
  {
    icon: "▤",
    title: "FINANCE ASSISTANCE",
    desc: "Compare available lender options and get the best rates.",
  },
  {
    icon: "♧",
    title: "AFTER SALES SUPPORT",
    desc: "Dedicated support even after purchase.",
  },
  {
    icon: "♧",
    title: "RC TRANSFER",
    desc: "Complete ownership transfer support.",
  },
  {
    icon: "⌕",
    title: "INSPECTION HELP",
    desc: "Certified inspection and vehicle history.",
  },
];

const faqs = [
  {
    q: "What are your showroom opening hours?",
    a: "We are open Monday to Sunday from 10:00 AM to 8:00 PM.",
  },
  {
    q: "Do you offer test drives?",
    a: "Yes. Contact our team to schedule a test drive for an available vehicle.",
  },
  {
    q: "Do you provide finance options?",
    a: "We can help you explore applicable financing options through our lending partners.",
  },
  {
    q: "Can I exchange my car?",
    a: "Yes. Contact us with your vehicle details to discuss an exchange or valuation.",
  },
  {
    q: "Do you help with RC transfer?",
    a: "Yes. Our team can guide you through the ownership transfer documentation and process.",
  },
  {
    q: "Is there a warranty on the cars?",
    a: "Warranty coverage depends on the vehicle. Please ask our team for the details of a specific car.",
  },
];

function ContactUs() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    // Connect your backend API here to send the inquiry.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="optimum-page">
      <main>
        {/* HERO SECTION */}
        <section className="contact-intro" id="contact">
          <div className="intro-copy">
            <div className="eyebrow">
              <i />
              OPTIMUM AUTOMOBILES
            </div>

            <div className="breadcrumb">HOME / CONTACT</div>

            <h1>
              CONTACT
              <br />
              <span>OUR TEAM</span>
            </h1>

            <p>
              Expert help for buying, selling, finance and ownership.
            </p>

            <div className="intro-buttons">
              <a className="btn btn-red" href="#inventory">
                EXPLORE INVENTORY <b>→</b>
              </a>

              <a className="btn btn-outline" href="#contact-form">
                CONTACT OUR TEAM <b>→</b>
              </a>
            </div>

            <div className="trust-points">
              <span>
                ♧ <small>Inspection<br />360° Cars</small>
              </span>

              <span>
                ▤ <small>Clear Price<br />Breakdown</small>
              </span>

              <span>
                ♧ <small>Finance<br />Assistance</small>
              </span>

              <span>
                ♧ <small>Transfer<br />Support</small>
              </span>
            </div>
          </div>

          <div className="intro-photo">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={`hero-slide ${
                  heroIndex === index ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden={heroIndex !== index}
              />
            ))}

            <div className="hero-photo-overlay" />

            <div className="hero-image-indicators">
              {heroImages.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={heroIndex === index ? "active" : ""}
                  onClick={() => setHeroIndex(index)}
                  aria-label={`Show car image ${index + 1}`}
                />
              ))}
            </div>

            <div className="standard-badge">
              <b>♧</b>
              <span>
                <strong>THE OPTIMUM STANDARD</strong>
                <br />
                Verified. Transparent. Ready.
              </span>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS, FORM AND LOCATION */}
        <section className="contact-grid section-wrap">
          <article className="panel contact-details">
            <h2>GET IN TOUCH</h2>

            <div className="detail-row">
              <span className="round-icon">☎</span>
              <div>
                <h3>CALL US</h3>
                <a href="tel:+919937377878">
                  +91 9937 377 878
                </a>
              </div>
            </div>

            <div className="detail-row">
              <span className="round-icon">✉</span>
              <div>
                <h3>EMAIL US</h3>
                <a href="mailto:admin@optimumautomobiles.com">
                  admin@optimumautomobiles.com
                </a>
                <a href="mailto:admin@premiumautomobiles@gmail.com">
                  admin@premiumautomobiles@gmail.com
                </a>
              </div>
            </div>

            <div className="detail-row">
              <span className="round-icon">♧</span>
              <div>
                <h3>VISIT US</h3>
                <p>
                  Geras, Imperium Rise, Pune, Maharashtra, 411057
                  <br />
                  Mon - Sun: 10:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            <a
              className="btn btn-red directions-btn"
              href="https://www.google.com/maps/search/?api=1&query=Geras+Imperium+Rise+Pune"
              target="_blank"
              rel="noreferrer"
            >
              GET DIRECTIONS <b>→</b>
            </a>
          </article>

          {/* CONTACT FORM */}
          <article className="panel message-panel" id="contact-form">
            <h2>SEND US A MESSAGE</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Full Name *
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </label>

                <label>
                  Phone Number *
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </label>

                <label>
                  Email Address *
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </label>

                <label>
                  Subject *
                  <select name="subject" defaultValue="" required>
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option>Buying a car</option>
                    <option>Selling a car</option>
                    <option>Finance assistance</option>
                    <option>Ownership transfer</option>
                    <option>Other inquiry</option>
                  </select>
                </label>

                <label>
                  Interested In
                  <select name="interest" defaultValue="Luxury Cars">
                    <option>Luxury Cars</option>
                    <option>SUVs</option>
                    <option>Sedans</option>
                    <option>Finance</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Preferred Contact Method
                  <select name="contactMethod" defaultValue="Phone">
                    <option>Phone</option>
                    <option>Email</option>
                    <option>WhatsApp</option>
                  </select>
                </label>

                <label className="full-width">
                  Message *
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Type your message here"
                    required
                  />
                </label>
              </div>

              <button className="btn btn-red submit-btn" type="submit">
                ➤ &nbsp; SEND MESSAGE
              </button>

              {submitted && (
                <p className="form-success" role="status">
                  Thank you! Your message has been received by the form.
                  Connect a backend/API to deliver it to your team.
                </p>
              )}
            </form>
          </article>

          {/* PROFESSIONAL LOCATION */}
          <article className="panel location-panel">
            <h2>OUR LOCATION</h2>

            <div className="location-map-frame">
              <iframe
                title="Optimum Automobiles location at Geras Imperium Rise, Pune"
                src="https://www.google.com/maps?q=Geras+Imperium+Rise,+Pune&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="location-address">
              <span className="location-pin">⌖</span>
              <div>
                <h3>OPTIMUM AUTOMOBILES</h3>
                <p>Geras Imperium Rise, Pune, Maharashtra 411057</p>
              </div>
            </div>

            <a
              className="location-directions"
              href="https://www.google.com/maps/search/?api=1&query=Geras+Imperium+Rise+Pune"
              target="_blank"
              rel="noreferrer"
            >
              OPEN IN GOOGLE MAPS <b>↗</b>
            </a>
          </article>
        </section>

        {/* SHOWROOM AND SERVICES */}
        <section className="showroom-services section-wrap" id="services">
          <article className="showroom-panel panel">
            <img
              src={showroomImage}
              alt="Luxury car inside a showroom"
            />

            <div>
              <div className="eyebrow">
                <i />
                VISIT OUR SHOWROOM
              </div>

              <h2>
                VISIT OUR
                <br />
                SHOWROOM
              </h2>

              <p>
                Explore the current collection in person and get a
                feel for the vehicles at our showroom.
              </p>

              <a className="btn btn-red" href="#inventory">
                VIEW INVENTORY <b>→</b>
              </a>
            </div>
          </article>

          <article className="services-panel panel">
            <h2>HOW WE HELP YOU</h2>

            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  className="service-card"
                  key={service.title}
                  style={{ "--card-index": index }}
                >
                  <span className="service-icon">{service.icon}</span>

                  <h3>{service.title}</h3>

                  <p>{service.desc}</p>

                  <a href="#contact-form">
                    LEARN MORE <b>→</b>
                  </a>
                </article>
              ))}
            </div>
          </article>
        </section>

        {/* FAQ */}
        <section className="faq-section section-wrap" id="faqs">
          <div className="center-eyebrow">
            <i />
            HAPPY CUSTOMERS
          </div>

          <h2>FREQUENTLY ASKED QUESTIONS</h2>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <article
                className={`faq-item ${
                  openFaq === index ? "is-open" : ""
                }`}
                key={faq.q}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <span className="faq-arrow">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DREAM CAR CTA */}
        <section
          className="dream-cta"
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              rgba(246,250,255,.98) 0%,
              rgba(246,250,255,.91) 42%,
              rgba(246,250,255,.12) 100%
            ), url(${ctaImage})`,
          }}
        >
          <div className="section-wrap">
            <h2>Ready to Find Your Dream Car?</h2>

            <p>
              Explore our handpicked collection of luxury pre-owned cars.
            </p>

            <div className="intro-buttons">
              <a className="btn btn-red" href="#inventory">
                BROWSE INVENTORY <b>→</b>
              </a>

              <a
                className="btn btn-outline"
                href="https://wa.me/919937377878"
                target="_blank"
                rel="noreferrer"
              >
                ◉ &nbsp; CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;