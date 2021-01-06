const express = require('express');
const authorsRouter = express.Router();
var bodyParser = require('body-parser'); 

function router(nav){
    var authors = [
        {
            name : 'Joseph Barbera',
            nationality : 'American',
            fambook : 'Tom and Jerry',
            img : "JBarbera.jpg"
        },
        {
            name : 'J K Rowling',
            nationality : 'British',
            fambook : 'Harry Potter',
            img : "J_K_Rowling.jpg"
        },
        {
            name : 'Stephenie Meyer',
            nationality : 'American',
            fambook : 'Twilight',
            img : "Stephenie_Meyer.jpg"
        }
    ]

    authorsRouter.use(bodyParser.urlencoded({ extended: true })); 
    
    authorsRouter.get('/', function(req,res){
        res.render("authors", 
        {
            nav,
            title: 'Library App',
            authors
        });
    });
    
    authorsRouter.get('/:id', function(req,res){
        const id = req.params.id;
        res.render('author', {
            nav,
            title: 'Library App',
            author : authors[id]
        });
    });

    authorsRouter.post('/', function(req,res){
        var author = { name : req.body.name, nationality : req.body.nationality, fambook : req.body.fambook, img : req.body.img};
        authors.push(author);
        res.render("authors", 
        {
            nav,
            title: 'Library App',
            authors
        });
    })

    return authorsRouter;
}

module.exports = router;