const { App } = require('../src/components/app');
const express = require('express') ;
const fs  = require('fs');
const  path  = require('path');
const React  = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router-dom');
const { fetchData } = require('../src/components/post');
const app = express();

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

app.use('*', async (req, res)=> {
    let indexHtml = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {encoding: 'utf-8'});
    
    let componentData = null;

    if( matchPath( req.originalUrl, '/post') ) {
        componentData = await fetchData();
    }


    const appAsString = ReactDOMServer.renderToString(<StaticRouter location={req.originalUrl} context={componentData}><App/></StaticRouter>)

    indexHtml = indexHtml.replace('<div id="app"></div>', `<div id="app">${appAsString}</div>`)

    res.contentType('text/html');
    return res.send(indexHtml);
})


app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});