import Link from 'next/link';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <section id="contact" className="contact-section">
        <div className="form-container">
          <h2 className="form-title">
            Have a <span className="highlight">Question?</span>
          </h2>
          <h3 className="form-subtitle">Contact Us</h3>

          <form className="form">
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="input"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="textarea"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="submit-container">
              <button
                type="submit"
                className="submit-button"
              >
                <Link href="mailto:hirahammad34@gmail.com" className="submit-link">Submit</Link>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
