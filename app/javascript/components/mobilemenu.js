document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  const menuToggle = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (event) => {
      console.log('Menu button clicked');
      mobileMenu.classList.toggle('menu-open');
    });
  } else {
    console.log('The elements were not found.');
  }
});
