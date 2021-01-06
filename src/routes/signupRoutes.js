const express = require('express');
const signupRouter = express.Router();
var bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

function router(nav1,nav2){ 
    var users = [];
    signupRouter.use(bodyParser.urlencoded({ extended: false }));

    signupRouter.get('/', function(req,res){
        nav=nav2;
        res.render("signup", 
        {
            nav,
            title: 'Library App'
        });
    });

    signupRouter.post('/', [check('name','Name must have atleast 5 alphabets').isAlpha().isLength({min:5}),
        check('email','Enter vaild email').isEmail()],    check('pwd','Min 6 characters').isLength({ min: 6})
        , function(req,res){
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                nav=nav2;
                res.render("signup", 
                {
                    nav,
                    title: 'Library App',
                    error: errors.mapped()
                });
            }
            else{
                var user = {name : req.body.name, email : req.body.email, pwd : req.body.pwd};
                users.push(user);
                nav=nav1;
                
                res.render("home", 
                {
                    nav,
                    title: 'Library App'
                });
            }
    });
    module.exports = users;

    return signupRouter;
}

module.exports = router;