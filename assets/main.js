// Sticky navbar on scroll
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

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

    document.querySelectorAll('.page-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.checked = false;
        const menu = document.querySelector('.navbar-menu');
        if (menu) {
          menu.classList.remove('active');
        }
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.28 });

    revealItems.forEach(function(item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function(item) {
      item.classList.add('is-visible');
    });
  }
});
