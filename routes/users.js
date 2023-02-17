var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This section must show ');
});

router.get('/details', function(req, res, next) {
  res.send('The site can show some users details in order to expose');
});

module.exports = router;
