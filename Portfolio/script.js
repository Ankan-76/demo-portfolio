const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only apply smooth scroll to internal anchor links
    if (href && href.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
  });
});
