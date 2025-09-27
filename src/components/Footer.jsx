import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>WebGuard</h5>
            <p>Advanced website security and fault detection for a safer internet.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#features" className="text-light">Features</a></li>
              <li><a href="#history" className="text-light">History</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-envelope me-2"></i> info@webguard.com</li>
              <li><i className="fas fa-phone me-2"></i> +91 8853070705</li>
              <li><i className="fas fa-map-marker-alt me-2"></i> Rupnagar , Punjab , 144533</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 footer-divider" />
        <div className="text-center">
          <p>&copy; 2025 WebGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer