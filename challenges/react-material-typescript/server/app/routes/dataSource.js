var express = require('express');
var router = express.Router();

let mockDataSources = {
  sources: [
      {name: 'csv'},
      {name: 'xls'},
      {name: 'doc'},
      {name: 'xlsx'},
      {name: 'json'},
      {name: 'xml'},
      {name: 'mysql'}
  ]
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(mockDataSources));
});

module.exports = router;
