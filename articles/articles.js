class article extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    get url() {
        return this.getAttribute('url');
    }

    get alt() {
        return this.getAttribute('alt');
    }

    get img() {
        return this.getAttribute('img');
    }

    get noLink() {
        this.getAttribute('no-link');
    }

    render() {
        if (this.url) {
            this.shadow.innerHTML = this.renderWithLink();
        } else if (!this.url) {
            this.shadow.innerHTML = this.renderNoLink();
        }
    }

    renderNoLink() {
        return `
            <style> 
                .front-page-article {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto-fit;
                    text-align: center;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    height: auto;
                }
            
                .front-page-article > h2 {
                    grid-column: span 2;
                    text-align: center;
                    font-weight: bold;
                }
                
                .front-page-article > p {
                    width: 50%;
                    padding: 10px;
                    place-self: center;
                    line-height: 2;
                }
                
                .front-page-article > div {
                    place-self: center;
                    overflow: hidden;
                    height: 60%;
                    width: auto;
                    border-radius: 25px;
                    position: relative;
                }
                
                .front-page-article > div > img {
                    place-self: center;
                    max-height: 800px;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                    overflow: hidden;
                    transition: filter 0.25s linear, transform 0.25s linear;
                    scale: 1;
                }
            </style>

            <div class="front-page-article">
                <p>${this.textContent}</p>
                <div>
                    <img src="${this.img}" alt="${this.alt}">
                </div>
            </div>
        `;
    }

    renderWithLink() {
        return `
            <style> 
                .front-page-article {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto-fit;
                    text-align: center;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    height: auto;
                }
            
                .front-page-article > h2 {
                    grid-column: span 2;
                    text-align: center;
                    font-weight: bold;
                }
                
                .front-page-article > p {
                    width: 50%;
                    padding: 10px;
                    place-self: center;
                    line-height: 2;
                }
                
                .front-page-article > div {
                    place-self: center;
                    overflow: hidden;
                    height: 60%;
                    width: auto;
                    border-radius: 25px;
                    position: relative;
                }
                
                .front-page-article > div:not(.no-link) > a {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.8);
                    transform-origin: center;
                    color: white;
                    text-decoration: none;
                    border-radius: 10px;
                    background: black;
                    padding: 20px;
                    z-index: 1000;
                    opacity: 0;
                    transition: transform 0.25s linear, opacity 0.25s linear;
                }
                
                .front-page-article > div > img {
                    place-self: center;
                    max-height: 800px;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                    overflow: hidden;
                    transition: filter 0.25s linear, transform 0.25s linear;
                    scale: 1;
                }
                
                .front-page-article > div:not(.no-link):hover > img {
                    filter: grayscale(100%) blur(1px);
                    /* zoom the image in without making it bigger */
                    transform: scale(1.2);
                }
                
                .front-page-article > div:not(.no-link):hover > a {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
            </style>

            <div class="front-page-article">
                <p>${this.textContent}</p>
                <div>
                    <a href="${this.url}">Read More</a>
                    <img src="${this.img}" alt="${this.alt}">
                </div>
            </div>
        `;
    }
}

customElements.define('article-card', article);

let navbar = document.getElementById('navbar');
let articleContainer = document.getElementById('article-container');

articleContainer.style.marginTop = (navbar.offsetHeight + 1) + 'px';