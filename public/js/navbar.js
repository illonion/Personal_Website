const toggleButton = document.querySelector('#nav-icon');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('open');
});