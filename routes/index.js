var express = require('express');
var router = express.Router();
var user = require('../database/db').user;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login', {title: 'login'});
});

router.post('/ucenter', function (req, res) {
    var query = {name: req.body.name, password: req.body.password};
    (function () {
        user.count(query, function (err, doc) {
            console.log(11111111111,doc)
          if (doc == 1){
            console.log(query.name+ 'success' + new Date());
            res.render('ucenter', {title: 'ucenter'});
          } else {
              console.log(query.name + ": 登陆失败 " + new Date());
              res.redirect('/');
          }
        })
    })(query)
})

module.exports = router;
