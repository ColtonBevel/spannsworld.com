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

    get title() {
        return this.getAttribute('title');
    }

    get credit() {
        return this.getAttribute('credit');
    }

    renderImage() {
        if (this.img) {
            return `<img src="${this.img}" alt="${this.alt}">`;
        } else {
            return '';
        }
    }

    renderLink() {
        if (this.url) {
            return `<a href="${this.url}" target="_blank">Read More</a>`;
        } else {
            return '';
        }
    }

    renderTitle() {
        if (this.title) {
            return `<h1>${this.title}</h1>`;
        } else {
            return '';
        }
    }

    renderContent() {
        if (this.textContent) {
            return `<p>${this.textContent}</p>`;
        } else {
            return '';
        }
    }

    renderCredit() {
        if (this.credit) {
            return `<p class="credit">${this.credit}</p>`;
        } else {
            return '';
        }
    }

    render() {
        this.shadow.innerHTML = `
            <div class="article-card">
                ${this.renderImage()}
                ${this.renderCredit()}
                ${this.renderTitle()}
                ${this.renderContent()}
                ${this.renderLink()}
            </div>
            
            <style>
                .article-card {
                    display: inline-flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 20px;
                    border-radius: 10px;
                    background: rgb(50,50,50);
                    color: white;
                    text-align: left;
                    box-sizing: border-box;
                    margin-bottom: 20px;
                    break-inside: avoid;
                    gap: 20px;
                    position: relative;
                    border: solid 2px black;
                }
            
                .article-card::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: black;
                    border-radius: 10px;
                    z-index: -1;
                    transition: all 0.25s ease;
                }
            
                .article-card:hover::before {
                    top: 10px;
                    left: -10px;
                }
            
                .article-card > h1 {
                    font-weight: bold;
                    margin: 0;
                }
            
                .article-card > p:not(.credit) {
                    font-size: 1em;
                    margin: 0;
                }
        
                .credit {
                    font-size: 0.8em;
                    font-weight: bold;
                    margin: 0;
                    color: white;
                }
            
                .article-card > a {
                    color: inherit;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 1.2em;
                    width: min-content;
                    align-self: flex-end;
                    white-space: nowrap;
                    position: relative;
                }
            
                .article-card > a::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 2px;
                    background: white;
                    transition: transform 0.25s ease;
                    transform: scaleX(0);
                    transform-origin: right;
                }
            
                .article-card > a:hover::after {
                    transform-origin: left;
                    transform: scaleX(1);
                }
            
                .article-card > img {
                    width: 100%;
                    border-radius: 10px;
                }
            </style>
        `;
    }
}

customElements.define('article-card', article);

let navbar = document.getElementById('navbar');
let articleContainer = document.getElementById('article-container');

articleContainer.style.marginTop = (navbar.offsetHeight + 1) + 'px';