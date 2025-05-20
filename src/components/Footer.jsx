import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer-wrapper py-5 px-4">
      <div className="container">
        <div className="row justify-content-between">
          {/* Newsletter Section */}
          <div className="col-md-5 mb-4">
            <div className="d-flex align-items-center mb-2">
              <h5 className="mb-0 me-3 fw-semibold">Subscribe to Newsletter</h5>
              <button className="btn btn-dark rounded-pill px-3 py-1">
                →
              </button>
            </div>
            <hr className="my-2" />
            <p className="text-muted fs-5 mt-3">Stay in touch and get updates on what we do.</p>
          </div>

          {/* Links Section */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 col-sm-4">
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#">About Us</a></li>
                  <li className="mb-2"><a href="#">Features</a></li>
                  <li className="mb-2"><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-4">
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#">Integrations</a></li>
                  <li className="mb-2"><a href="#">Career</a></li>
                  <li className="mb-2"><a href="#">Blog</a></li>
                </ul>
              </div>
            </div>
            <hr className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
