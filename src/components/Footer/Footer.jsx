import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-img-box">
          <a href="https://www.trickysys.com/"  rel="noreferrer" target="_blank">
            <img className='footer-img' src="/images/trickyOne.png" alt="trickySys_Logo" />
          </a>
          </div>

          <div className="footer-info">
            <div className="info-box">
              <h1 className="footer-heading">
                Contact Us
              </h1>
              <a className='footer-subheading' href="https://www.trickysys.com/">
                <h4>TrickySys</h4>
              </a>
              <h4>8446292927</h4>
            </div>

            <div className="info-box">
              <h1 className="footer-heading">
                Address
              </h1>
                <h4 className='footer-subheading'>Shankar Nagar, Nagpur, <br/> Maharashtra - 440010</h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
