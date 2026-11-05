import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OwnershipTransfer.css";

const transferSteps = [
  {
    number: "01",
    title: "Submit Your Details",
    description:
      "Share the vehicle and contact details so our team can understand your transfer requirements.",
  },
  {
    number: "02",
    title: "Verify Documents",
    description:
      "Review the required paperwork for the vehicle and confirm that the available documents are complete.",
  },
  {
    number: "03",
    title: "Complete Formalities",
    description:
      "Follow the applicable RTO process and complete the necessary ownership transfer formalities.",
  },
  {
    number: "04",
    title: "Track the Application",
    description:
      "Keep your application details and supporting documents available while the transfer is processed.",
  },
];

const documentGroups = [
  {
    number: "01",
    title: "Vehicle Documents",
    items: [
      "Registration Certificate (RC)",
      "Valid motor insurance",
      "Pollution Under Control (PUC) certificate, where applicable",
      "Chassis and engine details, if required",
    ],
  },
  {
    number: "02",
    title: "Buyer Documents",
    items: [
      "Valid identity proof",
      "Address proof",
      "PAN or Form 60, where applicable",
      "Passport-size photograph, if required",
    ],
  },
  {
    number: "03",
    title: "Seller Documents",
    items: [
      "Valid identity proof",
      "Signed transfer application and forms",
      "Original RC and supporting vehicle papers",
      "Additional documents requested by the RTO, if applicable",
    ],
  },
];

const faqs = [
  {
    question: "Why is ownership transfer important?",
    answer:
      "It updates the registered owner's details with the relevant registering authority. Buyers and sellers should ensure that the transfer is completed and retain the relevant acknowledgement and records.",
  },
  {
    question: "Which documents are usually required?",
    answer:
      "Common requirements include the Registration Certificate, transfer application forms, identity and address proof, insurance details, and other documents applicable to the vehicle and transaction. Confirm the current checklist with your RTO.",
  },
  {
    question: "How long does the transfer take?",
    answer:
      "Processing time varies depending on the registering authority, document verification, vehicle circumstances, and whether additional information is needed. The dealership can help you understand the next steps.",
  },
  {
    question: "Can ownership be transferred if the vehicle has a loan?",
    answer:
      "A vehicle with an active hypothecation or loan may require financier consent and additional formalities. Check the loan status and applicable RTO requirements before proceeding.",
  },
];

function OwnershipTransfer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    vehicleNumber: "",
    vehicleModel: "",
    city: "",
    transferType: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Optimum Automobiles, I need assistance with vehicle ownership transfer.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
I am the: ${formData.role}
Vehicle Number: ${formData.vehicleNumber}
Vehicle Model: ${formData.vehicleModel}
City: ${formData.city}
Transfer Type: ${formData.transferType}
Additional Details: ${formData.message}`;

    // Add the dealership's verified WhatsApp number here.
    const whatsappNumber = "";

    if (!whatsappNumber) {
      alert(
        "Your form is ready. Please configure the dealership's WhatsApp number to send this enquiry."
      );
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="ownership-page">
      <section className="ownership-hero">
        <div className="ownership-hero-content">
          <span className="ownership-eyebrow">
            OWNERSHIP TRANSFER ASSISTANCE
          </span>

          <h1>
            A Smoother
            <br />
            <span>Ownership Transfer.</span>
          </h1>

          <p>
            Make your vehicle ownership transfer easier with clear guidance,
            document preparation, and assistance with the applicable
            registration formalities.
          </p>

          <div className="ownership-hero-actions">
            <a href="#transfer-enquiry" className="ownership-primary-btn">
              Request Assistance <span>↗</span>
            </a>

            <a href="#transfer-process" className="ownership-secondary-btn">
              Explore the Process
            </a>
          </div>

          <div className="ownership-trust-points">
            <span><b>✓</b> Clear Guidance</span>
            <span><b>✓</b> Document Checklist</span>
            <span><b>✓</b> Personal Assistance</span>
          </div>
        </div>

        <div className="ownership-hero-visual">
          <div className="ownership-image-frame">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
              alt="Premium car representing a vehicle ownership transfer"
            />

            <div className="ownership-image-caption">
              <span className="ownership-caption-line"></span>
              Making Every Step Clearer
            </div>
          </div>

          <div className="ownership-floating-card">
            <span className="ownership-floating-icon">✓</span>
            <div>
              <strong>Transfer Support</strong>
              <p>Guidance from enquiry to formalities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ownership-benefits">
        <article>
          <span className="ownership-benefit-number">01</span>
          <div>
            <h3>Know What's Required</h3>
            <p>Understand the paperwork relevant to your vehicle.</p>
          </div>
        </article>

        <article>
          <span className="ownership-benefit-number">02</span>
          <div>
            <h3>Get Guided Assistance</h3>
            <p>Receive guidance on the next steps in the process.</p>
          </div>
        </article>

        <article>
          <span className="ownership-benefit-number">03</span>
          <div>
            <h3>Stay Informed</h3>
            <p>Keep your documents and application details organised.</p>
          </div>
        </article>
      </section>

      <section className="ownership-process" id="transfer-process">
        <div className="ownership-section-heading">
          <span className="ownership-eyebrow">HOW IT WORKS</span>
          <h2>
            Four Steps.
            <br />
            <span>One Clearer Process.</span>
          </h2>
          <p>
            Every transfer is different. Our team can help you understand
            the process that applies to your vehicle and situation.
          </p>
        </div>

        <div className="ownership-steps-grid">
          {transferSteps.map((step) => (
            <article className="ownership-step-card" key={step.number}>
              <span className="ownership-step-number">{step.number}</span>
              <div className="ownership-step-line"></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ownership-documents">
        <div className="ownership-section-heading">
          <span className="ownership-eyebrow">PREPARE IN ADVANCE</span>
          <h2>
            Your Document
            <br />
            <span>Checklist.</span>
          </h2>
          <p>
            These are common document categories, not a definitive list.
            Exact requirements depend on the vehicle, transaction, and
            registering authority.
          </p>
        </div>

        <div className="ownership-document-grid">
          {documentGroups.map((group) => (
            <article className="ownership-document-card" key={group.number}>
              <div className="ownership-document-header">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="ownership-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="ownership-document-note">
          Please confirm the current forms and requirements with the relevant
          RTO before submitting original documents.
        </p>
      </section>

     
      <section className="ownership-faq">
        <div className="ownership-section-heading">
          <span className="ownership-eyebrow">COMMON QUESTIONS</span>
          <h2>
            What You Need
            <br />
            <span>To Know.</span>
          </h2>
        </div>

        <div className="ownership-faq-list">
          {faqs.map((faq, index) => (
            <article
              className={`ownership-faq-item ${
                openFaq === index ? "active" : ""
              }`}
              key={faq.question}
            >
              <button
                type="button"
                className="ownership-faq-question"
                onClick={() =>
                  setOpenFaq(openFaq === index ? -1 : index)
                }
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <span className="ownership-faq-toggle">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              {openFaq === index && (
                <p className="ownership-faq-answer">{faq.answer}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="ownership-bottom-cta">
        <div>
          <span>NEED HELP WITH YOUR VEHICLE?</span>
          <h2>Let's Talk About Your Transfer.</h2>
          <p>
            Contact our team to discuss your requirements and understand
            the next steps.
          </p>
        </div>

        <Link to="/contact" className="ownership-cta-btn">
          Contact Our Team <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default OwnershipTransfer;