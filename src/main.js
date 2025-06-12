import './style.css'
import { initializeNavigation } from './components/navigation.js'
import { initializeHero } from './components/hero.js'
import { initializeServices } from './components/services.js'
import { initializeAbout } from './components/about.js'
import { initializeContact } from './components/contact.js'
import { initializeScrollEffects } from './utils/scrollEffects.js'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <h2>Sathsalaha</h2>
      </div>
      <ul class="nav-menu">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#services" class="nav-link">Services</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <main>
    <section id="home" class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Excellence in Every Detail</h1>
          <p class="hero-subtitle">We deliver exceptional solutions that transform your vision into reality with precision, innovation, and unwavering commitment to quality.</p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="card-icon">⚡</div>
            <h3>Fast</h3>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">🎯</div>
            <h3>Precise</h3>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">✨</div>
            <h3>Quality</h3>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your needs</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🚀</div>
            <h3>Strategy & Consulting</h3>
            <p>Expert guidance to help you navigate complex challenges and achieve your business objectives with confidence.</p>
            <a href="#" class="service-link">Learn More →</a>
          </div>
          <div class="service-card">
            <div class="service-icon">💡</div>
            <h3>Innovation Solutions</h3>
            <p>Cutting-edge approaches that drive growth and keep you ahead of the competition in today's dynamic market.</p>
            <a href="#" class="service-link">Learn More →</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3>Design & Development</h3>
            <p>Beautiful, functional solutions that combine aesthetic excellence with robust performance and user experience.</p>
            <a href="#" class="service-link">Learn More →</a>
          </div>
          <div class="service-card">
            <div class="service-icon">📊</div>
            <h3>Analytics & Insights</h3>
            <p>Data-driven strategies that provide actionable insights to optimize performance and drive measurable results.</p>
            <a href="#" class="service-link">Learn More →</a>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <div class="section-header">
              <h2>About Sathsalaha</h2>
              <p>Building excellence through innovation and dedication</p>
            </div>
            <div class="about-description">
              <p>At Sathsalaha, we believe that excellence is not just a goal—it's a standard we uphold in every project, every interaction, and every solution we deliver. Our team combines years of expertise with fresh perspectives to create transformative experiences.</p>
              <p>We're passionate about turning complex challenges into elegant solutions, helping our clients achieve their vision while exceeding their expectations at every step of the journey.</p>
            </div>
            <div class="stats">
              <div class="stat">
                <div class="stat-number">150+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat">
                <div class="stat-number">98%</div>
                <div class="stat-label">Client Satisfaction</div>
              </div>
              <div class="stat">
                <div class="stat-number">5+</div>
                <div class="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          <div class="about-visual">
            <div class="about-image">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team collaboration" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your next project? Let's discuss how we can help.</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>hello@sathsalaha.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>New York, NY</p>
              </div>
            </div>
          </div>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Sathsalaha</h3>
          <p>Excellence in every detail</p>
        </div>
        <div class="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Sathsalaha. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Initialize all components
initializeNavigation()
initializeHero()
initializeServices()
initializeAbout()
initializeContact()
initializeScrollEffects()