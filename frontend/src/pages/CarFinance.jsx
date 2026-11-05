import React from "react";
import { Link } from "react-router-dom";
import "./CarFinance.css";

const financeBenefits = [
  {
    number: "01",
    title: "Flexible Finance Options",
    description:
      "Explore available financing options that may suit your budget and preferred repayment period.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Simple Guidance",
    description:
      "Get guidance from our team throughout the car financing process.",
    icon: "✓",
  },
  {
    number: "03",
    title: "Budget Planning",
    description:
      "Understand your estimated monthly payments before making a purchase decision.",
    icon: "₹",
  },
  {
    number: "04",
    title: "Hassle-Free Assistance",
    description:
      "Get help understanding lender requirements and the documents you may need.",
    icon: "→",
  },
];

const financeSteps = [
  {
    number: "01",
    title: "Choose Your Car",
    description:
      "Explore our collection of pre-owned cars and select a vehicle that fits your needs and budget.",
  },
  {
    number: "02",
    title: "Discuss Your Budget",
    description:
      "Tell our team about your budget, preferred down payment, and repayment preferences.",
  },
  {
    number: "03",
    title: "Explore Finance Options",
    description:
      "Review available finance options and the terms offered by participating lenders.",
  },
  {
    number: "04",
    title: "Complete Your Purchase",
    description:
      "Once the lender approves your application and the required formalities are completed, proceed with your purchase.",
  },
];

const eligibilityItems = [
  "Valid identity and address proof",
  "A regular and verifiable source of income",
  "Credit history and repayment capacity",
  "Documents required by the selected lender",
];

const documents = [
  "PAN card or other accepted identity documents",
  "Aadhaar card or accepted address proof",
  "Recent salary slips or income proof, where applicable",
  "Recent bank statements, where requested",
  "Business or income documents for self-employed applicants",
];

const faqs = [
  {
    question: "Can I finance a pre-owned car?",
    answer:
      "Yes, financing may be available for eligible pre-owned cars through participating lenders. Approval depends on the vehicle, your eligibility, and the lender's policies.",
  },
  {
    question: "Can I choose my down payment?",
    answer:
      "Your down payment may vary depending on the lender, vehicle price, eligibility, and finance terms. Our team can help you understand the available options.",
  },
  {
    question: "What documents are required for car finance?",
    answer:
      "Lenders commonly request identity proof, address proof, income documents, and bank statements. Exact requirements vary by lender and applicant.",
  },
  {
    question: "How long does finance approval take?",
    answer:
      "Approval time depends on the lender, document verification, and your application. Your lender or our team can guide you on the expected timeline.",
  },
  {
    question: "Does applying for finance guarantee approval?",
    answer:
      "No. All finance applications are subject to the lender's eligibility checks, credit assessment, documentation, and approval policies.",
  },
];

function CarFinance() {
  return (
    <main className="car-finance-page">
      {/* HERO SECTION */}
      <section className="finance-hero">
        <div className="finance-hero-inner">
          <div className="finance-hero-content">
            <span className="finance-eyebrow">
              FINANCE YOUR NEXT DRIVE
            </span>

            <h1>
              Your Dream Car.
              <br />
              <span>Smarter Financing.</span>
            </h1>

            <p className="finance-hero-description">
              Find your perfect pre-owned car and explore financing options
              that fit your budget. Our team is here to help make your car
              buying journey simpler.
            </p>

            <div className="finance-hero-actions">
              <Link to="/inventory" className="finance-btn finance-btn-red">
                Explore Our Cars <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="finance-btn finance-btn-outline"
              >
                Talk to Our Team
              </Link>
            </div>

            <div className="finance-hero-note">
              <span className="finance-note-check">✓</span>
              Guidance throughout your car buying journey
            </div>
          </div>

          <div className="finance-hero-visual">
            <div className="finance-image-frame">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
                alt="Premium car available for your next drive"
              />

              <div className="finance-image-overlay"></div>

              <div className="finance-image-caption">
                <span>YOUR NEXT CHAPTER</span>
                <h3>Drive What You Love.</h3>
              </div>
            </div>

            <div className="finance-floating-card">
              <span className="finance-floating-icon">₹</span>
              <div>
                <strong>Finance Guidance</strong>
                <p>Options for your budget</p>
              </div>
            </div>

            <div className="finance-hero-accent"></div>
          </div>
        </div>

        <div className="finance-hero-bottom">
          <span>PRE-OWNED CARS</span>
          <span className="finance-bottom-line"></span>
          <span>FINANCE ASSISTANCE</span>
          <span className="finance-bottom-line"></span>
          <span>PERSONAL GUIDANCE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="finance-intro section-padding">
        <div className="finance-section-heading">
          <span className="finance-eyebrow">A BETTER WAY TO BUY</span>

          <h2>
            Make Your Next Car
            <br />
            <span>More Within Reach.</span>
          </h2>
        </div>

        <div className="finance-intro-content">
          <p>
            Buying a car is an important decision. The right finance plan can
            help you understand the upfront cost, monthly repayments, and
            overall financial commitment before you buy.
          </p>

          <p>
            At Optimum Automobiles, we help you explore suitable financing
            possibilities for eligible pre-owned vehicles and understand the
            next steps with greater confidence.
          </p>

          <Link to="/inventory" className="finance-text-link">
            Find Your Car <span>→</span>
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="finance-benefits section-padding">
        <div className="finance-section-top">
          <div>
            <span className="finance-eyebrow">WHY CHOOSE OUR ASSISTANCE</span>
            <h2>
              Finance Made
              <br />
              <span>Easier to Understand.</span>
            </h2>
          </div>

          <p>
            Clear guidance and practical information to help you make an
            informed decision about your next vehicle.
          </p>
        </div>

        <div className="finance-benefits-grid">
          {financeBenefits.map((benefit) => (
            <article className="finance-benefit-card" key={benefit.number}>
              <div className="finance-benefit-top">
                <span className="finance-benefit-number">
                  {benefit.number}
                </span>

                <span className="finance-benefit-icon">
                  {benefit.icon}
                </span>
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="finance-process section-padding">
        <div className="finance-process-heading">
          <span className="finance-eyebrow">YOUR JOURNEY, SIMPLIFIED</span>
          <h2>
            Four Steps.
            <br />
            <span>One Exciting Drive.</span>
          </h2>
          <p>
            From selecting your vehicle to understanding your financing
            options, we help you navigate the process.
          </p>
        </div>

        <div className="finance-process-grid">
          {financeSteps.map((step, index) => (
            <article className="finance-process-card" key={step.number}>
              <div className="finance-process-number">{step.number}</div>

              {index !== financeSteps.length - 1 && (
                <div className="finance-process-connector"></div>
              )}

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="finance-process-footer">
          <span className="finance-process-footer-icon">i</span>
          <p>
            Financing is subject to lender approval, applicable terms, and
            eligibility requirements.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="finance-eligibility section-padding">
        <div className="finance-eligibility-content">
          <span className="finance-eyebrow">KNOW BEFORE YOU APPLY</span>

          <h2>
            Understand Your
            <br />
            <span>Finance Eligibility.</span>
          </h2>

          <p>
            Lenders assess several factors before approving a car finance
            application. Understanding these factors can help you prepare
            before applying.
          </p>

          <Link to="/contact" className="finance-btn finance-btn-red">
            Get Finance Guidance <span>↗</span>
          </Link>
        </div>

        <div className="finance-eligibility-list">
          {eligibilityItems.map((item, index) => (
            <div className="finance-eligibility-item" key={item}>
              <span className="finance-eligibility-check">✓</span>

              <div>
                <span className="finance-eligibility-label">
                  REQUIREMENT {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item}</h3>
              </div>
            </div>
          ))}

          <div className="finance-eligibility-note">
            Eligibility criteria differ between lenders. Meeting general
            requirements does not guarantee approval.
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="finance-documents section-padding">
        <div className="finance-documents-heading">
          <span className="finance-eyebrow">BE PREPARED</span>
          <h2>
            Documents You May
            <br />
            <span>Need.</span>
          </h2>
          <p>
            Keep commonly requested documents ready. Your lender will confirm
            the exact list based on your circumstances.
          </p>
        </div>

        <div className="finance-documents-list">
          {documents.map((document, index) => (
            <div className="finance-document-row" key={document}>
              <span className="finance-document-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{document}</p>

              <span className="finance-document-check">✓</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="finance-faq section-padding">
        <div className="finance-faq-heading">
          <span className="finance-eyebrow">NEED CLARITY?</span>
          <h2>
            Frequently Asked
            <br />
            <span>Questions.</span>
          </h2>
          <p>
            Helpful answers to common questions about financing a pre-owned
            car.
          </p>
        </div>

        <div className="finance-faq-list">
          {faqs.map((faq, index) => (
            <details className="finance-faq-item" key={faq.question}>
              <summary>
                <span className="finance-faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="finance-faq-question">{faq.question}</span>

                <span className="finance-faq-toggle">+</span>
              </summary>

              <div className="finance-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="finance-cta section-padding">
        <div className="finance-cta-content">
          <span className="finance-eyebrow">LET'S GET YOU MOVING</span>

          <h2>
            The Right Car.
            <br />
            <span>A Smarter Way Forward.</span>
          </h2>

          <p>
            Have questions about financing your next pre-owned car? Connect
            with our team to understand your options and next steps.
          </p>

          <div className="finance-cta-actions">
            <Link to="/contact" className="finance-btn finance-btn-white">
              Contact Our Team <span>↗</span>
            </Link>

            <Link to="/inventory" className="finance-cta-secondary">
              Browse Inventory <span>→</span>
            </Link>
          </div>
        </div>

        <div className="finance-cta-decoration">
          <span>O</span>
          <span>OPTIMUM</span>
        </div>
      </section>
    </main>
  );
}

export default CarFinance;