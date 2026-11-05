import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <Link to="/" className="footer-brand">
            <span className="footer-brand-mark">O</span>

            <span>
              <strong>OPTIMUM</strong>
              <small>AUTOMOBILES</small>
            </span>
          </Link>

          <p>
            Automotive repair and vehicle care with a focus on quality,
            attention to detail, and customer service.
          </p>

          <Link to="/contact" className="footer-contact-link">
            Get in Touch <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <Link to="/services">Collision Repair</Link>
          <Link to="/services">Paint & Refinishing</Link>
          <Link to="/services">Dent Repair</Link>
          <Link to="/services">Vehicle Restoration</Link>
        </div>

        <div className="footer-column footer-contact-column">
          <h3>Contact</h3>
          <p>Contact us to discuss your vehicle repair requirements.</p>
          <Link to="/contact">Send an Enquiry ↗</Link>
          <Link to="/estimate">Request an Estimate ↗</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Optimum Automobiles. All rights
            reserved.
          </p>

          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;