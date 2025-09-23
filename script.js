// Controla o comportamento do menu durante o scroll
let lastScrollTop = 0;
const header = document.getElementById('header');
const scrollThreshold = 100; // Quantidade de scroll necessária para esconder/mostrar

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    // Scroll para baixo - esconde o header
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scroll para cima - mostra o header
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});

// Adiciona smooth scrolling para os links do menu
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajusta para a altura do header fixo
        behavior: 'smooth'
      });
    }
  });
});