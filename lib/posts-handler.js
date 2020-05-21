'use strict';
const pug = require('pug');

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.end('hi');
      break;
    case 'POST':
      // TODO POSTの処理
      break;
    default:
      break;
  }
}

function handleHme(req, res){
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'  
  });
  res.end(pug.renderFile('./views/home.pug'));
}

module.exports = {
  handle
};