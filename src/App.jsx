import React from 'react'
import './App.css'
import myProfilePic from './assets/profile.png'
import { useSlideIn } from './hooks/useSlideIn'

function App() {
  // Hero: left content slides in from left, image from right
  const heroContentRef = useSlideIn({ threshold: 0.1, delay: 100 })
  const heroImageRef = useSlideIn({ threshold: 0.1, delay: 250 })

  // About Me section
  const aboutHeadRef = useSlideIn({ threshold: 0.2 })
  const aboutBodyRef = useSlideIn({ threshold: 0.2, delay: 150 })

  // Skills section
  const skillsHeadRef = useSlideIn({ threshold: 0.2 })
  const skillsBody1Ref = useSlideIn({ threshold: 0.2, delay: 150 })
  const skillsBody2Ref = useSlideIn({ threshold: 0.2, delay: 280 })

  // Portfolio section
  const portfolioHeadRef = useSlideIn({ threshold: 0.2 })
  const portfolioBodyRef = useSlideIn({ threshold: 0.2, delay: 150 })

  // Contact section
  const contactHeadRef = useSlideIn({ threshold: 0.2 })
  const contactBodyRef = useSlideIn({ threshold: 0.2, delay: 150 })
  const contactFbRef = useSlideIn({ threshold: 0.2, delay: 250 })
  const contactPhoneRef = useSlideIn({ threshold: 0.2, delay: 350 })
  const contactEmailRef = useSlideIn({ threshold: 0.2, delay: 450 })

  return (
    <div className="portfolio-container">

      {/* 1. NAVIGATION BAR — slides down from top via CSS keyframe on page load */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">RC</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact"><button className="contact-btn">CONTACT ME</button></a></li>
        </ul>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="hero">
        {/* Hero left content — slides from left */}
        <div className="hero-left">
          <div className="hero-content slide-from-left" ref={heroContentRef}>
            <p className="hero-greeting">Hi, I am</p>
            <h1 className="hero-name">Rhinn Cabas</h1>
            <p className="hero-title">Java Developer / AI Specialist</p>

            <div className="social-icons">
              {/* Email */}
              <a href="mailto:your-email@gmail.com" className="icon-link" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/RAWCabas" target="_blank" rel="noreferrer" className="icon-link" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="icon-link" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hero right image — slides from right */}
        <div className="hero-right">
          <img
            src={myProfilePic}
            alt="Your Profile"
            className="hero-image slide-from-right"
            ref={heroImageRef}
          />
        </div>
      </header>

      {/* 3. ABOUT ME SECTION */}
      <section id="about" className="content-section premium-light">
        <div className="section-inner">
          <h2 className="slide-from-left" ref={aboutHeadRef}>About Me</h2>
          <p className="slide-from-bottom" ref={aboutBodyRef}>
            Analytical Computer Engineer specializing in smart automation,
            embedded systems, and machine learning integration.
            Demonstrates hands-on expertise in hardware prototyping, 3D mechanical modeling,
            and deploying Edge AI and computer vision solutions.
            A proven leader and collaborative researcher dedicated to bridging
            the gap between hardware mechanics and software intelligence.
          </p>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="content-section premium-dark">
        <div className="section-inner">
          <h2 className="slide-from-right" ref={skillsHeadRef}>Skills</h2>
          <p className="slide-from-bottom" ref={skillsBody1Ref} style={{ marginBottom: '1rem' }}>
            <strong>Core Engineering:</strong> Java, Android Studio, OOP, Git Architecture
          </p>
          <p className="slide-from-bottom" ref={skillsBody2Ref}>
            <strong>Web &amp; AI Systems:</strong> React.js, Node.js, REST API Integrations, Intelligent Agents
          </p>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section id="portfolio" className="content-section premium-light">
        <div className="section-inner">
          <h2 className="slide-from-left" ref={portfolioHeadRef}>Portfolio</h2>
          <p className="slide-from-bottom" ref={portfolioBodyRef}>
            Showcasing production-ready frameworks, automation models, and application blueprints.
          </p>
        </div>
      </section>

      {/* 6. CONTACT ME SECTION */}
      <section id="contact" className="content-section premium-dark">
        <div className="section-inner">
          <h2 className="slide-from-right" ref={contactHeadRef}>Contact Me</h2>
          <p className="slide-from-bottom" ref={contactBodyRef}>
            Let&apos;s discuss freelance collaborations, technical architecture, or enterprise AI tracks.
          </p>

          {/* Contact Details — horizontal row */}
          <div className="contact-links">

            {/* Facebook */}
            <a
              href="https://web.facebook.com/rhinnanthonwilliam.cabas"
              target="_blank"
              rel="noreferrer"
              className="contact-link slide-from-bottom"
              ref={contactFbRef}
            >
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </span>
              <span className="contact-label">facebook.com/rhinnanthonwilliam.cabas</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+639453507389"
              className="contact-link slide-from-bottom"
              ref={contactPhoneRef}
            >
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.01 21 3 13.99 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
              </span>
              <span className="contact-label">+63 945 350 7389</span>
            </a>

            {/* Email */}
            <a
              href="mailto:rhinnanthon@gmail.com"
              className="contact-link slide-from-bottom"
              ref={contactEmailRef}
            >
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              <span className="contact-label">rhinnanthon@gmail.com</span>
            </a>

          </div>
        </div>
      </section>

    </div>
  )
}

export default App