
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./BuyUsedCars.css";

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz E-Class",
    variant: "E 200 Expression",
    brand: "Mercedes-Benz",
    year: 2022,
    price: 5200000,
    km: 18500,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    owners: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
    featured: true,
  },
  {
    id: 2,
    name: "BMW 5 Series",
    variant: "530i M Sport",
    brand: "BMW",
    year: 2023,
    price: 6100000,
    km: 12000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    owners: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
    featured: true,
  },
  {
    id: 3,
    name: "Audi Q5",
    variant: "Technology",
    brand: "Audi",
    year: 2022,
    price: 4800000,
    km: 24000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    owners: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    variant: "Legender 4x2",
    brand: "Toyota",
    year: 2023,
    price: 4200000,
    km: 22000,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    owners: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
  {
    id: 5,
    name: "BMW 3 Series",
    variant: "330Li M Sport",
    brand: "BMW",
    year: 2021,
    price: 3900000,
    km: 31000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    owners: "2nd Owner",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
  {
    id: 6,
    name: "Range Rover Evoque",
    variant: "R-Dynamic SE",
    brand: "Land Rover",
    year: 2022,
    price: 5700000,
    km: 19000,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    owners: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=85",
    featured: true,
  },
];

const formatPrice = (price) => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }

  return `₹${(price / 100000).toFixed(2)} L`;
};

const initialFilters = {
  brand: "",
  bodyType: "",
  fuel: "",
  transmission: "",
  owners: "",
  minPrice: "",
  maxPrice: "",
  minYear: "",
  maxKm: "",
};

function BuyUsedCars() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const updateFilter = (key, value) => {
    setFilters((previous) => ({ ...previous, [key]: value }));
    setVisibleCount(6);
  };

  const filteredCars = useMemo(() => {
    let result = cars.filter((car) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        `${car.name} ${car.variant} ${car.brand}`
          .toLowerCase()
          .includes(query);

      return (
        matchesSearch &&
        (!filters.brand || car.brand === filters.brand) &&
        (!filters.bodyType || car.bodyType === filters.bodyType) &&
        (!filters.fuel || car.fuel === filters.fuel) &&
        (!filters.transmission ||
          car.transmission === filters.transmission) &&
        (!filters.owners || car.owners === filters.owners) &&
        (!filters.minPrice ||
          car.price >= Number(filters.minPrice) * 100000) &&
        (!filters.maxPrice ||
          car.price <= Number(filters.maxPrice) * 100000) &&
        (!filters.minYear || car.year >= Number(filters.minYear)) &&
        (!filters.maxKm || car.km <= Number(filters.maxKm))
      );
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === "km-low") {
      result.sort((a, b) => a.km - b.km);
    } else if (sortBy === "featured") {
      result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [search, filters, sortBy]);

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setSearch("");
    setSortBy("featured");
    setVisibleCount(6);
  };

  const getEnquiryLink = (car) => {
    const message = `Hello Optimum Automobiles, I am interested in the ${car.name} ${car.variant} listed at ${formatPrice(car.price)}. Please share more details.`;

    // Replace this number with your verified WhatsApp number.
    return `https://wa.me/919373778780?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="used-cars-page">
      {/* HERO SECTION */}
      <section className="used-cars-hero">
        <div className="used-cars-hero-overlay"></div>

        <div className="used-cars-hero-content">
          <span className="used-cars-eyebrow">
            THE OPTIMUM COLLECTION
          </span>

          <h1>
            Find Your
            <br />
            Perfect <span>Car.</span>
          </h1>

          <p>
            Discover quality pre-owned cars selected to match your
            lifestyle. Explore premium sedans, luxury vehicles and
            powerful SUVs with assistance from our team.
          </p>

          <a href="#used-car-inventory" className="used-cars-hero-button">
            Explore Inventory <span>→</span>
          </a>

          <div className="used-cars-hero-note">
            <span></span>
            Your next journey starts here.
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="used-cars-search-section">
        <div className="used-cars-search-box">
          <div className="used-cars-search-icon" aria-hidden="true">
            ⌕
          </div>

          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setVisibleCount(6);
            }}
            placeholder="Search by brand, model or variant..."
            aria-label="Search used cars"
          />

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("used-car-inventory")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Search Cars
          </button>
        </div>

        <div className="used-cars-quick-filters">
          <span>Popular searches:</span>

          {["BMW", "Mercedes-Benz", "Audi", "SUV"].map((item) => (
            <button
              type="button"
              key={item}
              className={
                search.toLowerCase() === item.toLowerCase()
                  ? "quick-filter-active"
                  : ""
              }
              onClick={() => {
                setSearch(item);
                setVisibleCount(6);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* INVENTORY */}
      <section
        className="used-cars-inventory-section"
        id="used-car-inventory"
      >
        <div className="used-cars-section-heading">
          <div>
            <span className="used-cars-eyebrow">EXPLORE OUR COLLECTION</span>

            <h2>
              Find Your Next <span>Drive</span>
            </h2>

            <p>
              Browse our selection and discover a car that feels right for you.
            </p>
          </div>

          <button
            type="button"
            className="used-cars-mobile-filter-button"
            onClick={() => setFiltersOpen(!filtersOpen)}
            aria-expanded={filtersOpen}
          >
            ☷ Filters
          </button>
        </div>

        <div className="used-cars-layout">
          {/* FILTER SIDEBAR */}
          <aside
            className={`used-cars-filter-sidebar ${
              filtersOpen ? "filters-open" : ""
            }`}
          >
            <div className="used-cars-filter-heading">
              <h3>Refine Your Search</h3>

              <button type="button" onClick={resetFilters}>
                Reset
              </button>
            </div>

            <label className="used-cars-filter-label">
              Brand
              <select
                value={filters.brand}
                onChange={(event) =>
                  updateFilter("brand", event.target.value)
                }
              >
                <option value="">All Brands</option>
                {[...new Set(cars.map((car) => car.brand))].map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>

            <label className="used-cars-filter-label">
              Body Type
              <select
                value={filters.bodyType}
                onChange={(event) =>
                  updateFilter("bodyType", event.target.value)
                }
              >
                <option value="">All Body Types</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
              </select>
            </label>

            <div className="used-cars-filter-group">
              <span>Price Range (₹ Lakhs)</span>

              <div className="used-cars-range-inputs">
                <input
                  type="number"
                  min="0"
                  placeholder="Min"
                  aria-label="Minimum price in lakhs"
                  value={filters.minPrice}
                  onChange={(event) =>
                    updateFilter("minPrice", event.target.value)
                  }
                />

                <input
                  type="number"
                  min="0"
                  placeholder="Max"
                  aria-label="Maximum price in lakhs"
                  value={filters.maxPrice}
                  onChange={(event) =>
                    updateFilter("maxPrice", event.target.value)
                  }
                />
              </div>
            </div>

            <label className="used-cars-filter-label">
              Manufacturing Year
              <select
                value={filters.minYear}
                onChange={(event) =>
                  updateFilter("minYear", event.target.value)
                }
              >
                <option value="">Any Year</option>
                {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
                  <option key={year} value={year}>
                    {year} and newer
                  </option>
                ))}
              </select>
            </label>

            <label className="used-cars-filter-label">
              Fuel Type
              <select
                value={filters.fuel}
                onChange={(event) =>
                  updateFilter("fuel", event.target.value)
                }
              >
                <option value="">All Fuel Types</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="CNG">CNG</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </label>

            <label className="used-cars-filter-label">
              Transmission
              <select
                value={filters.transmission}
                onChange={(event) =>
                  updateFilter("transmission", event.target.value)
                }
              >
                <option value="">Any Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </label>

            <label className="used-cars-filter-label">
              Ownership
              <select
                value={filters.owners}
                onChange={(event) =>
                  updateFilter("owners", event.target.value)
                }
              >
                <option value="">Any Ownership</option>
                <option value="1st Owner">1st Owner</option>
                <option value="2nd Owner">2nd Owner</option>
                <option value="3rd Owner">3rd Owner</option>
              </select>
            </label>

            <label className="used-cars-filter-label">
              Maximum Kilometres
              <select
                value={filters.maxKm}
                onChange={(event) =>
                  updateFilter("maxKm", event.target.value)
                }
              >
                <option value="">Any Distance</option>
                <option value="10000">Under 10,000 km</option>
                <option value="20000">Under 20,000 km</option>
                <option value="30000">Under 30,000 km</option>
                <option value="50000">Under 50,000 km</option>
              </select>
            </label>

            <div className="used-cars-filter-help">
              <span>Need help choosing?</span>
              <p>Our team can help you find a car that fits your needs.</p>
              <Link to="/contact">Talk to our team →</Link>
            </div>
          </aside>

          {/* CAR RESULTS */}
          <div className="used-cars-results">
            <div className="used-cars-results-toolbar">
              <div>
                <strong>{filteredCars.length}</strong>{" "}
                {filteredCars.length === 1 ? "vehicle" : "vehicles"} found
              </div>

              <label>
                Sort by
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="km-low">Lowest Kilometres</option>
                </select>
              </label>
            </div>

            {filteredCars.length > 0 ? (
              <>
                <div className="used-cars-grid">
                  {filteredCars.slice(0, visibleCount).map((car) => (
                    <article className="used-car-card" key={car.id}>
                      <div className="used-car-image-wrap">
                        <img
                          src={car.image}
                          alt={`${car.year} ${car.name} ${car.variant}`}
                          loading="lazy"
                        />

                        {car.featured && (
                          <span className="used-car-featured-badge">
                            FEATURED
                          </span>
                        )}

                        <button
                          type="button"
                          className={`used-car-favorite ${
                            favorites.includes(car.id) ? "is-favorite" : ""
                          }`}
                          onClick={() => toggleFavorite(car.id)}
                          aria-label={
                            favorites.includes(car.id)
                              ? `Remove ${car.name} from favourites`
                              : `Add ${car.name} to favourites`
                          }
                        >
                          {favorites.includes(car.id) ? "♥" : "♡"}
                        </button>
                      </div>

                      <div className="used-car-card-content">
                        <div className="used-car-title-row">
                          <div>
                            <span className="used-car-year">{car.year}</span>
                            <h3>{car.name}</h3>
                            <p className="used-car-variant">{car.variant}</p>
                          </div>
                        </div>

                        <div className="used-car-specs">
                          <span>◷ {car.km.toLocaleString("en-IN")} km</span>
                          <span>⛽ {car.fuel}</span>
                          <span>⚙ {car.transmission}</span>
                          <span>♙ {car.owners}</span>
                        </div>

                        <div className="used-car-price-row">
                          <div>
                            <small>Asking price</small>
                            <strong>{formatPrice(car.price)}</strong>
                          </div>

                          <span className="used-car-body-type">
                            {car.bodyType}
                          </span>
                        </div>

                        <div className="used-car-actions">
                          <Link
                            to={`/inventory/${car.id}`}
                            className="used-car-details-button"
                          >
                            View Details <span>→</span>
                          </Link>

                          <a
                            href={getEnquiryLink(car)}
                            target="_blank"
                            rel="noreferrer"
                            className="used-car-enquiry-button"
                            aria-label={`Enquire about ${car.name} on WhatsApp`}
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {visibleCount < filteredCars.length && (
                  <button
                    type="button"
                    className="used-cars-load-more"
                    onClick={() => setVisibleCount((count) => count + 6)}
                  >
                    Load More Cars <span>↓</span>
                  </button>
                )}
              </>
            ) : (
              <div className="used-cars-empty-state">
                <span>⌕</span>
                <h3>No matching cars found</h3>
                <p>
                  Try changing your search or removing some filters to see
                  more vehicles.
                </p>
                <button type="button" onClick={resetFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="used-cars-trust-section">
        <div className="used-cars-trust-heading">
          <span className="used-cars-eyebrow">THE OPTIMUM EXPERIENCE</span>
          <h2>
            A Better Way to <span>Buy.</span>
          </h2>
          <p>
            Personalised assistance to help make your next car purchase
            simpler and more informed.
          </p>
        </div>

        <div className="used-cars-trust-grid">
          <article>
            <span className="used-cars-trust-icon">01</span>
            <h3>Vehicle Information</h3>
            <p>
              Review available specifications, vehicle history information
              and inspection details where provided.
            </p>
          </article>

          <article>
            <span className="used-cars-trust-icon">02</span>
            <h3>Personalised Assistance</h3>
            <p>
              Get support comparing vehicles, understanding features and
              arranging a test drive.
            </p>
          </article>

          <article>
            <span className="used-cars-trust-icon">03</span>
            <h3>Buying Guidance</h3>
            <p>
              Receive assistance with documentation and ownership transfer
              requirements.
            </p>
          </article>
        </div>

        <div className="used-cars-bottom-cta">
          <div>
            <span>YOUR NEXT CAR IS WAITING</span>
            <h2>Let's find the right one for you.</h2>
          </div>

          <Link to="/contact">
            Speak to Our Team <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BuyUsedCars;