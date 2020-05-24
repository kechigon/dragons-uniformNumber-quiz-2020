'use strict';
const pug = require('pug');
const util = require('./handler-util');
const pData = require('./player-data')

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      let players = [];
      players.push(choosePlayer());
      players.push(choosePlayer(players[0]));
      players.push(choosePlayer(players[0], players[1]));
      const subjectPlayer = Math.floor(Math.random() * players.length);
      res.end(pug.renderFile('./views/quiz.pug', {
        subjectPlayer: subjectPlayer + 1,
        uniformNumber: players[subjectPlayer].number,
        player1: players[0].name,
        player2: players[1].name,
        player3: players[2].name,
      }));
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  }
}

function choosePlayer(player1, player2) {
  let player = pData.players[Math.floor(Math.random() * pData.players.length)];
  return player !== player1 && player !== player2 ? player : choosePlayer();
}

module.exports = {
  handle
};