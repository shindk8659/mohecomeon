var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next){
        res.render('mapViewTest');
});

module.exports = router;
