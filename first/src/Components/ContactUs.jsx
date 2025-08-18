import React, { useState } from "react";
import "../assets/Images/Styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy success
    setSuccess(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="contact-container">
      <h2>📞 Contact Us</h2>
      <p>We’d love to hear from you! Reach out with questions, feedback, or support.</p>

      <div className="contact-grid">
        {/* Left Side Info */}
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>Ramaya Foods, Green Park, Kolkata, India</p>

          <h3>📞 Phone</h3>
          <p>+91 9330646416</p>

          <h3>📧 Email</h3>
          <p>support@ramayafoods.com</p>
        </div>

        {/* Right Side Form */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>

          {success && <p className="success-msg">✅ Your message has been sent!</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;




