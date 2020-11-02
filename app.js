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

// intro section fade om animation

const image = document.querySelector(".intro__img");
const title = document.querySelector(".intro__title");
const para = document.querySelector(".intro__para");
const socials = document.querySelector(".social-list1");

const t1 = new TimelineMax();


t1.fromTo(image, 1, { opacity: "0.0" } , { opacity: "1", ease: Power2.easeInOut })
  .fromTo(title, 1, { opacity: "0.0" }, { opacity:"1", ease: Power2.easeInOut }, "-=0.5")
  .fromTo(para, 1.1, { opacity: "0.0" }, { opacity:"1", ease: Power2.easeInOut }, "-=0.75")
  .fromTo(socials, 1.1, { opacity: "0.0" }, { opacity:"1", ease: Power2.easeInOut },"-=1.1");

