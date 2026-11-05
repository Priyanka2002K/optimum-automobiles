
import React, { useState, useEffect } from "react";
import "./OurWork.css";

const categories = [
  "All Stories",
  "Customer Deliveries",
  "Inspections",
  "Featured Cars",
  "Ownership Support",
  "Testimonials",
];

const stories = [
  {
    id: 1,
    category: "Customer Deliveries",
    label: "CUSTOMER DELIVERY",
    title: "BMW X5 Delivered in Pune",
    description: "A new journey begins with Optimum.",
    date: "12 May 2025",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    category: "Inspections",
    label: "INSPECTION",
    title: "Comprehensive 150+ Point Check",
    description: "Quality you can trust.",
    date: "08 May 2025",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    category: "Featured Cars",
    label: "FEATURED CAR",
    title: "Mercedes-Benz E-Class",
    description: "Luxury. Performance. Unmatched elegance.",
    date: "05 May 2025",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    category: "Ownership Support",
    label: "OWNERSHIP SUPPORT",
    title: "Hassle-Free Documentation",
    description: "Support at every step of ownership.",
    date: "02 May 2025",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    category: "Testimonials",
    label: "CUSTOMER STORY",
    title: "A Trusted Buying Experience",
    description: "Real feedback from our happy customers.",
    date: "28 Apr 2025",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    category: "Inspections",
    label: "INSPECTION",
    title: "Tyre & Brake Inspection",
    description: "Essential checks for safety and performance.",
    date: "22 Apr 2025",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1632823471565-1ecdf5c7e4c8?auto=format&fit=crop&w=1000&q=85",
  },
];

const trustFeatures = [
  {
    icon: "🚘",
    title: "Customer Deliveries",
    description: "Real stories from happy owners.",
  },
  {
    icon: "🛡",
    title: "Inspections",
    description: "Verified & detailed vehicle reports.",
  },
  {
    icon: "☆",
    title: "Featured Cars",
    description: "Top picks for discerning buyers.",
  },
  {
    icon: "♡",
    title: "Ownership Support",
    description: "Guidance at every step.",
  },
  {
    icon: "☏",
    title: "Testimonials",
    description: "Hear from our valued customers.",
  },
];

const vehicles = [
  {
    id: 1,
    name: "BMW X5 – 2022",
    price: "₹ 82,00,000",
    fuel: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "BMW 5 Series – 2021",
    price: "₹ 65,00,000",
    fuel: "Diesel",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Range Rover Sport – 2022",
    price: "₹ 1,15,00,000",
    fuel: "Diesel",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Porsche 911 – 2021",
    price: "₹ 1,75,00,000",
    fuel: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Pune",
    text: "Optimum Automobiles made the entire process smooth and stress-free. The car condition was exactly as promised!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85",
  },
  {
    name: "Rohit S.",
    city: "Mumbai",
    text: "The team was professional and made the whole buying process easy.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85",
  },
  {
    name: "Anjali K.",
    city: "Pune",
    text: "Great selection of cars and a smooth customer experience.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=85",
  },
];

const journeySteps = [
  ["⌕", "Explore", "Our Inventory"],
  ["▦", "Book a Test", "Drive"],
  ["♡", "Complete", "Documentation"],
  ["🚘", "Drive Home", "with Confidence"],
];

const heroImages = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=90",
];

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeHero, setActiveHero] = useState(0);

  const filteredStories =
    activeCategory === "All Stories"
      ? stories.slice(0, 3)
      : stories.filter((story) => story.category === activeCategory);

  const whatsapp =
    "https://wa.me/919937377878?text=" +
    encodeURIComponent(
      "Hi Optimum Automobiles, I would like to know more about your cars."
    );

  // Automatically rotate hero car images
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(heroInterval);
  }, []);

  // Automatically rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(
        (current) => (current + 1) % testimonials.length
      );
    }, 4000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const changeTestimonial = (direction) => {
    setActiveTestimonial((current) =>
      (current + direction + testimonials.length) %
      testimonials.length
    );
  };

  return (
    <main className="our-work">

      {/* HERO */}
      <section className="ow-hero">

        <div className="ow-hero-slides">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`ow-hero-slide ${
                activeHero === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>

        <div className="ow-container">
          <div className="ow-hero-content">
            <p className="ow-eyebrow">OUR WORK</p>

            <h1>
              Our Work.
              <span>Your Next Chapter.</span>
            </h1>

            <p className="ow-hero-description">
              Explore our collection of luxury cars, customer stories,
              and professional services that set us apart.
            </p>

            <a href="#gallery" className="ow-primary-btn">
              Explore Our Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* STORY FILTERS */}
      <section className="ow-gallery" id="gallery">
        <div className="ow-container">

          <div className="ow-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category ? "selected" : ""
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* STORY COLLECTION */}
          <div className="ow-section-heading">
            <div>
              <p className="ow-eyebrow">OUR WORK COLLECTION</p>
              <h2>Real Cars. Real People. Real Stories.</h2>
              <p>
                From happy customers to certified inspections —
                here's what we've done.
              </p>
            </div>

            <a href="#gallery" className="ow-text-link">
              View All Stories →
            </a>
          </div>

          <div className="ow-story-grid">
            {filteredStories.map((story) => (
              <article className="ow-card" key={story.id}>
                <div
                  className="ow-card-image"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedStory(story)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedStory(story);
                    }
                  }}
                >
                  <img src={story.image} alt={story.title} />

                  <span className="ow-image-label">
                    {story.label}
                  </span>

                  <button
                    type="button"
                    className="ow-card-arrow"
                    aria-label={`View ${story.title}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedStory(story);
                    }}
                  >
                    ›
                  </button>
                </div>

                <div className="ow-card-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>

                  <div className="ow-card-meta">
                    <span>▦ {story.date}</span>
                    <span>♧ {story.city}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <p className="ow-empty">
              No stories available in this category yet.
            </p>
          )}
        </div>
      </section>

            {/* WHY IT MATTERS */}
<section className="ow-trust">
  <div className="ow-container ow-trust-layout">
    <div className="ow-trust-heading">
      <p className="ow-eyebrow">WHY IT MATTERS</p>
      <h2>Because Your Trust Drives Us.</h2>
      <p>
        Every section of our work reflects our commitment to
        quality, transparency and customer satisfaction.
      </p>
    </div>

    <div className="ow-trust-grid">
      {trustFeatures.map((feature) => (
        <div className="ow-trust-item" key={feature.title}>
          <div className="ow-trust-icon">
            {feature.icon}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* VEHICLE GALLERY */}
      <section className="ow-vehicle-gallery">
        <div className="ow-container">

          <div className="ow-section-heading">
            <div>
              <p className="ow-eyebrow">OUR WORK GALLERY</p>
              <h2>A Glimpse of Our Premium Collection</h2>
            </div>

            <a href="/inventory" className="ow-text-link">
              View All in Gallery →
            </a>
          </div>

          <div className="ow-vehicle-grid">
            {vehicles.map((vehicle) => (
              <article className="ow-vehicle-card" key={vehicle.id}>

                <div className="ow-vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} />

                  <div className="ow-vehicle-overlay">
                    <div className="ow-vehicle-overlay-info">
                      <h3>{vehicle.name}</h3>

                      <div className="ow-vehicle-meta">
                        <span>⛽ {vehicle.fuel}</span>
                        <span>⚙ {vehicle.transmission}</span>
                      </div>

                      <strong>{vehicle.price}</strong>

                      <a href={`/inventory/${vehicle.id}`}>
                        ▣ View Details →
                      </a>
                    </div>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIAL */}
      <section className="ow-testimonial-section">
        <div className="ow-testimonial-inner">

          <div className="ow-testimonial-heading">
            <p className="ow-eyebrow">CUSTOMER EXPERIENCES</p>
            <h2>What Our Customers Say</h2>
            <p>Real feedback. Real satisfaction.</p>

            <div className="ow-slider-controls">
              <button
                type="button"
                onClick={() => changeTestimonial(-1)}
                aria-label="Previous testimonial"
              >
                ‹
              </button>

              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={`ow-slider-dot ${
                    activeTestimonial === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}

              <button
                type="button"
                onClick={() => changeTestimonial(1)}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>

          <article
            className="ow-testimonial-card"
            key={activeTestimonial}
          >
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
            />

            <div>
              <span className="ow-quote-mark">“</span>
              <p>{testimonials[activeTestimonial].text}</p>
              <h3>{testimonials[activeTestimonial].name}</h3>
              <small>{testimonials[activeTestimonial].city}</small>
            </div>
          </article>
        </div>
      </section>

     {/* CUSTOMER JOURNEY */}
<section className="ow-journey">
  <div className="ow-container ow-journey-inner">
    <div className="ow-journey-heading">
      <p>FROM SHOWROOM TO DRIVEWAY</p>
      <h2>A Seamless Journey</h2>
    </div>

    <div className="ow-steps">
      {journeySteps.map(([icon, title, description], index) => (
        <div className="ow-step" key={title}>
          <div className="ow-step-icon">
            {icon}
          </div>

          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="ow-cta">
        <div className="ow-container">
          <div className="ow-cta-content">
            <p className="ow-eyebrow">YOUR NEXT DRIVE STARTS HERE</p>
            <h2>Ready to Find Your Dream Car?</h2>
            <p>
              Explore our handpicked collection of luxury pre-owned cars.
            </p>

            <div className="ow-cta-buttons">
              <a href="/inventory" className="ow-primary-btn">
                Browse Inventory →
              </a>

              <a
                href={whatsapp}
                className="ow-outline-btn"
                target="_blank"
                rel="noreferrer"
              >
                ◉ Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STORY MODAL */}
      {selectedStory && (
        <div
          className="ow-modal-overlay"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="ow-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ow-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="ow-modal-close"
              onClick={() => setSelectedStory(null)}
              aria-label="Close story"
            >
              ×
            </button>

            <img
              src={selectedStory.image}
              alt={selectedStory.title}
            />

            <div className="ow-modal-content">
              <p className="ow-eyebrow">{selectedStory.label}</p>
              <h2 id="ow-modal-title">{selectedStory.title}</h2>
              <p>{selectedStory.description}</p>
              <small>
                {selectedStory.date} · {selectedStory.city}
              </small>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="ow-primary-btn"
              >
                Ask Us on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
