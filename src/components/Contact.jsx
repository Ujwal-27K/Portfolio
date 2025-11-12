import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  // Get it from https://formspree.io/forms after creating an account
  const [state, handleSubmit] = useForm('movyqgyr');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <h3>Thank you for your message!</h3>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's connect and build something amazing together</p>
        
        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out to me through any of the following channels:</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ujwal.khairnar.uk@gmail.com">ujwal.khairnar.uk@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919822673017">+91 9822673017</a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/ujwal-khairnar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/ujwal-khairnar
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <div>
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/ujwal-khairnar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/ujwal-khairnar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with Formspree */}
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message here..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
