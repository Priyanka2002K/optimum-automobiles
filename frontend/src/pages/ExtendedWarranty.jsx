import React from "react";
import { Link } from "react-router-dom";
import "./ExtendedWarranty.css";

const benefits = [
  {
    number: "01",
    icon: "✓",
    title: "Added Peace of Mind",
    description:
      "Explore eligible warranty options that may provide additional protection against specified mechanical or electrical failures.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Understand Your Coverage",
    description:
      "Learn about covered components, exclusions, claim conditions, and other important policy terms before choosing a plan.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Support When You Need It",
    description:
      "Understand the process for contacting the warranty provider and getting help if a covered issue occurs.",
  },
  {
    number: "04",
    icon: "→",
    title: "Guidance Before You Decide",
    description:
      "Our team can help you understand the available options for eligible vehicles and explain the next steps.",
  },
];

const coverageItems = [
  {
    number: "01",
    title: "Engine Components",
    description:
      "Depending on the selected plan, specified internal engine components may be covered against eligible mechanical failures.",
    icon: "01",
  },
  {
    number: "02",
    title: "Transmission",
    description:
      "Some plans include specified transmission components, subject to the provider's coverage terms and exclusions.",
    icon: "02",
  },
  {
    number: "03",
    title: "Electrical & Mechanical Parts",
    description:
      "Selected plans may cover certain listed electrical and mechanical components when the applicable conditions are met.",
    icon: "03",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose Your Vehicle",
    description:
      "Explore our pre-owned inventory and identify the vehicle you are interested in purchasing.",
  },
  {
    number: "02",
    title: "Check Eligibility",
    description:
      "Confirm whether the vehicle qualifies for an extended warranty based on its age, mileage, condition, and provider rules.",
  },
  {
    number: "03",
    title: "Review the Plan",
    description:
      "Understand the coverage period, covered components, exclusions, claim limits, and any applicable charges.",
  },
  {
    number: "04",
    title: "Confirm Your Coverage",
    description:
      "Review the final warranty documents and provider terms before deciding whether to purchase the plan.",
  },
];

const thingsToCheck = [
  "Which components are covered",
  "Warranty duration and mileage limits",
  "Exclusions and pre-existing conditions",
  "Claim limits and repair authorisation requirements",
  "Deductibles, service fees, or other applicable charges",
  "Approved repair centres and claim procedures",
];

const faqs = [
  {
    question: "What is an extended car warranty?",
    answer:
      "An extended warranty is a separate protection plan that may cover specified mechanical or electrical failures beyond the original warranty period, where applicable. The exact coverage depends on the provider and contract.",
  },
  {
    question: "Are all pre-owned cars eligible?",
    answer:
      "No. Eligibility may depend on vehicle age, mileage, condition, service history, inspection results, and the provider's rules.",
  },
  {
    question: "Does an extended warranty cover every repair?",
    answer:
      "No. Coverage is limited to the components and situations specified in the contract. Wear and tear, maintenance, pre-existing faults, and other exclusions may apply.",
  },
  {
    question: "How long does extended warranty coverage last?",
    answer:
      "The duration and mileage limit vary by plan. Review the warranty documents to confirm when coverage begins and when it ends.",
  },
  {
    question: "How do I make a warranty claim?",
    answer:
      "Follow the warranty provider's claim procedure. You may need to contact the provider before repairs begin and obtain repair authorisation. Check the contract for exact requirements.",
  },
];

function ExtendedWarranty() {
  return (
    <main className="extended-warranty-page">
      {/* HERO */}
      <section className="warranty-hero">
        <div className="warranty-hero-inner">
          <div className="warranty-hero-content">
            <span className="warranty-eyebrow">
              PROTECTION BEYOND THE PURCHASE
            </span>

            <h1>
              Drive With Confidence.
              <br />
              <span>Protect What Matters.</span>
            </h1>

            <p className="warranty-hero-description">
              Your car deserves thoughtful care beyond the day you buy it.
              Explore extended warranty options for eligible pre-owned
              vehicles and understand the protection available for your next
              drive.
            </p>

            <div className="warranty-hero-actions">
              <Link
                to="/contact"
                className="warranty-btn warranty-btn-red"
              >
                Explore Warranty Options <span>↗</span>
              </Link>

              <Link
                to="/inventory"
                className="warranty-btn warranty-btn-outline"
              >
                Browse Our Cars
              </Link>
            </div>

            <div className="warranty-hero-note">
              <span>✓</span>
              Understand the coverage before you choose
            </div>
          </div>

          <div className="warranty-hero-visual">
            <div className="warranty-image-frame">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
                alt="Premium pre-owned car representing long-term ownership confidence"
              />

              <div className="warranty-image-overlay"></div>

              <div className="warranty-image-caption">
                <span>CONFIDENCE FOR THE ROAD AHEAD</span>
                <h3>More Confidence. Every Mile.</h3>
              </div>
            </div>

            <div className="warranty-floating-card">
              <span className="warranty-floating-icon">✓</span>

              <div>
                <strong>Extended Warranty</strong>
                <p>Understand your protection options</p>
              </div>
            </div>

            <div className="warranty-hero-accent"></div>
          </div>
        </div>

        <div className="warranty-hero-bottom">
          <span>VEHICLE PROTECTION</span>
          <span className="warranty-bottom-line"></span>
          <span>COVERAGE GUIDANCE</span>
          <span className="warranty-bottom-line"></span>
          <span>OWNERSHIP CONFIDENCE</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="warranty-intro warranty-section-padding">
        <div>
          <span className="warranty-eyebrow">PLAN FOR THE UNEXPECTED</span>

          <h2>
            Enjoy the Drive.
            <br />
            <span>Understand Your Protection.</span>
          </h2>
        </div>

        <div className="warranty-intro-content">
          <p>
            Unexpected mechanical or electrical problems can affect the cost
            of owning a vehicle. Depending on the plan, an extended warranty
            may help cover certain eligible repairs.
          </p>

          <p>
            At Optimum Automobiles, we can help you understand the extended
            warranty options available for eligible vehicles, including the
            key terms and conditions to review before making a decision.
          </p>

          <Link to="/contact" className="warranty-text-link">
            Talk to Our Team <span>→</span>
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="warranty-benefits warranty-section-padding">
        <div className="warranty-section-top">
          <div>
            <span className="warranty-eyebrow">WHY CONSIDER A WARRANTY?</span>

            <h2>
              An Extra Layer
              <br />
              <span>Of Ownership Confidence.</span>
            </h2>
          </div>

          <p>
            Understand potential benefits and review the details carefully
            before selecting an extended warranty plan.
          </p>
        </div>

        <div className="warranty-benefits-grid">
          {benefits.map((benefit) => (
            <article className="warranty-benefit-card" key={benefit.number}>
              <div className="warranty-benefit-top">
                <span>{benefit.number}</span>
                <span className="warranty-benefit-icon">{benefit.icon}</span>
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section className="warranty-coverage warranty-section-padding">
        <div className="warranty-coverage-heading">
          <span className="warranty-eyebrow">UNDERSTAND WHAT MAY BE COVERED</span>

          <h2>
            Protection That
            <br />
            <span>Fits Your Vehicle.</span>
          </h2>

          <p>
            Coverage varies by provider and plan. These are examples of
            component categories that some extended warranty plans may
            include—not a guarantee of coverage.
          </p>
        </div>

        <div className="warranty-coverage-grid">
          {coverageItems.map((item) => (
            <article className="warranty-coverage-card" key={item.number}>
              <span className="warranty-coverage-number">{item.number}</span>

              <div className="warranty-coverage-icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <Link to="/contact" className="warranty-coverage-link">
                Learn More <span>↗</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="warranty-coverage-note">
          <span>i</span>
          <p>
            Actual coverage is determined solely by the selected warranty
            contract. Always verify inclusions, exclusions, claim limits, and
            eligibility before purchasing.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="warranty-process warranty-section-padding">
        <div className="warranty-process-heading">
          <span className="warranty-eyebrow">A SIMPLE WAY TO GET STARTED</span>

          <h2>
            From Car Selection
            <br />
            <span>To Warranty Clarity.</span>
          </h2>

          <p>
            Understand the important details before deciding whether an
            extended warranty is right for your vehicle.
          </p>
        </div>

        <div className="warranty-process-grid">
          {processSteps.map((step, index) => (
            <article className="warranty-process-card" key={step.number}>
              <div className="warranty-process-number">{step.number}</div>

              {index !== processSteps.length - 1 && (
                <div className="warranty-process-connector"></div>
              )}

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="warranty-checklist warranty-section-padding">
        <div className="warranty-checklist-content">
          <span className="warranty-eyebrow">BEFORE YOU SIGN</span>

          <h2>
            Know What
            <br />
            <span>Your Plan Includes.</span>
          </h2>

          <p>
            An extended warranty is a contract with specific conditions.
            Reviewing these details can help you understand the protection
            being offered.
          </p>

          <Link
            to="/contact"
            className="warranty-btn warranty-btn-red"
          >
            Discuss Your Options <span>↗</span>
          </Link>
        </div>

        <div className="warranty-checklist-list">
          {thingsToCheck.map((item, index) => (
            <div className="warranty-checklist-row" key={item}>
              <span className="warranty-checklist-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{item}</p>

              <span className="warranty-checklist-check">✓</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="warranty-faq warranty-section-padding">
        <div className="warranty-faq-heading">
          <span className="warranty-eyebrow">COMMON QUESTIONS</span>

          <h2>
            Extended Warranty,
            <br />
            <span>Explained.</span>
          </h2>

          <p>
            Understand the basics before deciding whether additional vehicle
            protection is suitable for you.
          </p>
        </div>

        <div className="warranty-faq-list">
          {faqs.map((faq, index) => (
            <details className="warranty-faq-item" key={faq.question}>
              <summary>
                <span className="warranty-faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="warranty-faq-question">
                  {faq.question}
                </span>

                <span className="warranty-faq-toggle">+</span>
              </summary>

              <div className="warranty-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="warranty-cta warranty-section-padding">
        <div className="warranty-cta-content">
          <span className="warranty-eyebrow">HERE FOR YOUR NEXT DRIVE</span>

          <h2>
            Buy With Confidence.
            <br />
            <span>Plan For The Road Ahead.</span>
          </h2>

          <p>
            Want to know whether an extended warranty is available for your
            chosen car? Contact our team to discuss eligibility and the
            options you can explore.
          </p>

          <div className="warranty-cta-actions">
            <Link
              to="/contact"
              className="warranty-btn warranty-btn-white"
            >
              Contact Our Team <span>↗</span>
            </Link>

            <Link to="/inventory" className="warranty-cta-secondary">
              Browse Inventory <span>→</span>
            </Link>
          </div>
        </div>

        <div className="warranty-cta-decoration">
          <span>O</span>
          <span>OPTIMUM</span>
        </div>
      </section>
    </main>
  );
}

export default ExtendedWarranty;