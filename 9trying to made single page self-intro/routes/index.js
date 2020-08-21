var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/contact',function(req,res,next){
  name = req.body.name;
  message = req.body.message;
  res.render('message');
});


module.exports = router;
