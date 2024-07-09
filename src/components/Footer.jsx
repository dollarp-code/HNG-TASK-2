const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h2>Upgrade Your Seating Experience today!</h2>
          <p>
            Shop now and transform your space with a touch of modern elegance.
          </p>
          <button className="btn-showcase">See Catalogue</button>
        </div>
        <img
          src="/images/image-14.png"
          className="float2"
          alt="floating chair"
        />
        <img
          src="/images/image-15.png"
          className="float3"
          alt="floating chair"
        />

        <div className="footer-container">
          <div className="footer-inner">
            <div className="footer-left">
              <div className="footer-left-text">
                <h2>VEECKER</h2>
                <p>Style Meets Comfort</p>
              </div>
              <div className="footer-social">
                <span>
                  <img
                    src="/images/tiktok_symbol.svg.svg"
                    alt="instagram-logo"
                  />
                </span>
                <span>
                  <img src="/images/Logo.svg.svg" alt="instagram-logo" />
                </span>
                <span>
                  <img src="/images/x_logo.svg.svg" alt="x-logo" />
                </span>
              </div>
            </div>
            <div className="footer-right">
              <div>
                <h3>Company</h3>
                <ul className="right-list">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Useful Links</h3>
                <ul className="right-list">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Resources</h3>
                <ul className="right-list">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Subscribe to Newsletter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">Copyright &copy; 2024 Veecker</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
