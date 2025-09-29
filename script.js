
document.querySelector('.mobile-menu').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
  

  const icon = this.querySelector('i');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {

      const navLinks = document.querySelector('.nav-links');
      const mobileMenuIcon = document.querySelector('.mobile-menu i');
      
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
      }
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.game-card, .result-card, .team-card, .method-card, .finding-item').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});


const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.bar');
      bars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 300);
      });
    }
  });
}, { threshold: 0.5 });


document.querySelectorAll('.chart-container').forEach(chart => {
  chartObserver.observe(chart);
});

document.querySelectorAll('a[href$=relatorio".pdf"]').forEach(link => {
  link.addEventListener('click', function() {

    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando PDF...';

    setTimeout(() => {
      this.innerHTML = originalText;
    }, 1500);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const year = new Date().getFullYear();
  const footerYear = document.querySelector('.footer-bottom p');
  if (footerYear) {
    footerYear.innerHTML = `© ${year}/${year+1} PIBIC - UEPB. Todos os direitos reservados.`;
  }
});
