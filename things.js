//use express.Router
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on things' + req.params.name);
});
router.post('/', function(req, res){
    res.send('POST  route on things');
});

//export this router to use in index.js
module.exports = router;