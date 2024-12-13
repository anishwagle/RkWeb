// JavaScript to handle scrolling effect for navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');  // or '#NavBar' if using ID
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Bootstrap carousel
var myCarousel = document.querySelector('#universitiesCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,  // Carousel moves every 3 seconds
    pause: false     // Keeps sliding even when hovered
});

// Sticky navbar functionality
const navbar = document.querySelector('#NavBar');  // Using ID for sticky navbar
let top = navbar.offsetTop;

function stickynavbar() {
    if (window.scrollY >= top) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

window.addEventListener('scroll', stickynavbar);
