var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// db connection

var db = mongoose.connect('mongodb://localhost/bookAPI');

// Model Calls

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 7411;

// body parser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


// Routes

var bookRouter = express.Router();

bookRouter.route('/Books')
    .post(function(req, res) {
        var book = new Book(req.body);

        book.save();
        res.status(201).send(book);

        //console.log(book);
        //res.send(book);
    })
    .get(function(req, res) {

        // Adding a query in here
        var query = req.query;

        Book.find(query, function(err, books){
            if(err)
            // console.log(err)
                res.status(500).send(err);
            else
                res.json(books);
        });

        // res.json(responseJson);
    });

bookRouter.route('/Books/:bookId')
    .get(function(req,res){


        Book.findById(req.params.bookId, function(err,book){
            if(err)
                res.status(500).send(err);
            else
                res.json(book);
        });
    });

app.use('/api', bookRouter);

app.get('/', function(res, req) {
    req.send('Welcome to my API!!!');
});

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});