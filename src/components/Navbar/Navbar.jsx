import React from 'react'
import logo from "../../logo.png"
import "../../assets/scss/theme.scss"
function Navbar() {
  return (
    <header id="header" className="header fixed-top">
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div class="site-logo">
              <a className="scrollto" href="#hero-block"
                ><img
                  className="logo-icon"
                  src={logo}
                  alt="logo"
              /></a>
            </div>

            <div className="navbar-btn order-lg-2">
              <a
                className="btn btn-secondary"
                href="https://afritickets.events/2270-pwani-innovation-week"
                
                >Tickets</a
              >
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              id="navigation"
              className="navbar-collapse collapse justify-content-lg-end me-lg-3"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#about-section">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#speakers-section"
                    >Speakers</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#schedule-section"
                    >Schedule</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#tickets-section"
                    >Tickets</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#venue-section">Venue</a>
                </li>
                <li class="nav-item">
                  <a className="nav-link scrollto" href="#sponsors-section"
                    >Sponsors</a
                  >
                </li>
              </ul>
              {/* <!--//nav--> */}
            </div>
            {/* <!--//navabr-collapse--> */}
          </nav>
          {/* <!--//main-nav--> */}
        </div>
        {/* <!--//container--> */}
      </div>
      {/* <!--//branding--> */}
    </header>
  )
}

export default Navbar