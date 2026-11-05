
import React, { useEffect, useState } from "react";
import "./Home.css";

const inventory = [
  {
    tag: "NEW ARRIVAL",
    name: "BMW X5",
    year: "2022",
    km: "32,000 km",
    fuel: "Diesel",
    price: "₹ 82,00,000",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "POPULAR",
    name: "Mercedes-Benz E-Class",
    year: "2021",
    km: "42,000 km",
    fuel: "Petrol",
    price: "₹ 56,00,000",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "CERTIFIED",
    name: "Audi Q7",
    year: "2020",
    km: "52,000 km",
    fuel: "Diesel",
    price: "₹ 68,00,000",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "BEST VALUE",
    name: "Range Rover Velar",
    year: "2021",
    km: "38,000 km",
    fuel: "Petrol",
    price: "₹ 69,00,000",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",
  },
];

const heroImages = inventory.map((car) => ({
  image: car.image,
  alt: car.name,
}));

const benefits = [
  ["♢", "360° Inspection Report", "Detailed check for safety, performance and peace of mind."],
  ["◉", "Vehicle History", "Verified history and documentation."],
  ["♡", "Premium Condition", "Only the best, handpicked luxury cars."],
  ["▤", "Transparent Deals", "No hidden charges. Total clarity."],
  ["♧", "After Sales Support", "Service, warranty and ongoing support."],
  ["₹", "Flexible Financing", "Tailored loan options for your convenience."],
];

const collections = [
  {
    name: "SUVs",
    text: "Power. Comfort. Versatility.",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sedans",
    text: "Elegance in every drive.",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sports Cars",
    text: "Performance. Redefined.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Luxury Cars",
    text: "The finest in class.",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=85",
  },
];

const stories = [
  {
    quote:
      "Smooth process, excellent support and a fantastic car. Highly recommended!",
    name: "Rohit S.",
    city: "Pune",
  },
  {
    quote:
      "The team was professional and transparent. I'm so happy with my purchase!",
    name: "Anjali K.",
    city: "Mumbai",
  },
  {
    quote:
      "From inspection to delivery, everything was seamless. Great experience!",
    name: "Vikram P.",
    city: "Bengaluru",
  },
];

const brands = [
  "BMW",
  "MERCEDES-BENZ",
  "AUDI",
  "LAND ROVER",
  "PORSCHE",
  "JAGUAR",
  "MASERATI",
  "VOLVO",
];

function Eyebrow({ children }) {
  return (
    <div className="oa-eyebrow">
      <span />
      {children}
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

// HERO IMAGE SLIDER
function HeroCarSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || heroImages.length < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="oa-hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroImages.map((car, index) => (
        <img
          key={car.alt}
          src={car.image}
          alt={car.alt}
          className={`oa-hero-slide ${
            index === activeIndex ? "is-active" : ""
          }`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}

// FEATURED INVENTORY SLIDER
function InventorySlider() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`oa-inventory-slider ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="oa-inventory-track">
        {[...inventory, ...inventory].map((car, index) => (
          <article
            className="oa-car-card"
            key={`${car.name}-${index}`}
          >
            <div
              className="oa-car-image"
              style={{ backgroundImage: `url("${car.image}")` }}
            >
              <span className="oa-tag">{car.tag}</span>

              <button
                className="oa-fav"
                type="button"
                aria-label={`Save ${car.name}`}
              >
                ♡
              </button>
            </div>

            <div className="oa-car-info">
              <h3>{car.name}</h3>

              <p>
                {car.year} | {car.km} | {car.fuel} | Automatic
              </p>

              <strong>{car.price}</strong>

              <a className="oa-small-button" href="#contact">
                View Details <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// BRAND SLIDER
function BrandSlider() {
  return (
    <div className="oa-brand-slider">
      <div className="oa-brand-track">
        {[...brands, ...brands].map((brand, index) => (
          <div
            className="oa-brand-item"
            key={`${brand}-${index}`}
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OptimumAutomobiles() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <div className="oa-site">
      <main>
{/* HERO */}
<section className="oa-hero" id="home">
  <div className="oa-hero-photo">
    <HeroCarSlider />
  </div>

  <div className="oa-hero-copy">
    <Eyebrow>PRE-OWNED LUXURY CARS</Eyebrow>

    <h1>
      Drive Luxury.
      <br />
      <em>Own Excellence.</em>
    </h1>

    <p>
      Explore our collection of premium pre-owned luxury cars.
      Verified, inspected and ready for your next journey.
    </p>

    <div className="oa-hero-buttons">
      <a className="oa-button oa-button-red" href="#inventory">
        Explore Inventory <Arrow />
      </a>

      <a className="oa-button oa-button-outline" href="#sell">
        Sell Your Car <Arrow />
      </a>
    </div>
  </div>
</section>
        {/* CAR SEARCH */}
        <section className="oa-search-wrap">
          <form
            className="oa-search"
            onSubmit={(event) => {
              event.preventDefault();

              document.getElementById("inventory")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {[
              [
                "Make",
                ["Any Make", "BMW", "Mercedes-Benz", "Audi", "Range Rover"],
              ],
              [
                "Model",
                ["Any Model", "X5", "E-Class", "Q7", "Velar"],
              ],
              [
                "Budget",
                ["Any Budget", "Under ₹50 lakh", "₹50–75 lakh", "₹75 lakh+"],
              ],
              [
                "Year",
                ["Any Year", "2024", "2023", "2022", "2021", "2020"],
              ],
              [
                "Fuel Type",
                ["Any Fuel Type", "Petrol", "Diesel", "Hybrid", "Electric"],
              ],
            ].map(([label, options]) => (
              <label className="oa-field" key={label}>
                <span>{label}</span>

                <select defaultValue={options[0]}>
                  {options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ))}

            <button className="oa-button oa-button-red" type="submit">
              Search Cars <Arrow />
            </button>
          </form>
        </section>

        {/* TRUST FEATURES */}
        <section className="oa-trust" id="services">
          {[
            [
              "♢",
              "Verified & Inspected",
              "360° inspection for complete peace of mind.",
            ],
            [
              "◇",
              "Transparent Pricing",
              "No hidden costs. Just honest value.",
            ],
            [
              "▤",
              "Easy Documentation",
              "Hassle-free ownership transfer support.",
            ],
            [
              "₹",
              "Finance Assistance",
              "Flexible loan options and quick approvals.",
            ],
            [
              "♧",
              "Dedicated Support",
              "From enquiry to delivery, we're with you.",
            ],
          ].map(([icon, title, text]) => (
            <div className="oa-trust-item" key={title}>
              <span className="oa-line-icon">{icon}</span>
              <b>{title}</b>
              <p>{text}</p>
            </div>
          ))}
        </section>

        {/* FEATURED INVENTORY SLIDER */}
        <section className="oa-section oa-inventory" id="inventory">
          <div className="oa-section-heading">
            <div>
              <Eyebrow>FEATURED INVENTORY</Eyebrow>
              <h2>Handpicked. Premium. Yours.</h2>
              <p>
                Explore our latest collection of luxury pre-owned cars.
              </p>
            </div>

            <a className="oa-text-link" href="#collections">
              View All Inventory <Arrow />
            </a>
          </div>

          <InventorySlider />
        </section>

        {/* BROWSE BY BRAND SLIDER */}
        <section className="oa-brands">
          <Eyebrow>BROWSE BY BRAND</Eyebrow>
          <h2>World-Class Brands. One Destination.</h2>

          <BrandSlider />
        </section>

        {/* WHY CHOOSE US */}
        <section className="oa-section oa-why" id="about">
          <div className="oa-why-copy">
            <Eyebrow>WHY CHOOSE OPTIMUM AUTOMOBILES?</Eyebrow>

            <h2>More Than Cars. It’s Trust.</h2>

            <p>
              We go beyond just selling cars. We deliver a complete
              luxury car buying experience.
            </p>

            <a className="oa-button oa-button-gold" href="#contact">
              Learn More <Arrow />
            </a>
          </div>

          <div className="oa-benefit-grid">
            {benefits.map(([icon, title, text]) => (
              <article className="oa-benefit" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* POPULAR COLLECTIONS */}
        <section className="oa-section oa-collections" id="collections">
          <div className="oa-section-heading">
            <div>
              <Eyebrow>POPULAR COLLECTIONS</Eyebrow>

              <h2>Find Your Perfect Match</h2>

              <p>
                Explore by body style or lifestyle. Your dream car is
                just a click away.
              </p>
            </div>

            <a className="oa-text-link" href="#inventory">
              View All Collections <Arrow />
            </a>
          </div>

          <div className="oa-collection-grid">
            {collections.map((item) => (
              <a
                href="#inventory"
                className="oa-collection-card"
                key={item.name}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(3,22,39,.92), transparent 75%), url("${item.image}")`,
                }}
              >
                <span>
                  <b>{item.name}</b>
                  <small>{item.text}</small>
                </span>

                <Arrow />
              </a>
            ))}
          </div>
        </section>

        {/* CUSTOMER STORIES */}
        <section className="oa-stories">
          <div className="oa-stories-intro">
            <Eyebrow>CUSTOMER STORIES</Eyebrow>

            <h2>Real People. Real Journeys.</h2>

            <p>
              Hear from our happy customers and see their Optimum experience.
            </p>

            <a className="oa-button oa-button-gold" href="#contact">
              Learn More <Arrow />
            </a>
          </div>

          {stories.map((story) => (
            <article className="oa-story-card" key={story.name}>
              <div className="oa-story-avatar">
                {story.name.charAt(0)}
              </div>

              <p>“{story.quote}”</p>
              <b>{story.name}</b>
              <small>{story.city}</small>
              <div className="oa-stars">★★★★★</div>
            </article>
          ))}
        </section>

        {/* SHOWROOM AND ENQUIRY */}
        <section className="oa-showroom" id="contact">
          <div className="oa-showroom-copy">
            <Eyebrow>GET IN TOUCH</Eyebrow>

            <h2>Visit Our Showroom</h2>

            <p>
              Experience our premium collection in person. Our team is
              here to assist you.
            </p>

            <ul>
              <li>⌖ Pune, Maharashtra</li>
              <li>◷ Mon – Sat: 10:00 AM – 8:00 PM</li>
              <li>☎ +91 99973 37787</li>
            </ul>

            <a
              className="oa-button oa-button-gold"
              href="https://maps.google.com/?q=Luxury+car+showroom+Pune"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <Arrow />
            </a>
          </div>

          <div
            className="oa-showroom-photo"
            role="img"
            aria-label="Luxury car showroom"
          />

          <form className="oa-enquiry" onSubmit={handleSubmit}>
            <h3>Quick Enquiry</h3>

            <p>
              Tell us what you're looking for and we'll get back to you soon.
            </p>

            <div className="oa-form-row">
              <input
                placeholder="Your Name"
                aria-label="Your name"
                required
              />

              <input
                placeholder="Phone Number"
                aria-label="Phone number"
                type="tel"
                required
              />
            </div>

            <input
              placeholder="Email Address"
              aria-label="Email address"
              type="email"
            />

            <textarea
              placeholder="Your Message"
              aria-label="Your message"
              rows="3"
              required
            />

            <button className="oa-button oa-button-gold" type="submit">
              Send Message <Arrow />
            </button>
          </form>
        </section>
      </main>

      {/* WHATSAPP BUTTON */}
      <a
        className="oa-whatsapp-float"
        href="https://wa.me/919997337787"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        ◉
      </a>
    </div>
  );
}
