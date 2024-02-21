async function fetchArticles() {
    const response = await fetch('./articles.json');
    const data = await response.json();
    return data;
}


document.addEventListener('DOMContentLoaded', async function() {
    const articles = await fetchArticles();


});