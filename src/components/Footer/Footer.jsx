import React from 'react'
import "../../assets/scss/theme.scss"
import "../../assets/css/theme.css"
const Footer = () => {
  return (
    <>
            {/* <!-- footer --> */}
    <footer class="footer py-5 theme-bg-primary">
      <div class="container text-center">
        <ul class="social-list list-inline mb-4">
          <li class="list-inline-item me-3">
            <a href="#"><i class="fas fa-envelope"></i></a>
          </li>
          <li class="list-inline-item me-3">
            <a href="#"><i class="fab fa-twitter fa-fw"></i></a>
          </li>
          <li class="list-inline-item me-3">
            <a href="#"><i class="fab fa-instagram fa-fw"></i></a>
          </li>
          <li class="list-inline-item me-0">
            <a href="#"><i class="fab fa-youtube fa-fw"></i></a>
          </li>
        </ul>
        {/* <!--//social-list--> */}

        {/* <!-- <ul class="footer-links list-inline mx-auto mb-4">
          <li class="list-inline-item"><a href="#">Code of Conduct</a></li>
          <li class="list-inline-item">|</li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item">|</li>
          <li class="list-inline-item me-0"><a href="#">Privacy</a></li>
        </ul> --> */}
        {/* <!--//footer-link--> */}

        {/* <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
        <small class="copyright">Pwani Innovation Week 2023 | Swahilipot Hub Foundation</small>
      </div>
      {/* <!--//container--> */}
    </footer>
    
    </>
  )
}

export default Footer