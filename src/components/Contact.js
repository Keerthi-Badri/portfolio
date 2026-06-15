import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Placeholder submission logic
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setLoading(false);
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">

                <h2 className="section-title">Contact Me</h2>

                <p className="section-subtitle">
                    Feel free to reach out for internships, collaboration, or project opportunities.
                    I’m always open to discussing software development roles and backend projects.
                </p>

                <div className="contact-content">

                    {/* Contact Info */}
                    <div className="contact-info">

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <a href="mailto:badrikeerthi18@gmail.com">
                                    badrikeerthi18@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-details">
                                <h3>Phone</h3>
                                <a href="tel:+919381055351">
                                    +91 9381055351
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Karimnagar, Telangana, India</p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitted && (
                            <p className="success-message">
                                Message sent successfully!
                            </p>
                        )}

                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;