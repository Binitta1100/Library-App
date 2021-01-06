const express = require('express');
const loginRouter = express.Router();
const users = require('./signupRoutes');
var bodyParser = require('body-parser'); 

function router(nav){ 
    loginRouter.use(bodyParser.urlencoded({ extended: true })); 
    loginRouter.get('/', function(req,res){
        res.render("login", 
        {
            nav,
            title: 'Library App'
        }); 
    });

    loginRouter.post('/', function(req,res){
        var flag=false;
        for(let i=0;i<users.length;i++){
            if(req.body.name == users[i].name && req.body.pwd == users[i].pwd){
                flag=true;
                break;
            }
        }
        if (flag == true){
            res.render("home", 
                {
                    nav,
                    title: 'Library App',
                    msg:''
                });
        }
        else{
            res.render("login", 
                {
                    nav,
                    title: 'Library App',
                    msg: 'Wrong Username or Password'
                });
        }
    });

    return loginRouter;
}

module.exports = router;