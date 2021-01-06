const express = require('express');
const app = new express();
const nav1 = [
    {
        link: '/books', name: 'Books'
    },
    {
        link: '/authors', name: 'Authors'
    },
    {
        link: '/addbook', name: 'Add Book'
    },
    {
        link: '/addauthor', name: 'Add Author'
    },
    {
        link: '/', name: 'Log Out'
    }
];
const nav2 = [
    {
        link: '/signup', name: 'Sign Up'
    },
    {
        link: '/login', name: 'Log In'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav1);
const authorsRouter = require('./src/routes/authorRoutes')(nav1);
const addBookRouter = require('./src/routes/addBookRoutes')(nav1);
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav1);
const signupRouter = require('./src/routes/signupRoutes')(nav1,nav2);
const loginRouter = require('./src/routes/loginRoutes')(nav2);
const homeRouter = require('./src/routes/homeRoutes')(nav1);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/addbook', addBookRouter);
app.use('/addauthor', addAuthorRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);

app.get('/', function(req,res){
    res.render("index", 
    {
        nav2,
        title: 'Library App'
    });
});

app.listen(5050);