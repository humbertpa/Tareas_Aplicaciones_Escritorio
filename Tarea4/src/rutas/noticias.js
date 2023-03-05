const router = require('express').Router();
const path = require('path');
const fetch = require('node-fetch');


require('dotenv').config();
const api_key = process.env.NEWSAPI_KEY;

router.get('', async (req, res) => {
    //const url = 'https://newsapi.org/v2/everything?q='+req.body+ api_key;

    const url = 'https://newsapi.org/v2/everything?q=baking&apiKey=' + api_key;
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    //console.log(Object.keys(json));
    //console.log(json); //archivo completo
    //console.log(json.articles); //solo los artículos
    console.log(Object.keys(json.articles[0]));
    let contenido = json.articles.map((element) => {

        let html = `
        <div class="card">
            <img src="${element.urlToImage}" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${element.title}</b></h4> 
                    <p>${element.description}</p> 
                    <p>${element.publishedAt}</p> 
                    <a href="${element.url}">A través de ${element.source.name}</a>
                </div>
            </div>
            `;
        return (html);
    }).join(``);

    res.render('noticias', { layout: '../noticias', datos: contenido });

});

module.exports = router;