document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', () => {
      const details = title.nextElementSibling;
      if (details.style.display === 'block') {
        details.style.display = 'none'; // Collapse if already open
      } else {
        details.style.display = 'block'; // Expand if closed
      }
    });
  });
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50; // Adjust for navbar height
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  