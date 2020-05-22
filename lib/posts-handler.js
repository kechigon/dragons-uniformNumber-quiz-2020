'use strict';
const pug = require('pug');

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.end('hi');
      break;
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        res.end(decoded);
      })
      break;
    default:
      break;
  }
}

module.exports = {
  handle
};