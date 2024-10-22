// Get the hamburger menu and nav element
const hamburger = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

// Toggle the "show" class when the hamburger is clicked
hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('show'); // Toggle the visibility of the menu
});
