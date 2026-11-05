import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";

const categories = [
  {
    name: "All Cars",
    description: "View all inventory",
    icon: "🚘",
    value: "All",
  },
  {
    name: "New Arrivals",
    description: "Freshly added cars",
    icon: "🚗",
    value: "New Arrival",
  },
  {
    name: "Certified Cars",
    description: "Verified & inspected",
    icon: "✓",
    value: "Certified",
  },
  {
    name: "Luxury Sedans",
    description: "Elegance & comfort",
    icon: "🚙",
    value: "Sedan",
  },
  {
    name: "Premium SUVs",
    description: "Power & versatility",
    icon: "🚙",
    value: "SUV",
  },
  {
    name: "Sports Cars",
    description: "Performance & thrill",
    icon: "🏎️",
    value: "Sports",
  },
];

const cars = [
  {
    id: 1,
    name: "BMW X5",
    year: 2021,
    km: 32000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "SUV",
    make: "BMW",
    price: 8200000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "NEW ARRIVAL",
    stockId: "OA-0287",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Mercedes-Benz E-Class",
    year: 2021,
    km: 42000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "Sedan",
    make: "Mercedes-Benz",
    price: 5600000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "CERTIFIED",
    stockId: "OA-0312",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Audi Q7",
    year: 2020,
    km: 52000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "SUV",
    make: "Audi",
    price: 5800000,
    owners: "2nd Owner",
    condition: "Good",
    badge: "POPULAR",
    stockId: "OA-0274",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Range Rover Velar",
    year: 2021,
    km: 38000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    make: "Land Rover",
    price: 6900000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "",
    stockId: "OA-0265",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Porsche Panamera",
    year: 2019,
    km: 45000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "Sports",
    make: "Porsche",
    price: 9200000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "FEATURED",
    stockId: "OA-0218",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Jaguar F-PACE",
    year: 2019,
    km: 60000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "SUV",
    make: "Jaguar",
    price: 5400000,
    owners: "2nd Owner",
    condition: "Good",
    badge: "POPULAR",
    stockId: "OA-0239",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "BMW 7 Series",
    year: 2020,
    km: 40000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "Sedan",
    make: "BMW",
    price: 11200000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "NEW ARRIVAL",
    stockId: "OA-0196",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Mercedes-Benz GLE",
    year: 2021,
    km: 36000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "SUV",
    make: "Mercedes-Benz",
    price: 7800000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "CERTIFIED",
    stockId: "OA-0176",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Audi A6",
    year: 2020,
    km: 48000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "Sedan",
    make: "Audi",
    price: 6400000,
    owners: "1st Owner",
    condition: "Good",
    badge: "",
    stockId: "OA-0153",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    name: "Land Rover Discovery",
    year: 2019,
    km: 56000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "SUV",
    make: "Land Rover",
    price: 7200000,
    owners: "2nd Owner",
    condition: "Good",
    badge: "POPULAR",
    stockId: "OA-0141",
    image:
      "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    name: "Maserati Levante",
    year: 2021,
    km: 34000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    make: "Maserati",
    price: 8600000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "NEW ARRIVAL",
    stockId: "OA-0128",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    name: "Volvo XC90",
    year: 2020,
    km: 47000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "SUV",
    make: "Volvo",
    price: 6800000,
    owners: "1st Owner",
    condition: "Excellent",
    badge: "CERTIFIED",
    stockId: "OA-0112",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85",
  },
];

const initialFilters = {
  body: "",
  make: "",
  model: "",
  minPrice: "",
  maxPrice: "",
  yearFrom: "",
  yearTo: "",
  maxKm: "",
  fuel: "",
  transmission: "",
  owners: "",
};

function formatPrice(price) {
  return `₹ ${new Intl.NumberFormat("en-IN").format(price)}`;
}

function FilterSelect({ label, value, onChange, options, placeholder }) {
  return (
    <label className="inv-filter-field">
      <span className="inv-filter-label">{label}</span>

      <select value={value} onChange={onChange}>
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Inventory() {
  const [filters, setFilters] = useState(initialFilters);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [favorites, setFavorites] = useState([]);
  const [compared, setCompared] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [page, setPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const updateFilter = (key, value) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));

    setPage(1);
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    setActiveCategory("All");
    setPage(1);
  };

  const filteredCars = useMemo(() => {
    let result = [...cars];

    if (activeCategory === "New Arrival") {
      result = result.filter((car) => car.badge === "NEW ARRIVAL");
    } else if (activeCategory === "Certified") {
      result = result.filter((car) => car.badge === "CERTIFIED");
    } else if (activeCategory === "Sedan") {
      result = result.filter((car) => car.body === "Sedan");
    } else if (activeCategory === "SUV") {
      result = result.filter((car) => car.body === "SUV");
    } else if (activeCategory === "Sports") {
      result = result.filter((car) => car.body === "Sports");
    }

    if (filters.body) {
      result = result.filter((car) => car.body === filters.body);
    }

    if (filters.make) {
      result = result.filter((car) => car.make === filters.make);
    }

    if (filters.model) {
      result = result.filter((car) =>
        car.name.toLowerCase().includes(filters.model.toLowerCase())
      );
    }

    if (filters.minPrice) {
      result = result.filter(
        (car) => car.price >= Number(filters.minPrice) * 100000
      );
    }

    if (filters.maxPrice) {
      result = result.filter(
        (car) => car.price <= Number(filters.maxPrice) * 100000
      );
    }

    if (filters.yearFrom) {
      result = result.filter((car) => car.year >= Number(filters.yearFrom));
    }

    if (filters.yearTo) {
      result = result.filter((car) => car.year <= Number(filters.yearTo));
    }

    if (filters.maxKm) {
      result = result.filter((car) => car.km <= Number(filters.maxKm));
    }

    if (filters.fuel) {
      result = result.filter((car) => car.fuel === filters.fuel);
    }

    if (filters.transmission) {
      result = result.filter(
        (car) => car.transmission === filters.transmission
      );
    }

    if (filters.owners) {
      result = result.filter((car) => car.owners === filters.owners);
    }

    switch (sortBy) {
      case "priceLow":
        result.sort((a, b) => a.price - b.price);
        break;

      case "priceHigh":
        result.sort((a, b) => b.price - a.price);
        break;

      case "oldest":
        result.sort((a, b) => a.year - b.year);
        break;

      case "kmLow":
        result.sort((a, b) => a.km - b.km);
        break;

      default:
        result.sort((a, b) => b.year - a.year);
    }

    return result;
  }, [filters, activeCategory, sortBy]);

  const visibleCars = showAll
    ? filteredCars
    : filteredCars.slice((page - 1) * 12, page * 12);

  const totalPages = Math.max(1, Math.ceil(filteredCars.length / 12));

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((carId) => carId !== id)
        : [...previous, id]
    );
  };

  const toggleCompare = (id) => {
    setCompared((previous) => {
      if (previous.includes(id)) {
        return previous.filter((carId) => carId !== id);
      }

      if (previous.length >= 3) {
        window.alert("You can compare up to 3 cars at a time.");
        return previous;
      }

      return [...previous, id];
    });
  };

  const selectCategory = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  return (
    <main className="inventory-page">
{/* HERO */}
<section className="inv-hero">
  <div className="inv-hero-content">
    <span className="inv-eyebrow">
      <span className="inv-red-line" />
      OUR INVENTORY
    </span>

    <h1>
      Premium Pre-Owned Cars.
      <span>Verified. Ready. Yours.</span>
    </h1>

    <p>
      Explore our curated collection of luxury pre-owned cars,
      thoroughly inspected and ready for your next journey.
    </p>
  </div>

  <div
    className="inv-hero-image"
    role="img"
    aria-label="Premium luxury car in a showroom"
  />
</section>

      {/* INVENTORY CONTENT */}
      <div className="inv-main-container">
        {/* LEFT FILTER PANEL */}
        <aside className="inv-filter-panel">
          <div className="inv-filter-heading">
            <div>
              <h2>Find Your Perfect Car</h2>
              <p>
                Use the filters below to narrow down your search and find the
                ideal luxury car.
              </p>
            </div>

            <button
              type="button"
              className="inv-clear-mobile"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>

          <div className="inv-filter-fields">
            <FilterSelect
              label="Car Type"
              value={filters.body}
              onChange={(event) => updateFilter("body", event.target.value)}
              placeholder="Any Type"
              options={[
                { value: "SUV", label: "SUV" },
                { value: "Sedan", label: "Sedan" },
                { value: "Sports", label: "Sports Car" },
              ]}
            />

            <FilterSelect
              label="Make"
              value={filters.make}
              onChange={(event) => updateFilter("make", event.target.value)}
              placeholder="Any Make"
              options={[
                ...new Set(cars.map((car) => car.make)),
              ].map((make) => ({ value: make, label: make }))}
            />

            <label className="inv-filter-field">
              <span className="inv-filter-label">Model</span>
              <input
                type="text"
                value={filters.model}
                onChange={(event) => updateFilter("model", event.target.value)}
                placeholder="Search model"
              />
            </label>

            <div className="inv-filter-field">
              <span className="inv-filter-label">Price Range (₹ lakh)</span>
              <div className="inv-range-inputs">
                <input
                  type="number"
                  min="0"
                  value={filters.minPrice}
                  onChange={(event) =>
                    updateFilter("minPrice", event.target.value)
                  }
                  placeholder="Min"
                  aria-label="Minimum price in lakh"
                />
                <input
                  type="number"
                  min="0"
                  value={filters.maxPrice}
                  onChange={(event) =>
                    updateFilter("maxPrice", event.target.value)
                  }
                  placeholder="Max"
                  aria-label="Maximum price in lakh"
                />
              </div>
            </div>

            <FilterSelect
              label="Year From"
              value={filters.yearFrom}
              onChange={(event) => updateFilter("yearFrom", event.target.value)}
              placeholder="Any Year"
              options={[2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map(
                (year) => ({ value: String(year), label: String(year) })
              )}
            />

            <FilterSelect
              label="Year To"
              value={filters.yearTo}
              onChange={(event) => updateFilter("yearTo", event.target.value)}
              placeholder="Any Year"
              options={[2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map(
                (year) => ({ value: String(year), label: String(year) })
              )}
            />

            <FilterSelect
              label="Total Run (km)"
              value={filters.maxKm}
              onChange={(event) => updateFilter("maxKm", event.target.value)}
              placeholder="Any Kilometres"
              options={[
                { value: "20000", label: "Under 20,000 km" },
                { value: "40000", label: "Under 40,000 km" },
                { value: "60000", label: "Under 60,000 km" },
                { value: "80000", label: "Under 80,000 km" },
              ]}
            />

            <FilterSelect
              label="Fuel Type"
              value={filters.fuel}
              onChange={(event) => updateFilter("fuel", event.target.value)}
              placeholder="Any Fuel Type"
              options={[
                { value: "Petrol", label: "Petrol" },
                { value: "Diesel", label: "Diesel" },
                { value: "Electric", label: "Electric" },
                { value: "CNG", label: "CNG" },
              ]}
            />

            <FilterSelect
              label="Transmission"
              value={filters.transmission}
              onChange={(event) =>
                updateFilter("transmission", event.target.value)
              }
              placeholder="Any Transmission"
              options={[
                { value: "Automatic", label: "Automatic" },
                { value: "Manual", label: "Manual" },
              ]}
            />

            <FilterSelect
              label="Ownership"
              value={filters.owners}
              onChange={(event) => updateFilter("owners", event.target.value)}
              placeholder="Any Ownership"
              options={[
                { value: "1st Owner", label: "1st Owner" },
                { value: "2nd Owner", label: "2nd Owner" },
                { value: "3rd Owner", label: "3rd Owner" },
              ]}
            />
          </div>

          <div className="inv-filter-actions">
            <button
              type="button"
              className="inv-show-cars"
              onClick={() => {
                setPage(1);
                setShowAll(false);
              }}
            >
              Show {filteredCars.length} Cars <span>→</span>
            </button>

            <button
              type="button"
              className="inv-clear-filters"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* RIGHT INVENTORY */}
        <section className="inv-results">
          {/* CATEGORY TILES */}
          <div className="inv-categories">
            {categories.map((category) => (
              <button
                type="button"
                key={category.value}
                className={`inv-category-card ${
                  activeCategory === category.value ? "selected" : ""
                }`}
                onClick={() => selectCategory(category.value)}
              >
                <span className="inv-category-icon">{category.icon}</span>
                <span className="inv-category-name">{category.name}</span>
                <span className="inv-category-description">
                  {category.description}
                </span>
                <span className="inv-category-arrow">→</span>
              </button>
            ))}
          </div>

          {/* RESULTS HEADING */}
          <div className="inv-results-heading">
            <div>
              <span className="inv-eyebrow inv-eyebrow-blue">
                <span className="inv-red-line" />
                AVAILABLE INVENTORY
              </span>

              <h2>Featured Cars</h2>
              <p>Handpicked selection of our most popular luxury cars.</p>
              <span className="inv-result-count">
                Showing {visibleCars.length} of {filteredCars.length} cars
              </span>
            </div>

            <div className="inv-results-controls">
              <label className="inv-sort-control">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="kmLow">Lowest Kilometres</option>
                </select>
              </label>

              <div className="inv-view-toggle">
                <button
                  type="button"
                  className={viewMode === "grid" ? "active" : ""}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  title="Grid view"
                >
                  ▦
                </button>

                <button
                  type="button"
                  className={viewMode === "list" ? "active" : ""}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  title="List view"
                >
                  ☷
                </button>
              </div>
            </div>
          </div>

          {/* CAR CARDS */}
          {visibleCars.length > 0 ? (
            <div className={`inv-car-grid ${viewMode === "list" ? "list-view" : ""}`}>
              {visibleCars.map((car) => (
                <article className="inv-car-card" key={car.id}>
                  <div className="inv-car-image-wrap">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="inv-car-image"
                      loading="lazy"
                    />

                    {car.badge && (
                      <span
                        className={`inv-car-badge ${
                          car.badge === "CERTIFIED" ? "certified" : ""
                        }`}
                      >
                        {car.badge}
                      </span>
                    )}

                    <button
                      type="button"
                      className={`inv-favorite ${
                        favorites.includes(car.id) ? "is-favorite" : ""
                      }`}
                      onClick={() => toggleFavorite(car.id)}
                      aria-label={
                        favorites.includes(car.id)
                          ? `Remove ${car.name} from saved cars`
                          : `Save ${car.name}`
                      }
                    >
                      {favorites.includes(car.id) ? "♥" : "♡"}
                    </button>

                    <span className="inv-image-stock">Stock ID: {car.stockId}</span>
                  </div>

                  <div className="inv-car-details">
                    <h3>{car.name}</h3>

                    <div className="inv-car-specs">
                      <span>{car.year}</span>
                      <span>{car.km.toLocaleString("en-IN")} km</span>
                      <span>{car.fuel}</span>
                      <span>{car.transmission}</span>
                    </div>

                    <div className="inv-price-row">
                      <strong>{formatPrice(car.price)}</strong>
                      <span className="inv-availability">Available</span>
                    </div>

                    <div className="inv-car-bottom">
                      <button
                        type="button"
                        className={`inv-compare-button ${
                          compared.includes(car.id) ? "selected" : ""
                        }`}
                        onClick={() => toggleCompare(car.id)}
                      >
                        ⇄ {compared.includes(car.id) ? "Compared" : "Compare"}
                      </button>

                      <button
                        type="button"
                        className={`inv-save-button ${
                          favorites.includes(car.id) ? "selected" : ""
                        }`}
                        onClick={() => toggleFavorite(car.id)}
                      >
                        {favorites.includes(car.id) ? "♥ Saved" : "♡ Save"}
                      </button>

                      <Link
                        to={`/inventory/${car.id}`}
                        className="inv-details-button"
                      >
                        View Details <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="inv-no-results">
              <span>⌕</span>
              <h3>No cars match your filters</h3>
              <p>Try changing your search criteria to see more vehicles.</p>
              <button type="button" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}

          {/* PAGINATION */}
          {filteredCars.length > 0 && (
            <div className="inv-pagination">
              <div className="inv-page-buttons">
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={page === 1 || showAll}
                  aria-label="Previous page"
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (pageNumber) => (
                    <button
                      type="button"
                      key={pageNumber}
                      className={page === pageNumber && !showAll ? "active" : ""}
                      onClick={() => {
                        setPage(pageNumber);
                        setShowAll(false);
                      }}
                    >
                      {pageNumber}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() =>
                    setPage((current) => Math.min(totalPages, current + 1))
                  }
                  disabled={page === totalPages || showAll}
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>

              <button
                type="button"
                className="inv-load-more"
                onClick={() => setShowAll((current) => !current)}
              >
                {showAll ? "Show Pages" : "Load All Cars"} <span>↻</span>
              </button>
            </div>
          )}

          {compared.length > 0 && (
            <div className="inv-compare-notice">
              <span>
                {compared.length} {compared.length === 1 ? "car" : "cars"} added
                to comparison
              </span>

              <button type="button" onClick={() => setCompared([])}>
                Clear comparison
              </button>
            </div>
          )}
        </section>
      </div>

      {/* HELP CTA */}
      <section className="inv-help-section">
        <div className="inv-help-image" />

        <div className="inv-help-content">
          <h2>Need Help Finding the Right Car?</h2>
          <p>
            Our team is here to guide you. Get personalised recommendations
            and expert advice.
          </p>
        </div>

        <div className="inv-help-actions">
          <a
            href="https://wa.me/919373778780"
            className="inv-whatsapp-button"
            target="_blank"
            rel="noreferrer"
          >
            <span>◉</span> Chat on WhatsApp
          </a>

          <Link to="/contact" className="inv-test-drive-button">
            Book a Test Drive <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Inventory;