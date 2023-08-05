import "../App.css";
import Button from "./button";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <img src="/src/components/logo.jpeg" className="logo" alt="Logo" />
        <p>TRASAVE travel fund is a good way to track your travel money.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>About </h3>
        <ul>
          <li>Technical info</li>
          <li>Other Productss</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us </h3>
        <p>Benglore, India </p>
        <p>80030 10108</p>
        <p>hr@curlistic.com</p>
      </div>
      <div className="footer-section">
        <h3>Subscribe Newsletter</h3>
        <input type="email" placeholder="email"></input>
        <Button Display="Subscribe" />
        <br />
      </div>
      <br />
      <div className="copyright">© 2023 Curlistic. All rights reserved.</div>
    </div>
  );
};

export default Footer;
