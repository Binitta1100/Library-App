const express = require('express');
const homeRouter = express.Router();
var bodyParser = require('body-parser'); 
// const { check, validationResult } = require('express-validator');

function router(nav){
    var users = []
    homeRouter.use(bodyParser.urlencoded({ extended: true }));   

    homeRouter.get('/', function(req,res){
        res.render("home", 
        {
            nav,
            title: 'Library App'
        });
    });
    // 
    

    return homeRouter;
}

module.exports = router;