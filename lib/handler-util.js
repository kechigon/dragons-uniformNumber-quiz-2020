'use strict';
const pug = require('pug');
const fs = require('fs');

function handleHme(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(pug.renderFile('./views/home.pug'));
}

function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon'
  });
  const favicon = fs.readFileSync('./favicon.ico');
  res.end(favicon);
}

module.exports = {
  handleHme,
  handleFavicon
};