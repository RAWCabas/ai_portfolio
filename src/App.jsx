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
              <a href="mailto:your-email@gmail.com" className="icon-link">@</a>
              <a href="https://github.com/RAWCabas" target="_blank" rel="noreferrer" className="icon-link">Git</a>
              <a href="#" className="icon-link">in</a>
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
            I am a software engineer focused on building robust backend systems in Java
            and connecting them with intelligent AI layers. I specialize in turning
            complex, unstructured data into clean, actionable software tools.
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
            Let's discuss freelance collaborations, technical architecture, or enterprise AI tracks.
          </p>
        </div>
      </section>

    </div>
  )
}

export default App