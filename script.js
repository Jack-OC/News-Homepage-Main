const menuBtn = document.querySelector(".menu-btn[aria-expanded]");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const navItems = document.querySelector(".nav-items")
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !expanded);
  navItems.classList.toggle("sidebar");
}