'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/home':
      util.handleHme(req, res);
    break;
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res);
      break;
    default:
      break;
  }
}

module.exports = {
  route
};