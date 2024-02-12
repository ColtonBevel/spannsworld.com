document.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 1) {
        navbar.setAttribute('data-scrolled', '');
    } else {
        navbar.removeAttribute('data-scrolled');
    }
});

function scrollToBio() {
    document.getElementById('bio').scrollIntoView({ behavior: 'smooth' });
}