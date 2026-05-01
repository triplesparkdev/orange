// ===== Scroll Animations (Intersection Observer) =====
document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll('.anim-fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  animElements.forEach(el => observer.observe(el));

  // ===== Mobile Hamburger Menu =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  // ===== Header scroll effect =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // ===== Reviews Carousel (simple scroll) =====
  const carousel = document.getElementById('reviewsCarousel');
  const prevBtn = document.getElementById('revPrev');
  const nextBtn = document.getElementById('revNext');
  if (carousel && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 340, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }

  // ===== Smooth parallax for floating elements =====
  const floatEmoji = document.querySelector('.float-emoji-popup');
  window.addEventListener('scroll', () => {
    if (floatEmoji) {
      const scrolled = window.pageYOffset;
      floatEmoji.style.transform = `translateX(-50%) translateY(${scrolled * 0.05}px)`;
    }
  });

  // ===== Search bar focus effect =====
  const searchInput = document.getElementById('searchInput');
  const searchBar = document.querySelector('.search-bar');
  if (searchInput && searchBar) {
    searchInput.addEventListener('focus', () => {
      searchBar.style.boxShadow = '0 8px 50px rgba(255,107,0,.3)';
      searchBar.style.transform = 'scale(1.02)';
    });
    searchInput.addEventListener('blur', () => {
      searchBar.style.boxShadow = '0 8px 40px rgba(0,0,0,.25)';
      searchBar.style.transform = 'scale(1)';
    });
  }
});
