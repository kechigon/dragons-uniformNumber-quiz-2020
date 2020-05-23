'use strict';
const fs = require('fs');

function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon'
  });
  const favicon = fs.readFileSync('./favicon.ico');
  res.end(favicon);
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のリクエストです');
}

module.exports = {
  handleFavicon,
  handleNotFound,
  handleBadRequest
};