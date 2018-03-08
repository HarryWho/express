
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/index2', function(req, res, next) {
  res.redirect('http://localhost:80/index2.html');
});

module.exports = router;