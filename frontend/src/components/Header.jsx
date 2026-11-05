
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/optimumlogo.png";
import "./Header.css";

const serviceLinks = [
  { label: "Buy Used Cars", path: "/buy-used-cars" },
  { label: "Sell Your Car", path: "/sell-your-car" },
  { label: "Ownership Transfer", path: "/ownership-transfer" },
  { label: "Car Finance", path: "/car-finance" },
  { label: "Insurance Assistance", path: "/insurance-assistance" },
  { label: "Extended Warranty", path: "/extended-warranty" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((previous) => !previous);
  };

  return (
    <header className="site-header">
      <div className="header-container">
       {/* LOGO */}
     <Link to="/" className="header-logo" onClick={closeMenu}>
      <img
       src={logo}
       alt="Optimum Automobiles"
       className="header-logo-image"
      />
    </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`header-menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => {
            setMenuOpen((previous) => !previous);
            setServicesOpen(false);
          }}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAVIGATION */}
        <nav
          id="primary-navigation"
          className={`header-navigation ${menuOpen ? "menu-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="header-nav-links">
            {/* HOME */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            {/* INVENTORY */}
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Inventory
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>

            {/* SERVICES DROPDOWN */}
            <div
              className={`header-services-dropdown ${
                servicesOpen ? "services-open" : ""
              }`}
            >
              <div className="header-services-heading">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `header-nav-link ${
                      isActive || servicesOpen ? "active" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>

                <button
                  type="button"
                  className="header-services-toggle"
                  aria-label="Toggle services menu"
                  aria-expanded={servicesOpen}
                  onClick={toggleServices}
                >
                  <span aria-hidden="true">▼</span>
                </button>
              </div>

              <div className="header-services-menu">
                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    className={({ isActive }) =>
                      `header-services-link ${isActive ? "active" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    {service.label}
                    <span aria-hidden="true">→</span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* OUR WORK */}
            <NavLink
              to="/our-work"
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Our Work
            </NavLink>

            {/* CONTACT */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>

          {/* ESTIMATE BUTTON */}
          <Link
            to="/estimate"
            className="header-estimate-button"
            onClick={closeMenu}
          >
            Get a Free Estimate
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
