document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  if (!links.length) return;

  const path = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    try {
      const href = link.getAttribute('href');
      if (!href) return;
      const target = href.split('/').pop();
      // index handling: homepage may be '' or 'index.html'
      const isActive = (path === '' && (target === '' || target === 'index.html'))
        || path === target
        || (path === 'index.html' && target === '');
      if (isActive) link.classList.add('active');
      else link.classList.remove('active');
    } catch (_) {}
  });
});


