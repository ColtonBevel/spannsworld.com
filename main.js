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

// https://allongeorgia.com/chattooga-local-news/spann-cordle-recognized-at-historical-society-story-gaining-local-and-international-attention/
// https://allongeorgia.com/chattooga-lifestyle/cordle-and-smith-set-artificial-intelligence-narrative-straight-on-prejudice-and-the-disabled/?fbclid=IwAR1Zi5pJg5InALCuzkqpxZAgjdAtCzXoNcVid-CfscoPrPnBUQBphGecYwg

