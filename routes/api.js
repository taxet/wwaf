var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/success', function(req, res, next) {
  res.json({success:'ok'});
});

router.get('/car/:id', function(req, res, next) {
  var car={
    'id': req.params.id,
    'imgs': [],
    'desc': "This is description."
  };
  res.json(car);
});

module.exports = router;
