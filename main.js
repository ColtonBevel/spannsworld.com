document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("consentGranted") == "true") {
        document.getElementById('userconsent-div').style.display = 'none';
    }
});

document.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 1) {
        navbar.setAttribute('data-scrolled', '');
    } else {
        navbar.removeAttribute('data-scrolled');
    }
});

function acceptCookies() {
    localStorage.setItem("consentGranted", "true");
    function gtag() { dataLayer.push(arguments); }
  
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    });
    
    // Load gtag.js script.
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-K8JG4FQC6D';
  
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(gtagScript,firstScript);

    document.getElementById('userconsent-div').style.display = 'none';
}

function scrollToBio() {
    document.getElementById('bio').scrollIntoView({ behavior: 'smooth' });
}


// https://allongeorgia.com/chattooga-local-news/spann-cordle-recognized-at-historical-society-story-gaining-local-and-international-attention/
// https://allongeorgia.com/chattooga-lifestyle/cordle-and-smith-set-artificial-intelligence-narrative-straight-on-prejudice-and-the-disabled/?fbclid=IwAR1Zi5pJg5InALCuzkqpxZAgjdAtCzXoNcVid-CfscoPrPnBUQBphGecYwg

