'use strict';
const pug = require('pug');
const util = require('./handler-util');

function handle(req, res) {
  switch (req.method) {
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        let team = decoded.split('team=')[1];
        team = cnvertToKanji(team);
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(pug.renderFile('./views/quiz.pug', {
          team: team
        }));
      })
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  }
}

function cnvertToKanji(team) {
  switch (team) {
    case 'gomiuri':
      team = '読売ジャイアンツ';
      break;
    case 'baystars':
      team = '横浜DeNAベイスターズ';
      break;
    case 'tigers':
      team = '阪神タイガース';
      break;
    case 'carp':
      team = '広島東洋カープ';
      break;
    case 'dragons':
      team = '中日ドラゴンズ';
      break;
    case 'swallows':
      team = '東京ヤクルトスワローズ';
      break;
    case 'lions':
      team = '埼玉西武ライオンズ';
      break;
    case 'hawks':
      team = '福岡ソフトバンクホークス';
      break;
    case 'eagles':
      team = '東北楽天ゴールデンイーグルス';
      break;
    case 'marines':
      team = '千葉ロッテマリーンズ';
      break;
    case 'fighters':
      team = '北海道日本ハムファイターズ';
      break;
    case 'buffaloes':
      team = 'オリックス・バファローズ';
      break;
    default:
      break;
  }
  return team;
}

module.exports = {
  handle
};