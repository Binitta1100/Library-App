const express = require('express');
const booksRouter = express.Router();
var bodyParser = require('body-parser'); 

function router(nav){
    var books = [
        {
            title : 'Tom and Jerry',
            author : 'Joseph Barbera',
            genre : 'Cartoon',
            img : "tom.jpg"
        },
        {
            title : 'Harry Potter',
            author : 'J K Rowling',
            genre : 'Fantasy',
            img : "harry.jpg"
        },
        {
            title : 'Twilight',
            author : 'Stephenie Meyer',
            genre : 'Fantasy',
            img : "twilight.jpg"
        }
    ]
    
    booksRouter.use(bodyParser.urlencoded({ extended: true }));   

    booksRouter.get('/', function(req,res){
        res.render("books", 
        {
            nav,
            title: 'Library App',
            books
        });
    });

    booksRouter.post('/', function(req,res){
        var book = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        books.push(book);
        res.render("books", 
        {
            nav,
            title: 'Library App',
            books
        });
    });
    
    booksRouter.get('/:id', function(req,res){
        const id = req.params.id;
        res.render('book', {
            nav,
            title: 'Library App',
            book : books[id]
        });
    });

    return booksRouter;
}

module.exports = router;