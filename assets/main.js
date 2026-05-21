// Sticky navbar on scroll
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Mobile menu toggle
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('change', function() {
      const menu = document.querySelector('.navbar-menu');
      if (this.checked) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    });
  }
});
