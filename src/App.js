import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    message: '', 
    service: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    hero: 'images/heroimg.jpeg',
    coach: '/images/venkat.jpg',
    event1: '/images/rapid.jpeg',
    event2: '/images/weekly.jpeg',
    winner1: '/images/user.jpeg',
    trophy: '/images/user.jpeg',
    branch1: '/images/sfo.png',
    branch2: '/images/London.jpeg',
    branch3: '/images/Mumbai.png',
    beginner: '/images/Beginner.png',
    advanced: '/images/Advanced.png',
    tournament: '/images/tournament.jpeg',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const emailBody = `
🎮 SILICON VALLEY CHESS CLUB - New Contact Form Submission 🎮

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || 'Not provided'} 
🎯 Service Interested: ${formData.service || 'Not specified'}
💬 Message: ${formData.message}

---
📅 Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
🌐 From Silicon Valley Chess Club Website
    `;
    
    const subject = `Chess Club Inquiry - ${formData.name} (${formData.service || 'General'})`;
    const mailtoLink = `mailto:siliconvalleychessclub@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      setIsSubmitting(false);
    }, 1500);
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
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/images/logo.jpeg" alt="Silicon Valley Chess Club" className="logo-image" />
            <div className="logo-text">
              <span>SILICON VALLEY CHESS CLUB</span>
              <span></span>
            </div>
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
                      {/* ✅ NAVIGATES TO CONTACT + AUTO-FILLS SERVICE */}
                      <button 
                        className="service-button"
                        onClick={() => {
                          // 1. Navigate to Contact section
                          setActiveSection('contact');
                          
                          // 2. Auto-fill the service in form
                          setFormData(prev => ({ 
                            ...prev, 
                            service: service.title 
                          }));
                          
                          // 3. Smooth scroll to top
                          setTimeout(() => {
                            window.scrollTo({ 
                              top: 0, 
                              behavior: 'smooth' 
                            });
                          }, 100);
                        }}
                      >
                        Enroll Now
                      </button>
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
              <h3>Venkata Giri Acharya</h3>
              <p className="coach-title">International Grandmaster | FIDE Master Trainer</p>
              <ul className="coach-achievements">
                <li>3x National Champion</li>
                <li>World Championship Quarterfinalist</li>
                <li>15+ Years Coaching Experience</li>
              </ul>
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

      {/* Contact Section - UPDATED FORM */}
      <section id="contact" className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <span>📧</span>
                <span>siliconvalleychessclub@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>📱</span>
                <span>+1 6509330233</span>
              </div>
              <div className="contact-item">
                <span>🔹</span>
                <span>Silicon Valley, CA</span>
              </div>
            </div>
            
            {/* ENHANCED CONTACT FORM WITH SERVICE SELECTION */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
    type="text" 
    name="name"
    placeholder="Your Name *" 
    required 
    value={formData.name}
    onChange={handleChange}
  />
  <input 
    type="tel" 
    name="phone"  
    placeholder="Your Phone (Optional)"
    value={formData.phone}
    onChange={handleChange}
  />
  <input 
    type="email" 
    name="email"
    placeholder="Your Email *" 
    required 
    value={formData.email}
    onChange={handleChange}
  />
  
  <div className="form-group">
    <label className="form-label">What are you interested in? *</label>
    <select name="service" required value={formData.service} onChange={handleChange} className="form-select">
      <option value="">Select a program...</option>
      <option value="Beginner Classes">♟️ Beginner Classes (8 weeks - $99)</option>
      <option value="Advanced Training">♛ Advanced Training (12 weeks - $199)</option>
      <option value="Tournament Prep">🏆 Tournament Prep (6 weeks - $149)</option>
    </select>
  </div>

  <textarea 
    name="message"
    placeholder="Tell us more about your chess goals..." 
    rows="5" 
    required 
    value={formData.message}
    onChange={handleChange}
  />
  
  <button type="submit" className={`submit-button ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
    {isSubmitting ? '📤 Sending...' : '📧 Send Email'}
  </button>
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
