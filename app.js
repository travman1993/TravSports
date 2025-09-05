// Trav Sports Photography Website JavaScript

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  });
  
  // Gallery Tab Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const galleryPanels = document.querySelectorAll('.gallery-panel');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        galleryPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        this.classList.add('active');
        const targetPanel = document.getElementById(targetTab);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  });
  
  // Smooth scrolling for anchor links
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
  
  // Add hover effects to gallery images
  document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    
    galleryImages.forEach(img => {
      img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
      });
      
      img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });
  
  // Add loading animation for images
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('load', function() {
        this.style.opacity = '1';
        this.style.transition = 'opacity 0.3s ease';
      });
      
      // Set initial opacity
      img.style.opacity = '0';
      
      // If image is already cached and loaded
      if (img.complete) {
        img.style.opacity = '1';
      }
    });
  });
  
  // Add scroll-triggered animations
  document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
  
    // Observe sections for animation
    const sections = document.querySelectorAll('section, .package-card, .testimonial-card');
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  // Add CSS for scroll animations
  document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
      section, .package-card, .testimonial-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      section.animate-in, .package-card.animate-in, .testimonial-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      .hero-section {
        opacity: 1;
        transform: none;
      }
    `;
    document.head.appendChild(style);
  });
  
  // Contact form handling (if a form is added later)
  function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Create mailto link
        const subject = encodeURIComponent('Photography Inquiry from ' + name);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:travsportsphoto@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
      });
    }
  }
  
  // Initialize contact form handling
  document.addEventListener('DOMContentLoaded', handleContactForm);
  
  // Add click tracking for analytics (placeholder for future use)
  function trackClick(eventName, elementType) {
    // Placeholder for analytics tracking
    console.log(`Track: ${eventName} - ${elementType}`);
    
    // Example: Google Analytics event tracking
    // gtag('event', eventName, {
    //   'event_category': 'engagement',
    //   'event_label': elementType
    // });
  }
  
  // Add click tracking to important buttons
  document.addEventListener('DOMContentLoaded', function() {
    // Track booking button clicks
    const bookingButtons = document.querySelectorAll('a[href*="mailto:travsportsphoto"]');
    bookingButtons.forEach(button => {
      button.addEventListener('click', function() {
        trackClick('booking_click', this.textContent.trim());
      });
    });
    
    // Track social media clicks
    const socialButtons = document.querySelectorAll('.social-icon');
    socialButtons.forEach(button => {
      button.addEventListener('click', function() {
        trackClick('social_click', this.getAttribute('href'));
      });
    });
    
    // Track gallery tab clicks
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        trackClick('gallery_tab_click', this.getAttribute('data-tab'));
      });
    });
  });
  
  // Mobile menu functionality (if needed later)
  function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
      });
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
          mobileMenu.classList.remove('active');
          mobileMenuButton.classList.remove('active');
        }
      });
    }
  }
  
  // Initialize mobile menu
  document.addEventListener('DOMContentLoaded', initMobileMenu);
  
  // Performance optimization: Lazy load images
  document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });
      
      const lazyImages = document.querySelectorAll('img.lazy');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  });
  
  // Add error handling for images
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('error', function() {
        // Replace broken images with a placeholder
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+PC9zdmc+';
        this.alt = 'Image not available';
      });
    });
  });
  
  // Console welcome message
  console.log(`
  🏆 Trav Sports Photography
  📧 travsportsphoto@gmail.com
  📸 @travsportsphotography
  
  Capturing the hustle — every game!
  `);
  
  // Export functions for potential external use
  window.TravSportsPhoto = {
    trackClick,
    handleContactForm,
    initMobileMenu
  };