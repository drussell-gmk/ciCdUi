var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  new Promise( (resolve, reject) => {
    request( 'http:\\\\localhost:8080', (error, resposne, body) => {
      if (error) {
        reject(error);
      }
      resolve(body);
    })    
  }).then( (data) => {
    res.render('index', { data: data });
  });
});

module.exports = router;
