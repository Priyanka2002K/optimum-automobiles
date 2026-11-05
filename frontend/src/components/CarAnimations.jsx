
import { useEffect, useState } from "react";
import "./CarAnimations.css";

// 1. HERO CAR IMAGE SLIDER
export function HeroCarSlider({ cars = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || cars.length < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cars.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [paused, cars.length]);

  if (!cars.length) return null;

  return (
    <div
      className="hero-car-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {cars.map((car, index) => (
        <img
          key={car.id || car.image}
          src={car.image}
          alt={car.name}
          className={`hero-car-image ${
            index === activeIndex ? "active" : ""
          }`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}

// 2. FEATURED INVENTORY SLIDER
export function FeaturedInventorySlider({ cars = [] }) {
  const [paused, setPaused] = useState(false);

  if (!cars.length) return null;

  // Duplicate cards for a seamless continuous loop.
  const loopCars = [...cars, ...cars];

  return (
    <div
      className={`inventory-slider ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="inventory-slider-track">
        {loopCars.map((car, index) => (
          <article
            className="inventory-slide-card"
            key={`${car.id || car.name}-${index}`}
          >
            <img src={car.image} alt={car.name} loading="lazy" />

            <div className="inventory-slide-content">
              <h3>{car.name}</h3>
              <p>{car.details}</p>
              <strong>{car.price}</strong>

              <a href={car.href || "/inventory"}>
                View Details →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// 3. BRAND LOGO SLIDER
export function BrandLogoSlider({ brands = [] }) {
  if (!brands.length) return null;

  return (
    <div className="brand-slider">
      <div className="brand-slider-track">
        {[...brands, ...brands].map((brand, index) => (
          <a
            key={`${brand.name}-${index}`}
            className="brand-slide"
            href={brand.href || "/inventory"}
            aria-label={`Explore ${brand.name} cars`}
          >
            {brand.logo ? (
              <img src={brand.logo} alt={brand.name} loading="lazy" />
            ) : (
              <span>{brand.name}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
