var articles = [
    { name: 'Cycle', cost: 3000 },
    { name: 'Tv', cost: 2500},
    { name: 'Book', cost: 320},
    { name: 'Phone', cost: 10000},
    { name: 'Laptop', cost: 20000},
    { name: 'Laptop', cost: 30000},
    { name: 'Laptop', cost: 40000},
    { name: 'Board', cost: 500},
    { name: 'Earpods', cost: 1700}
];

//Método filter
var filterArticles = articles.filter
(
    function(article)
    {
        return article.cost <= 500;
    }
);

//Método map
var articlesName = articles.map
(
    function(article)
    {
        return article.name
    }
);

//Método find()
var findArticle = articles.find
(
    function(article)
    {
        return article.name === 'Laptop';
    }
);

//Método foreach()
articles.forEach
(
    function(article)
    {
        console.log(article.name);
    }
);

//Método some()
var cheapArticles = articles.some
(
    function(article)
    {
        return article.cost <= 700;
    }
)

//Método splice()
articles.splice(2,1);

//Método splice() para editar
articles.splice(1,1, 'Television')
