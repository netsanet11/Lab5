var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require("fs"),
    json;
//var config = require('/inventors.json');

/* GET users listing. */
router.get('/', function(req, res, next) {   
       json = getConfig('/inventors.json');   
    res.render('inventors', { title: 'Inventors', inventors: json });
       console.log(json);
});


function readJsonFileSync(filepath, encoding){

    console.log(filepath);
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}
module.exports = router;