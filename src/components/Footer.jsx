import { ShoppingBag } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><ShoppingBag size={20} /> ShopZone</h3>
            <p>Your one-stop shop for everything you need. Quality products, best prices.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@shopzone.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ShopZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
