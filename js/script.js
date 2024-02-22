function highlightNavLink(element) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active-nav-link'));

  element.classList.add('active-nav-link');
}

function setLanguage(language) {
  document.querySelector('.selected-language').innerText = language;
}

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in-animation');
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
    }
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
