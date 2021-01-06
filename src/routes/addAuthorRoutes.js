const express = require('express');
const addAuthorRouter = express.Router();

function router(nav){
    addAuthorRouter.get('/', function(req,res){
        res.render("addauthor", 
        {
            nav,
            title: 'Library App'
        }); 
    });

    return addAuthorRouter;
}

module.exports = router;