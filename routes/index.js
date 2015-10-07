var express = require('express');
var router = express.Router();
var path = require('path');
var assignment = require('../models/assignments');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
