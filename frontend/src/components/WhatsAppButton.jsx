function WhatsAppButton() {
  const phoneNumber = "REPLACE_WITH_BUSINESS_NUMBER";

  const message = encodeURIComponent(
    "Hello, I would like to enquire about your automotive services."
  );

  const isConfigured = /^\d{8,15}$/.test(phoneNumber);

  if (!isConfigured) {
    return null;
  }

  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span aria-hidden="true">✆</span>
    </a>
  );
}

export default WhatsAppButton;