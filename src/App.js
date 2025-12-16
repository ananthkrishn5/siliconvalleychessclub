// COMPLETE App.js - FULL CODE with What We Offer + Branches in Home
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'coach', label: 'Coach' },
    { id: 'branches', label: 'Branches' },
    { id: 'events', label: 'Upcoming Events' },
    { id: 'winners', label: 'Winners' },
    { id: 'contact', label: 'Contact' }
  ];

  const chessImages = {
    hero: 'https://images.unsplash.com/photo-1578898783915-47b11afdbe71?w=1200&h=800&fit=crop&auto=format',
    coach: 'https://images.unsplash.com/photo-1603398938378-e54a6df8f675?w=800&h=600&fit=crop&auto=format',
    event1: 'https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=600&h=400&fit=crop&auto=format',
    event2: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c3f?w=600&h=400&fit=crop&auto=format',
    winner1: 'https://images.unsplash.com/photo-1571285802381-e0f8e0eb11b7?w=400&h=400&fit=crop&auto=format',
    trophy: 'https://images.unsplash.com/photo-1572124202138-12b681d17a81?w=600&h=400&fit=crop&auto=format',
    branch1: 'https://images.unsplash.com/photo-1560253021-9b21e33c12aa?w=600&h=400&fit=crop&auto=format',
    branch2: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24f?w=600&h=400&fit=crop&auto=format',
    branch3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format',
    branch4: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format',
    beginner: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop&auto=format',
    advanced: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format',
    tournament: 'https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=400&h=300&fit=crop&auto=format',
    online: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&auto=format',
    kids: 'https://images.unsplash.com/photo-1571285802381-e0f8e0eb11b7?w=400&h=300&fit=crop&auto=format',
    corporate: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format'
  };

  const branches = [
    {
      id: 1,
      city: 'New York',
      address: '123 Chess Ave, Manhattan, NY 10001',
      phone: '+1 (212) 555-0101',
      email: 'ny@chessacademy.com',
      image: chessImages.branch1,
      rating: 4.9
    },
    {
      id: 2,
      city: 'London',
      address: "45 King's Pawn St, Westminster, London SW1A 1AA",
      phone: '+44 20 7946 0958',
      email: 'london@chessacademy.com',
      image: chessImages.branch2,
      rating: 4.8
    },
    {
      id: 3,
      city: 'Mumbai',
      address: "78 Queen's Gambit Rd, Bandra West, Mumbai 400050",
      phone: '+91 22 1234 5678',
      email: 'mumbai@chessacademy.com',
      image: chessImages.branch3,
      rating: 4.9
    },
    {
      id: 4,
      city: 'Toronto',
      address: '56 Bishop St, Downtown Toronto, ON M5V 1A1',
      phone: '+1 (416) 555-0202',
      email: 'toronto@chessacademy.com',
      image: chessImages.branch4,
      rating: 4.7
    }
  ];

  const services = [
    {
      id: 1,
      title: 'Beginner Classes',
      description: 'Learn chess fundamentals from FIDE-rated coaches',
      icon: '♟️',
      image: chessImages.beginner,
      duration: '8 weeks',
      price: '$99'
    },
    {
      id: 2,
      title: 'Advanced Training',
      description: 'Master openings, middlegame & endgame strategies',
      icon: '♛',
      image: chessImages.advanced,
      duration: '12 weeks',
      price: '$199'
    },
    {
      id: 3,
      title: 'Tournament Prep',
      description: 'Get ready for FIDE-rated competitions',
      icon: '🏆',
      image: chessImages.tournament,
      duration: '6 weeks',
      price: '$149'
    },
    {
      id: 4,
      title: 'Online Coaching',
      description: 'Live 1-on-1 sessions anywhere, anytime',
      icon: '💻',
      image: chessImages.online,
      duration: 'Flexible',
      price: '$29/hr'
    },
    {
      id: 5,
      title: 'Kids Program',
      description: 'Fun chess classes for children 5-15 years',
      icon: '👶',
      image: chessImages.kids,
      duration: '10 weeks',
      price: '$89'
    },
    {
      id: 6,
      title: 'Corporate Training',
      description: 'Team building & strategic thinking workshops',
      icon: '🏢',
      image: chessImages.corporate,
      duration: 'Custom',
      price: 'Contact Us'
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/public/logo.jpeg" alt="Chess Academy Logo" className="logo-image" />
            <span className="logo-text">Silicon Valley Chess Club</span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <a 
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Home Section - Hero + What We Offer + Branches */}
      <section id="home" className={`section ${activeSection === 'home' ? 'active' : ''}`}>
        {/* Hero */}
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Master the Art of Chess</h1>
            <p className="hero-subtitle">Join our academy and elevate your game to grandmaster level</p>
            <button className="cta-button">Start Your Journey</button>
          </div>
          <div className="hero-image">
            <img src={chessImages.hero} alt="Chess Hero" loading="lazy" />
          </div>
        </div>

        {/* What We Offer Section - Inside Home */}
        <div className="offer-section">
          <div className="container">
            <h2 className="section-title offer-title">What We Offer</h2>
            <p className="section-subtitle">Comprehensive chess training programs for all levels</p>
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-image">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-details">
                      <span className="service-duration">{service.duration}</span>
                      <span className="service-price">{service.price}</span>
                    </div>
                    <button className="service-button">Enroll Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branches Section - Inside Home */}
        <div className="branches-section">
          <div className="container">
            <h2 className="section-title branches-title">Our Branches Worldwide</h2>
            <p className="section-subtitle">Training excellence available at multiple locations</p>
            <div className="branches-grid">
              {branches.map((branch) => (
                <div key={branch.id} className="branch-card">
                  <div className="branch-image">
                    <img src={branch.image} alt={`${branch.city} Branch`} loading="lazy" />
                    <div className="branch-rating">
                      <span>★ {branch.rating}</span>
                    </div>
                  </div>
                  <div className="branch-content">
                    <h3>{branch.city}</h3>
                    <p className="branch-address">{branch.address}</p>
                    <div className="branch-contact">
                      <div className="contact-detail">
                        <span>📞</span>
                        <span>{branch.phone}</span>
                      </div>
                      <div className="contact-detail">
                        <span>✉️</span>
                        <span>{branch.email}</span>
                      </div>
                    </div>
                    <button className="visit-button">Visit Branch</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branches Detail Section */}
      <section id="branches" className={`section ${activeSection === 'branches' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">All Our Chapters</h2>
          <div className="branches-full-grid">
            {branches.map((branch) => (
              <div key={branch.id} className="branch-card-full">
                <div className="branch-image-full">
                  <img src={branch.image} alt={`${branch.city} Branch`} loading="lazy" />
                </div>
                <div className="branch-content-full">
                  <h3>{branch.city} Chapter</h3>
                  <p className="branch-address-full">{branch.address}</p>
                  <div className="branch-features">
                    <span className="feature">Professional Coaches</span>
                    <span className="feature">Modern Facilities</span>
                    <span className="feature">Weekly Tournaments</span>
                  </div>
                  <div className="branch-contact-full">
                    <div className="contact-detail-full">
                      <span>📞 {branch.phone}</span>
                    </div>
                    <div className="contact-detail-full">
                      <span>✉️ {branch.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`section ${activeSection === 'about' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">About Our Academy</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>Established in 2015, our chess academy has trained over 5000 students worldwide across 20+ branches. We focus on strategic thinking, pattern recognition, and competitive play.</p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">IM/GM Produced</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Students Trained</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Branches Worldwide</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={chessImages.event1} alt="Chess Tournament" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section id="coach" className={`section ${activeSection === 'coach' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Meet Our Coach</h2>
          <div className="coach-card">
            <div className="coach-image">
              <img src={chessImages.coach} alt="Head Coach" loading="lazy" />
            </div>
            <div className="coach-details">
              <h3>GM Alexei Ivanov</h3>
              <p className="coach-title">International Grandmaster | FIDE Master Trainer</p>
              <ul className="coach-achievements">
                <li>3x National Champion</li>
                <li>World Championship Quarterfinalist</li>
                <li>15+ Years Coaching Experience</li>
              </ul>
              <button className="book-button">Book Session</button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className={`section ${activeSection === 'events' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Upcoming Events This Week</h2>
          <div className="events-grid">
            <div className="event-card">
              <img src={chessImages.event1} alt="Rapid Tournament" loading="lazy" />
              <div className="event-info">
                <h4>Saturday Rapid</h4>
                <p>Dec 16, 2025 | 10:00 AM</p>
                <p>15+2 Blitz format</p>
              </div>
            </div>
            <div className="event-card">
              <img src={chessImages.event2} alt="Weekly League" loading="lazy" />
              <div className="event-info">
                <h4>Sunday League</h4>
                <p>Dec 17, 2025 | 2:00 PM</p>
                <p>Weekly team competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section id="winners" className={`section ${activeSection === 'winners' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Recent Winners</h2>
          <div className="winners-grid">
            <div className="winner-card">
              <img src={chessImages.winner1} alt="Winner 1" loading="lazy" />
              <div className="winner-info">
                <h4>John Smith</h4>
                <p>1st Place - December Rapid</p>
              </div>
            </div>
            <div className="winner-card trophy-card">
              <img src={chessImages.trophy} alt="Tournament Trophy" loading="lazy" />
              <div className="winner-info">
                <h4>Monthly Championship</h4>
                <p>Overall Winner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <span>📧</span>
                <span>info@chessacademy.com</span>
              </div>
              <div className="contact-item">
                <span>📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>123 Chess Street, Tournament City</span>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Chess Academy. All rights reserved. ♔</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
