// Header nav transition
const nav = document.querySelector('#header nav ');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
   element.addEventListener('click', function() {
      nav.classList.toggle('show');
   })
}


// Header links
const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
   link.addEventListener('click', function() {
      nav.classList.remove('show');
   })
}

// Header scroll

function changeHeaderWhenScroll() {
   const header = document.querySelector('#header');
   const navHeight = header.offsetHeight;

   if(window.scrollY >= navHeight) {
      header.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
   }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   spaceBetween: 1,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   mousewheel: false,
   keyboard: true,
 });

/* ScrollReveal */
const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true,
})

scrollReveal.reveal(
   `#home .image, #home .text, 
   #about .image, #about .text, 
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
   `,
   { interval: 100 }
)

/* Back to Top Button */

function backToTop() {
   const backToTopButton = document.querySelector('.back-to-top');
   
   if(window.scrollY >= 560) {
      backToTopButton.classList.add('show');
   } else {
      backToTopButton.classList.remove('show');
   }
}


window.addEventListener('scroll', function() {
   changeHeaderWhenScroll();
   backToTop();
})