// nav bar stuff
// navigation bar slide in mobile

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__links li');
  //Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
    }
  });

  //burger animation
  burger.classList.toggle('toggle');
  });
  
}

navSlide();

