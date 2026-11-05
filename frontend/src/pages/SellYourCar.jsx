import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SellYourCar.css";

function SellYourCar() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    transmission: "",
    kilometers: "",
    city: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Optimum Automobiles! I want to sell my car.

Name: ${formData.name}
Phone: ${formData.phone}
Brand: ${formData.brand}
Model: ${formData.model}
Year: ${formData.year}
Fuel: ${formData.fuelType}
Transmission: ${formData.transmission}
Kilometers: ${formData.kilometers}
City: ${formData.city}`;

    // Replace with the dealership's verified WhatsApp number.
    const whatsappNumber = "";

    if (!whatsappNumber) {
      alert("Please contact the dealership to submit your car details.");
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="sell-car-page">
      <section className="sell-car-hero">
        <div className="sell-car-hero-content">
          <span className="sell-car-eyebrow">
            SELL YOUR CAR WITH CONFIDENCE
          </span>

          <h1>
            Your Car Deserves
            <br />
            <span>The Right Value.</span>
          </h1>

          <p>
            Upgrade your driving experience. Get your car evaluated by our
            team and enjoy a transparent, hassle-free selling process.
          </p>

          <div className="sell-car-hero-actions">
            <a href="#car-details" className="sell-car-primary-btn">
              Get Your Car Valued <span>↗</span>
            </a>

            <a href="#how-it-works" className="sell-car-secondary-btn">
              How It Works
            </a>
          </div>

          <div className="sell-car-trust-points">
            <div>
              <span className="trust-icon">✓</span>
              <span>Transparent Evaluation</span>
            </div>
            <div>
              <span className="trust-icon">✓</span>
              <span>Hassle-Free Process</span>
            </div>
            <div>
              <span className="trust-icon">✓</span>
              <span>Dedicated Assistance</span>
            </div>
          </div>
        </div>

        <div className="sell-car-hero-visual">
          <div className="sell-car-image-frame">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
              alt="Premium car ready for its next owner"
            />

            <div className="sell-car-image-badge">
              <span className="badge-dot"></span>
              Your Next Move Starts Here
            </div>
          </div>

          <div className="sell-car-floating-card">
            <span className="floating-card-icon">₹</span>
            <div>
              <strong>Know Your Car's Worth</strong>
              <p>Start with a personalised evaluation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sell-car-benefits">
        <div className="sell-car-benefit">
          <span>01</span>
          <div>
            <h3>Simple Process</h3>
            <p>Share your car details to get started.</p>
          </div>
        </div>

        <div className="sell-car-benefit">
          <span>02</span>
          <div>
            <h3>Expert Evaluation</h3>
            <p>Our team reviews your vehicle's details.</p>
          </div>
        </div>

        <div className="sell-car-benefit">
          <span>03</span>
          <div>
            <h3>Personal Assistance</h3>
            <p>Get guidance through the next steps.</p>
          </div>
        </div>
      </section>

      <section
        className="sell-car-form-section"
        id="car-details"
      >
        <div className="sell-car-form-intro">
          <span className="sell-car-eyebrow">START YOUR JOURNEY</span>
          <h2>
            Let's Find Your Car's
            <br />
            <span>Right Value.</span>
          </h2>
          <p>
            Tell us a little about yourself and your car. Our team can use
            these details to understand your vehicle and guide you further.
          </p>

          <div className="sell-car-contact-note">
            <span>i</span>
            <p>
              Please provide accurate vehicle information so our team can
              assist you efficiently.
            </p>
          </div>
        </div>

        <form className="sell-car-form" onSubmit={handleSubmit}>
          <div className="sell-car-form-heading">
            <div>
              <span>VEHICLE INFORMATION</span>
              <h3>Tell Us About Your Car</h3>
            </div>
            <span className="sell-car-step">STEP 01</span>
          </div>

          <div className="sell-car-input-grid">
            <label>
              Full Name *
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Mobile Number *
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Car Brand *
              <input
                type="text"
                name="brand"
                placeholder="e.g. BMW, Mercedes-Benz"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Car Model *
              <input
                type="text"
                name="model"
                placeholder="Enter your car model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Manufacturing Year *
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Select year</option>
                {Array.from(
                  { length: 30 },
                  (_, index) => new Date().getFullYear() - index
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Fuel Type *
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                required
              >
                <option value="">Select fuel type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="CNG">CNG</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </label>

            <label>
              Transmission *
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                required
              >
                <option value="">Select transmission</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </label>

            <label>
              Kilometers Driven *
              <input
                type="number"
                name="kilometers"
                placeholder="e.g. 45000"
                min="0"
                value={formData.kilometers}
                onChange={handleChange}
                required
              />
            </label>

            <label className="sell-car-full-width">
              Current City *
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button type="submit" className="sell-car-submit-btn">
            Submit Car Details <span>→</span>
          </button>

          <p className="sell-car-form-disclaimer">
            Your details will be used to help the dealership respond to your
            enquiry. Submission requires a configured contact channel.
          </p>
        </form>
      </section>

      <section className="sell-car-process" id="how-it-works">
        <div className="sell-car-section-heading">
          <span className="sell-car-eyebrow">HOW IT WORKS</span>
          <h2>
            Selling Your Car,
            <br />
            <span>Made Simpler.</span>
          </h2>
        </div>

        <div className="sell-car-process-grid">
          <article>
            <span className="process-number">01</span>
            <div className="process-line"></div>
            <h3>Share Your Details</h3>
            <p>
              Fill in the form with your contact information and vehicle
              details.
            </p>
          </article>

          <article>
            <span className="process-number">02</span>
            <div className="process-line"></div>
            <h3>Vehicle Evaluation</h3>
            <p>
              Our team reviews the information and discusses the next steps
              with you.
            </p>
          </article>

          <article>
            <span className="process-number">03</span>
            <div className="process-line"></div>
            <h3>Discuss Your Options</h3>
            <p>
              Review the evaluation and proceed based on mutually agreed
              terms.
            </p>
          </article>
        </div>
      </section>

      <section className="sell-car-bottom-cta">
        <div>
          <span>READY FOR YOUR NEXT DRIVE?</span>
          <h2>Let's Get Your Car Moving.</h2>
          <p>
            Talk to our team and take the first step towards selling your car.
          </p>
        </div>

        <Link to="/contact" className="sell-car-cta-btn">
          Contact Our Team <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default SellYourCar;