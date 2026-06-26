import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-section">
          <h2>⚽ JerseyHub</h2>

          <p>
            Your one-stop destination for authentic Football,
            Cricket, IPL and National Team jerseys at the best prices.
          </p>

          <div className="social-icons">

            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />

          </div>
        </div>

        {/* Shop */}

        <div className="footer-section">

          <h3>Shop</h3>

          <ul>
            <li>Football Clubs</li>
            <li>Football Nations</li>
            <li>IPL Jerseys</li>
            <li>Cricket Jerseys</li>
            <li>New Arrivals</li>
          </ul>

        </div>

        {/* Customer */}

        <div className="footer-section">

          <h3>Customer Service</h3>

          <ul>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>

        </div>

        {/* Company */}

        <div className="footer-section">

          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="payment-icons">

          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />

        </div>

        <p>
          © 2026 JerseyHub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;