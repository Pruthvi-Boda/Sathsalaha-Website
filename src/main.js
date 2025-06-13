import './style.css'
import { initializeNavigation } from './components/navigation.js'
import { initializeHero } from './components/hero.js'
import { initializeServices } from './components/services.js'
import { initializeAbout } from './components/about.js'
import { initializeContact } from './components/contact.js'
import { initializeScrollEffects } from './utils/scrollEffects.js'
import { initializePortfolio } from './components/portfolio.js'
import { initializeBlog } from './components/blog.js'
import { initializeNewsletter } from './components/newsletter.js'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <div class="brand-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
            <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" stroke="white" stroke-width="2" fill="none"/>
            <circle cx="16" cy="16" r="3" fill="white"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#6366f1"/>
                <stop offset="100%" style="stop-color:#8b5cf6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2>Sathsalaha</h2>
      </div>
      <ul class="nav-menu">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#services" class="nav-link">Services</a></li>
        <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#blog" class="nav-link">Blog</a></li>
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
      <div class="hero-background">
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">✨</span>
            <span>Excellence in Every Detail</span>
          </div>
          <h1 class="hero-title">Transform Your Vision Into <span class="gradient-text">Reality</span></h1>
          <p class="hero-subtitle">We deliver exceptional solutions that combine innovation, precision, and unwavering commitment to quality. Your success is our mission.</p>
          <div class="hero-buttons">
            <button class="btn btn-primary">
              <span>Get Started</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <polygon points="5,3 19,12 5,21" fill="currentColor"/>
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">150+</div>
              <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Client Satisfaction</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional team collaboration" />
            <div class="image-overlay"></div>
          </div>
          <div class="floating-card card-1">
            <div class="card-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Quick delivery</p>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">🎯</div>
            <h3>Precision</h3>
            <p>Accurate results</p>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">✨</div>
            <h3>Premium Quality</h3>
            <p>Excellence guaranteed</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Our Services</div>
          <h2>Comprehensive Solutions <span class="gradient-text">Tailored</span> to Your Needs</h2>
          <p>We offer a full spectrum of services designed to help your business thrive in today's competitive landscape</p>
        </div>
        <div class="services-grid">
          <div class="service-card featured">
            <div class="service-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L20 12H30L22 18L26 28L16 22L6 28L10 18L2 12H12L16 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div class="service-badge">Popular</div>
            </div>
            <h3>Strategy & Consulting</h3>
            <p>Expert guidance to navigate complex challenges and achieve your business objectives with confidence and clarity.</p>
            <ul class="service-features">
              <li>Business Analysis</li>
              <li>Market Research</li>
              <li>Strategic Planning</li>
            </ul>
            <a href="#" class="service-link">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="4" fill="white"/>
                </svg>
              </div>
            </div>
            <h3>Innovation Solutions</h3>
            <p>Cutting-edge approaches that drive growth and keep you ahead of the competition in today's dynamic market.</p>
            <ul class="service-features">
              <li>Technology Integration</li>
              <li>Process Optimization</li>
              <li>Digital Transformation</li>
            </ul>
            <a href="#" class="service-link">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="24" height="24" rx="4" fill="currentColor"/>
                  <path d="M12 16L14 18L20 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Design & Development</h3>
            <p>Beautiful, functional solutions that combine aesthetic excellence with robust performance and user experience.</p>
            <ul class="service-features">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Mobile Applications</li>
            </ul>
            <a href="#" class="service-link">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 8L16 2L28 8V24L16 30L4 24V8Z" fill="currentColor"/>
                  <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" fill="white"/>
                </svg>
              </div>
            </div>
            <h3>Analytics & Insights</h3>
            <p>Data-driven strategies that provide actionable insights to optimize performance and drive measurable results.</p>
            <ul class="service-features">
              <li>Performance Analytics</li>
              <li>Business Intelligence</li>
              <li>Reporting & Dashboards</li>
            </ul>
            <a href="#" class="service-link">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Our Work</div>
          <h2>Featured <span class="gradient-text">Projects</span></h2>
          <p>Discover how we've helped businesses transform their vision into reality</p>
        </div>
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="web">Web Development</button>
          <button class="filter-btn" data-filter="design">Design</button>
          <button class="filter-btn" data-filter="consulting">Consulting</button>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item" data-category="web design">
            <div class="portfolio-image">
              <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" alt="E-commerce Platform" />
              <div class="portfolio-overlay">
                <div class="portfolio-content">
                  <h3>E-commerce Platform</h3>
                  <p>Modern online store with advanced features</p>
                  <div class="portfolio-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
                <button class="portfolio-btn">View Project</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="design consulting">
            <div class="portfolio-image">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Brand Identity Design" />
              <div class="portfolio-overlay">
                <div class="portfolio-content">
                  <h3>Brand Identity Design</h3>
                  <p>Complete brand transformation for tech startup</p>
                  <div class="portfolio-tags">
                    <span>Branding</span>
                    <span>UI/UX</span>
                    <span>Strategy</span>
                  </div>
                </div>
                <button class="portfolio-btn">View Project</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="web">
            <div class="portfolio-image">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Corporate Website" />
              <div class="portfolio-overlay">
                <div class="portfolio-content">
                  <h3>Corporate Website</h3>
                  <p>Professional website with CMS integration</p>
                  <div class="portfolio-tags">
                    <span>WordPress</span>
                    <span>PHP</span>
                    <span>MySQL</span>
                  </div>
                </div>
                <button class="portfolio-btn">View Project</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="consulting">
            <div class="portfolio-image">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Business Analytics Dashboard" />
              <div class="portfolio-overlay">
                <div class="portfolio-content">
                  <h3>Analytics Dashboard</h3>
                  <p>Real-time business intelligence platform</p>
                  <div class="portfolio-tags">
                    <span>Python</span>
                    <span>D3.js</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>
                <button class="portfolio-btn">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <div class="section-header">
              <div class="section-badge">About Sathsalaha</div>
              <h2>Building Excellence Through <span class="gradient-text">Innovation</span> and Dedication</h2>
              <p>Your trusted partner in digital transformation and business growth</p>
            </div>
            <div class="about-description">
              <p>At Sathsalaha, we believe that excellence is not just a goal—it's a standard we uphold in every project, every interaction, and every solution we deliver. Our team combines years of expertise with fresh perspectives to create transformative experiences.</p>
              <p>We're passionate about turning complex challenges into elegant solutions, helping our clients achieve their vision while exceeding their expectations at every step of the journey.</p>
            </div>
            <div class="about-features">
              <div class="feature-item">
                <div class="feature-icon">🏆</div>
                <div>
                  <h4>Award-Winning Team</h4>
                  <p>Recognized for excellence in design and development</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🚀</div>
                <div>
                  <h4>Cutting-Edge Technology</h4>
                  <p>Always using the latest tools and methodologies</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🤝</div>
                <div>
                  <h4>Client-Centric Approach</h4>
                  <p>Your success is our primary focus and motivation</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-visual">
            <div class="about-image">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team collaboration" />
              <div class="image-decoration"></div>
            </div>
            <div class="about-card">
              <div class="card-content">
                <h4>Our Mission</h4>
                <p>To empower businesses with innovative solutions that drive growth and success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog" class="blog">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Latest Insights</div>
          <h2>From Our <span class="gradient-text">Blog</span></h2>
          <p>Stay updated with the latest trends, tips, and insights from our experts</p>
        </div>
        <div class="blog-grid">
          <article class="blog-card featured">
            <div class="blog-image">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Digital Transformation" />
              <div class="blog-category">Strategy</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">Jan 15, 2025</span>
                <span class="blog-read-time">5 min read</span>
              </div>
              <h3>The Future of Digital Transformation in 2025</h3>
              <p>Explore the key trends and technologies that will shape digital transformation strategies in the coming year.</p>
              <a href="#" class="blog-link">Read More</a>
            </div>
          </article>
          
          <article class="blog-card">
            <div class="blog-image">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" alt="UX Design" />
              <div class="blog-category">Design</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">Jan 12, 2025</span>
                <span class="blog-read-time">3 min read</span>
              </div>
              <h3>10 UX Design Principles for Better User Engagement</h3>
              <p>Learn essential UX design principles that can significantly improve user engagement and conversion rates.</p>
              <a href="#" class="blog-link">Read More</a>
            </div>
          </article>
          
          <article class="blog-card">
            <div class="blog-image">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Business Growth" />
              <div class="blog-category">Business</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">Jan 10, 2025</span>
                <span class="blog-read-time">4 min read</span>
              </div>
              <h3>Scaling Your Business with Smart Technology</h3>
              <p>Discover how the right technology choices can accelerate your business growth and operational efficiency.</p>
              <a href="#" class="blog-link">Read More</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h2>Stay in the Loop</h2>
            <p>Get the latest insights, tips, and updates delivered straight to your inbox</p>
          </div>
          <form class="newsletter-form">
            <div class="form-group">
              <input type="email" placeholder="Enter your email address" required>
              <button type="submit" class="btn btn-primary">
                <span>Subscribe</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <p class="newsletter-disclaimer">No spam, unsubscribe at any time</p>
          </form>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Get In Touch</div>
          <h2>Ready to Start Your <span class="gradient-text">Next Project?</span></h2>
          <p>Let's discuss how we can help transform your vision into reality</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>sri@sathsalaha.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.52 21.39 21 20.77 21C9.39 21 0 11.61 0 0.23C0 -0.39 0.48 -1 1.08 -1H4.08C4.68 -1 5.08 -0.39 5.08 0.23C5.08 2.23 5.48 4.23 6.28 6.03C6.48 6.43 6.38 6.93 6.08 7.23L4.08 9.23C5.68 12.43 8.57 15.32 11.77 16.92L13.77 14.92C14.07 14.62 14.57 14.52 14.97 14.72C16.77 15.52 18.77 15.92 20.77 15.92C21.39 15.92 22 16.4 22 16.92Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 9676764433</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>Prestigy Sky Tech, Nanakramguda, Financial District, Floor 16 - Sky One, Hyderabad</p>
              </div>
            </div>
            <div class="social-links">
              <h4>Follow Us</h4>
              <div class="social-icons">
                <a href="#" class="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <form class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Subject" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="url(#footerGradient)"/>
              <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" stroke="white" stroke-width="2" fill="none"/>
              <circle cx="16" cy="16" r="3" fill="white"/>
              <defs>
                <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#6366f1"/>
                  <stop offset="100%" style="stop-color:#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Sathsalaha</h3>
          <p>Excellence in every detail. Transforming visions into reality with precision and innovation.</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Services</h4>
            <a href="#services">Strategy & Consulting</a>
            <a href="#services">Innovation Solutions</a>
            <a href="#services">Design & Development</a>
            <a href="#services">Analytics & Insights</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-column">
            <h4>Connect</h4>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Pinterest</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Sathsalaha. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
`

// Initialize all components
initializeNavigation()
initializeHero()
initializeServices()
initializePortfolio()
initializeAbout()
initializeBlog()
initializeNewsletter()
initializeContact()
initializeScrollEffects()