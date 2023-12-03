import React from 'react';

const Footer = () => {
  return (
<footer className="bg-dark text-light py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>ABOUT</h5>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Flipkart Wholesale</li>
              <li>Cleartrip</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>HELP</h5>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>CONSUMER POLICY</h5>
            <ul>
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>SOCIAL</h5>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h5>Mail Us:</h5>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>
          </div>
          <div className="col-md-6">
            <h5>Registered Office Address:</h5>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India<br />
              CIN : U51109KA2012PTC066107<br />
              Telephone: 044-45614700
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>Become a Seller | Advertise | Gift Cards | Help Center</p>
            <p>© 2007-2023 Flipkart.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
