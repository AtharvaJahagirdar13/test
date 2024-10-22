import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>About Us</h3>
                <p>
                    Match Mania is your ultimate platform for connecting sports enthusiasts, 
                    offering a seamless experience for match schedules, updates, and more.
                </p>
            </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <p>Email: support@matchmania.com</p>
                <p>Phone: +123-456-7890</p>
            </div>
            <div className="footer-section">
                <h3>Partner with Us</h3>
                <p>
                    Interested in partnering with Match Mania? Reach out to us at 
                    <a href="mailto:partners@matchmania.com"> partners@matchmania.com</a>.
                </p>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Match Mania. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
