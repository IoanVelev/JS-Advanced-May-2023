function getArticleGenerator(articles) {
    return () => {
        if (articles.length > 0) {
            let text = articles.shift();
            let currentArticle = document.createElement('article');
            let container = document.getElementById('content');
            currentArticle.innerText = text;
            container.appendChild(currentArticle);
        }
    }
}
