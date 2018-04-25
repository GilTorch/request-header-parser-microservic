var express = require('express');
var router = express.Router();
var net=require('net')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { hostname:req.headers.host });
});

router.get('/whoami', function(req, res, next) {

  var languageRegex=/^(\S)*,(\S)*$/;
  var softwareRegex=//;

  res.json({ipadress: req.header('x-forwarded-for') || req.connection.remoteAddress,language:req.headers['accept-language'],sofware:req.headers['user-agent']})
});



module.exports = router;
