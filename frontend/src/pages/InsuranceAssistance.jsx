import React from "react";
import { Link } from "react-router-dom";
import "./InsuranceAssistance.css";

const benefits = [
  {
    number: "01",
    icon: "✓",
    title: "Insurance Guidance",
    description:
      "Understand available motor insurance options and the coverage that may suit your vehicle and needs.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Coverage Clarity",
    description:
      "Learn about common policy features, exclusions, deductibles, and important terms before making a decision.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Renewal Assistance",
    description:
      "Get guidance on reviewing your existing policy and exploring renewal options before it expires.",
  },
  {
    number: "04",
    icon: "→",
    title: "Support Through the Process",
    description:
      "Our team can help you understand the steps involved in exploring suitable insurance options.",
  },
];

const insuranceTypes = [
  {
    number: "01",
    title: "Third-Party Insurance",
    label: "MANDATORY COVER",
    description:
      "Covers eligible third-party liabilities arising from an insured vehicle, subject to the policy terms and applicable law. It does not cover damage to your own car.",
  },
  {
    number: "02",
    title: "Comprehensive Insurance",
    label: "BROADER COVERAGE",
    description:
      "Typically combines third-party liability cover with cover for damage to your own vehicle, subject to policy conditions, exclusions, and deductibles.",
  },
  {
    number: "03",
    title: "Own-Damage Cover",
    label: "VEHICLE PROTECTION",
    description:
      "Covers specified damage to your own vehicle under the selected policy. Eligibility and availability depend on your existing insurance arrangements.",
  },
];

const insuranceSteps = [
  {
    number: "01",
    title: "Tell Us About Your Car",
    description:
      "Share the vehicle details and let us know whether you need a new policy, renewal guidance, or help understanding existing coverage.",
  },
  {
    number: "02",
    title: "Understand Your Needs",
    description:
      "Consider your vehicle, usage, desired coverage, budget, and any specific protection requirements.",
  },
  {
    number: "03",
    title: "Review Available Options",
    description:
      "Where available, review policy features, premiums, deductibles, exclusions, and terms before choosing an insurer.",
  },
  {
    number: "04",
    title: "Confirm Your Policy",
    description:
      "Review the final policy documents and confirm coverage directly with the insurer or authorised intermediary.",
  },
];

const documents = [
  "Vehicle registration certificate (RC)",
  "Valid identity and contact details",
  "Existing insurance policy, if applicable",
  "Vehicle details required by the insurer",
  "Additional documents requested by the insurer",
];

const faqs = [
  {
    question: "Is motor insurance mandatory in India?",
    answer:
      "Third-party motor insurance is generally mandatory for vehicles used on public roads in India. Confirm the requirements applicable to your vehicle and circumstances.",
  },
  {
    question: "What is the difference between third-party and comprehensive insurance?",
    answer:
      "Third-party insurance covers eligible liabilities to other people or property. Comprehensive policies typically add cover for damage to your own vehicle, subject to the policy wording and exclusions.",
  },
  {
    question: "Can I renew my existing car insurance?",
    answer:
      "Yes, you can explore renewal options before your policy expires. Review the coverage, premium, deductibles, exclusions, and any changes to policy terms before renewing.",
  },
  {
    question: "What affects my car insurance premium?",
    answer:
      "Premiums may depend on factors such as the vehicle, its age and value, location, selected coverage, deductibles, claims history, and insurer-specific pricing rules.",
  },
  {
    question: "Does Optimum Automobiles guarantee insurance approval or claims?",
    answer:
      "No. Policy issuance, coverage decisions, premiums, and claims are determined by the relevant insurer under the applicable policy terms. Our assistance does not guarantee approval or claim settlement.",
  },
];

function InsuranceAssistance() {
  return (
    <main className="insurance-page">
      {/* HERO */}
      <section className="insurance-hero">
        <div className="insurance-hero-inner">
          <div className="insurance-hero-content">
            <span className="insurance-eyebrow">
              CONFIDENCE BEYOND THE DRIVE
            </span>

            <h1>
              Protect Your Car.
              <br />
              <span>Drive With Confidence.</span>
            </h1>

            <p className="insurance-hero-description">
              Understanding car insurance shouldn't be complicated. Get
              guidance on coverage options, policy terms, and the next steps
              to help you make an informed decision.
            </p>

            <div className="insurance-hero-actions">
              <Link
                to="/contact"
                className="insurance-btn insurance-btn-red"
              >
                Get Insurance Guidance <span>↗</span>
              </Link>

              <Link
                to="/inventory"
                className="insurance-btn insurance-btn-outline"
              >
                Explore Our Cars
              </Link>
            </div>

            <div className="insurance-hero-note">
              <span>✓</span>
              Understand your coverage before you choose
            </div>
          </div>

          <div className="insurance-hero-visual">
            <div className="insurance-image-frame">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
                alt="Premium car representing confidence and protection on the road"
              />

              <div className="insurance-image-overlay"></div>

              <div className="insurance-image-caption">
                <span>PROTECTION THAT MATTERS</span>
                <h3>Every Journey Deserves Confidence.</h3>
              </div>
            </div>

            <div className="insurance-floating-card">
              <span className="insurance-floating-icon">✓</span>
              <div>
                <strong>Insurance Assistance</strong>
                <p>Guidance for informed decisions</p>
              </div>
            </div>

            <div className="insurance-hero-accent"></div>
          </div>
        </div>

        <div className="insurance-hero-bottom">
          <span>COVERAGE GUIDANCE</span>
          <span className="insurance-bottom-line"></span>
          <span>POLICY CLARITY</span>
          <span className="insurance-bottom-line"></span>
          <span>RENEWAL SUPPORT</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="insurance-intro insurance-section-padding">
        <div>
          <span className="insurance-eyebrow">INSURANCE MADE CLEARER</span>

          <h2>
            The Right Protection
            <br />
            <span>Starts With Understanding.</span>
          </h2>
        </div>

        <div className="insurance-intro-content">
          <p>
            Car insurance helps protect you against specified financial
            liabilities and losses, depending on the policy you select.
            Understanding the coverage, exclusions, and deductibles is an
            important part of owning a vehicle.
          </p>

          <p>
            Optimum Automobiles can guide you through the general insurance
            process and help you understand what to review when exploring
            options for your vehicle.
          </p>

          <Link to="/contact" className="insurance-text-link">
            Talk to Our Team <span>→</span>
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="insurance-benefits insurance-section-padding">
        <div className="insurance-section-top">
          <div>
            <span className="insurance-eyebrow">WHY INSURANCE MATTERS</span>

            <h2>
              Make Informed
              <br />
              <span>Coverage Decisions.</span>
            </h2>
          </div>

          <p>
            Understand the important details of your policy with guidance
            designed to make the process easier to navigate.
          </p>
        </div>

        <div className="insurance-benefits-grid">
          {benefits.map((benefit) => (
            <article className="insurance-benefit-card" key={benefit.number}>
              <div className="insurance-benefit-top">
                <span>{benefit.number}</span>
                <span className="insurance-benefit-icon">{benefit.icon}</span>
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* INSURANCE TYPES */}
      <section className="insurance-types insurance-section-padding">
        <div className="insurance-types-heading">
          <span className="insurance-eyebrow">UNDERSTAND YOUR OPTIONS</span>

          <h2>
            Explore the Types of
            <br />
            <span>Motor Insurance.</span>
          </h2>

          <p>
            Different policies offer different levels of protection. Always
            read the policy wording and confirm what is and isn't covered.
          </p>
        </div>

        <div className="insurance-types-grid">
          {insuranceTypes.map((type) => (
            <article className="insurance-type-card" key={type.number}>
              <span className="insurance-type-number">{type.number}</span>

              <span className="insurance-type-label">{type.label}</span>

              <h3>{type.title}</h3>

              <p>{type.description}</p>

              <Link to="/contact" className="insurance-type-link">
                Ask Us About This <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="insurance-process insurance-section-padding">
        <div className="insurance-process-heading">
          <span className="insurance-eyebrow">A CLEARER WAY FORWARD</span>

          <h2>
            Insurance Assistance,
            <br />
            <span>Step by Step.</span>
          </h2>

          <p>
            A simple overview of how to explore your options and review the
            details before making a decision.
          </p>
        </div>

        <div className="insurance-process-grid">
          {insuranceSteps.map((step, index) => (
            <article className="insurance-process-card" key={step.number}>
              <div className="insurance-process-number">{step.number}</div>

              {index !== insuranceSteps.length - 1 && (
                <div className="insurance-process-connector"></div>
              )}

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="insurance-documents insurance-section-padding">
        <div className="insurance-documents-heading">
          <span className="insurance-eyebrow">GET READY</span>

          <h2>
            Documents You
            <br />
            <span>May Need.</span>
          </h2>

          <p>
            Requirements vary by insurer and transaction. Keep relevant
            vehicle details and existing policy information available.
          </p>
        </div>

        <div className="insurance-documents-list">
          {documents.map((document, index) => (
            <div className="insurance-document-row" key={document}>
              <span className="insurance-document-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{document}</p>

              <span className="insurance-document-check">✓</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="insurance-faq insurance-section-padding">
        <div className="insurance-faq-heading">
          <span className="insurance-eyebrow">COMMON QUESTIONS</span>

          <h2>
            Insurance,
            <br />
            <span>Made Simpler.</span>
          </h2>

          <p>
            Find answers to common questions about car insurance and policy
            options.
          </p>
        </div>

        <div className="insurance-faq-list">
          {faqs.map((faq, index) => (
            <details className="insurance-faq-item" key={faq.question}>
              <summary>
                <span className="insurance-faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="insurance-faq-question">
                  {faq.question}
                </span>

                <span className="insurance-faq-toggle">+</span>
              </summary>

              <div className="insurance-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="insurance-cta insurance-section-padding">
        <div className="insurance-cta-content">
          <span className="insurance-eyebrow">HERE TO HELP</span>

          <h2>
            Drive With Confidence.
            <br />
            <span>Know Your Coverage.</span>
          </h2>

          <p>
            Need help understanding insurance options for your car? Connect
            with Optimum Automobiles to discuss the next steps.
          </p>

          <div className="insurance-cta-actions">
            <Link
              to="/contact"
              className="insurance-btn insurance-btn-white"
            >
              Contact Our Team <span>↗</span>
            </Link>

            <Link to="/inventory" className="insurance-cta-secondary">
              Browse Inventory <span>→</span>
            </Link>
          </div>
        </div>

        <div className="insurance-cta-decoration">
          <span>O</span>
          <span>OPTIMUM</span>
        </div>
      </section>
    </main>
  );
}

export default InsuranceAssistance;