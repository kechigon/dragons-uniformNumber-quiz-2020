'use strict';
const getsHandler = require('./getsts-handler');
const util = require('./handler-util');

function route(req, res) {
  if (process.env.DATABASE_URL
    && req.headers['x-forwarded-proto'] === 'http') {
    util.handleNotFound(req, res);
  }
  switch (req.url) {
    case '/gets':
      getsHandler.handle(req, res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};