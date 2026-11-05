import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const vehicles = [
  {
    name: "BMW 5 Series",
    year: "2019",
    mileage: "42,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "₹ 54,50,000",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mercedes-Benz E-Class",
    year: "2021",
    mileage: "40,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹ 49,90,000",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Land Rover Range Rover Sport",
    year: "2022",
    mileage: "10,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "₹ 92,60,000",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Audi A6",
    year: "2019",
    mileage: "48,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹ 41,50,000",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=85",
  },
];

const helpItems = [
  {
    icon: "▱",
    title: "Vehicle Information",
    text: "Detailed specifications, history and condition information.",
  },
  {
    icon: "◇",
    title: "Transparent Pricing",
    text: "Clear and competitive pricing with no hidden costs.",
  },
  {
    icon: "▣",
    title: "Finance Assistance",
    text: "Support with applicable financing options.",
  },
  {
    icon: "▤",
    title: "Ownership Transfer",
    text: "Guidance with documentation and transfer process.",
  },
];

const benefits = [
  {
    icon: "▱",
    title: "Carefully Presented Inventory",
    text: "Explore a curated selection of premium vehicles.",
  },
  {
    icon: "▤",
    title: "Transparent Information",
    text: "Understand vehicle details before you decide.",
  },
  {
    icon: "♧",
    title: "Personalized Assistance",
    text: "Get guidance based on your requirements.",
  },
  {
    icon: "↗",
    title: "Finance & Ownership Support",
    text: "Assistance with financing, documentation and transfer.",
  },
  {
    icon: "✣",
    title: "Help Beyond the Showroom",
    text: "We can help you find the right vehicle from our extended network.",
  },
];

const checklist = [
  "Inspection & condition reports",
  "Recorded mileage & specifications",
  "Service & maintenance records",
  "Ownership & documentation",
  "Pricing & additional charges",
  "Finance & warranty options",
];

function SectionLabel({ children }) {
  return <div className="about-label">{children}</div>;
}

function About() {
  return (
    <main className="about-page">
      {/* Hero: full-width image background; the height is controlled in About.css. */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <SectionLabel>ABOUT OPTIMUM AUTOMOBILES</SectionLabel>
          <h1>
            Premium Pre-Owned Cars.
            <span>A Team That Cares.</span>
          </h1>
          <p>
            At Optimum Automobiles, we bring together premium pre-owned
            vehicles, transparent information, and personalized assistance to
            make finding your next car a more confident experience.
          </p>
          <p>
            Based in Pune, we help customers explore their options, understand
            vehicle details, and navigate the journey from selection to
            ownership.
          </p>

          <div className="about-trust-points">
            <div>
              <span className="about-line-icon">♢</span>
              <span><b>Verified Vehicles</b><small>Quality Checked</small></span>
            </div>
            <div>
              <span className="about-line-icon">▤</span>
              <span><b>Clear Price Breakdown</b><small>No Hidden Costs</small></span>
            </div>
            <div>
              <span className="about-line-icon">♧</span>
              <span><b>Finance Assistance</b><small>Flexible Options</small></span>
            </div>
            <div>
              <span className="about-line-icon">♙</span>
              <span><b>Transfer Support</b><small>Hassle Free</small></span>
            </div>
          </div>
        </div>

        <div className="about-location-tag">
          <span>⌖</span> Pune, Maharashtra
        </div>
      </section>

      {/* Who we are */}
      <section className="about-who about-wrap">
        <div className="about-who-image">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
            alt="Premium black sports car"
            loading="lazy"
          />
        </div>
        <div className="about-who-copy">
          <SectionLabel>WHO WE ARE</SectionLabel>
          <h2>
            A Different Perspective on
            <span>Pre-Owned Luxury</span>
          </h2>
          <p>
            Optimum Automobiles is a Pune-based destination for premium
            pre-owned cars, bringing together vehicle selection, clear
            information and coordinated ownership support.
          </p>
          <p>
            We understand that purchasing a pre-owned car involves more than
            choosing a make and model. Customers also need to understand the
            vehicle's condition, pricing, documentation and available
            ownership services.
          </p>
          <p>
            Our approach focuses on helping customers explore their options
            with greater clarity and receive assistance throughout the buying
            process.
          </p>
        </div>
      </section>

      {/* How we help */}
      <section className="about-help">
        <div className="about-wrap about-help-inner">
          <div className="about-help-copy">
            <SectionLabel>HOW WE HELP</SectionLabel>
            <h2>
              More Than Just a Sale.
              <span>We're With You Always.</span>
            </h2>
            <p>
              From vehicle details to ownership support, our team is here to
              make the process simple, transparent and convenient.
            </p>
            <Link className="about-btn about-btn-red" to="/services">
              Learn More <span>→</span>
            </Link>
          </div>

          <div className="about-help-grid">
            {helpItems.map((item) => (
              <article className="about-help-card" key={item.title}>
                <span className="about-card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standard and why choose us */}
      <section className="about-standard">
        <div className="about-standard-left">
          <SectionLabel>THE OPTIMUM STANDARD</SectionLabel>
          <h2>Verified. Transparent. Ready.</h2>
          <p>
            Every vehicle goes through a detailed review process and we provide
            clear information, so you can make a confident decision.
          </p>

          <div className="about-checklist">
            <h3>VEHICLE INFORMATION CHECKLIST</h3>
            <div className="about-checklist-grid">
              {checklist.map((item) => (
                <div key={item}><span>✓</span>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-standard-right">
          <div className="about-standard-content">
            <h2>Why Choose Optimum Automobiles?</h2>
            <p>
              We go beyond selling cars. We provide a complete premium
              car-buying experience with reliable support at every step.
            </p>
            <div className="about-benefits-grid">
              {benefits.map((item) => (
                <article className="about-benefit" key={item.title}>
                  <span className="about-benefit-icon">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured inventory */}
      <section className="about-inventory about-wrap">
        <div className="about-inventory-copy">
          <SectionLabel>FEATURED INVENTORY</SectionLabel>
          <h2>Explore Our Latest Collection</h2>
          <p>
            A small preview of our premium pre-owned cars. Browse our full
            inventory for more options.
          </p>
          <Link className="about-btn about-btn-outline" to="/inventory">
            View All Inventory <span>→</span>
          </Link>
        </div>

        <div className="about-vehicle-grid">
          {vehicles.map((car) => (
            <article className="about-vehicle-card" key={car.name}>
              <div className="about-vehicle-image">
                <img src={car.image} alt={car.name} loading="lazy" />
                <span className="about-heart" aria-hidden="true">♡</span>
              </div>
              <div className="about-vehicle-info">
                <h3>{car.name}</h3>
                <p>{car.year} <span>|</span> {car.mileage}</p>
                <p className="about-vehicle-spec">
                  {car.fuel} <span>|</span> {car.transmission}
                </p>
                <div className="about-vehicle-bottom">
                  <strong>{car.price}</strong>
                  <Link to="/inventory">View Details <span>→</span></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Showroom */}
      <section className="about-showroom about-wrap">
        <div className="about-showroom-image">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
            alt="Premium cars at a showroom"
            loading="lazy"
          />
        </div>

        <div className="about-showroom-details">
          <SectionLabel>VISIT OUR SHOWROOM</SectionLabel>
          <h2>Visit Us in Pune</h2>
          <p><span>⌖</span> Geras Imperium Rise,<br />Pune, Maharashtra, 411057</p>
          <p><span>☎</span> +91 93737 78780</p>
          <p><span>◷</span> Mon - Sun: 10:00 AM - 8:00 PM</p>
          <a
            className="about-btn about-btn-red"
            href="https://maps.google.com/?q=Geras+Imperium+Rise+Pune"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <span>→</span>
          </a>
        </div>

        <div className="about-map">
          <iframe
            title="Optimum Automobiles location in Pune"
            src="https://maps.google.com/maps?q=Geras%20Imperium%20Rise%2C%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Final assistance CTA */}
      <section className="about-assistance">
        <div className="about-wrap about-assistance-inner">
          <div className="about-assistance-copy">
            <SectionLabel>LOOKING FOR SOMETHING SPECIFIC?</SectionLabel>
            <h2>We're Here to Help You Find the Perfect Car.</h2>
            <p>
              Tell us what you're looking for and our team will get in touch
              with suitable options from our inventory or extended network.
            </p>
          </div>

          <div className="about-assistance-actions">
            <Link className="about-btn about-btn-red" to="/contact">
              Get Assistance <span>→</span>
            </Link>
            <a className="about-btn about-btn-outline" href="tel:+919373778780">
              Call +91 93737 78780
            </a>
          </div>

          <div className="about-assistance-image" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Shared Footer is rendered from App.jsx. */}
      <a
        className="about-whatsapp"
        href="https://wa.me/919373778780"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Optimum Automobiles on WhatsApp"
      >
        <span className="about-whatsapp-icon">◉</span>
        <span><b>Chat on WhatsApp</b><small>Need help?</small></span>
      </a>
    </main>
  );
}

export default About;
