const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const form = document.getElementById('estimate');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('New Website Estimate Request - Blueprint Exteriors');
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\n` +
      `Phone: ${data.get('phone') || ''}\n` +
      `Email: ${data.get('email') || ''}\n` +
      `Project Type: ${data.get('project_type') || ''}\n\n` +
      `Project Details:\n${data.get('message') || ''}`
    );
    window.location.href = `mailto:blueprintexteriorsllc@gmail.com?subject=${subject}&body=${body}`;
  });
}
