// Smooth fade-in animations
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact form mailto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let mailtoLink = `mailto:pranalibamne28@gmail.com?subject=Portfolio Contact from ${name}&body=${message} (Reply to: ${email})`;
  window.location.href = mailtoLink;
});
