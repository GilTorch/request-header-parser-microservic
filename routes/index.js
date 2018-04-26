var express = require('express');
var router = express.Router();
var net=require('net')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { hostname:req.headers.host });
});

router.get('/whoami', function(req, res, next) {

  var language=req.headers['accept-language'].replace(/([\w]{2}-[\w]{2})(\S)*/,"$1");
  var software=req.headers['user-agent'].replace(/\S*\s\(([^\)]+)\)(.)*/i,"$1");

  res.json({ipadress: req.connection.remoteAddress,language:language,software:software});
});



module.exports = router;
