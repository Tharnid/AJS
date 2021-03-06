var express = require('express'),
    mongoose = require('mongoose');

// db connection

var db = mongoose.connect('mongodb://localhost/bookAPI');

// Model Calls

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 7411;

// Routes

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res) {
        // var responseJson = { hello: "This is my API bitch!!!"};

        // Adding a query in here
        var query = req.query;

        //var query = {};
        //
        //if(req.query.genre) {
        //    query.genre = req.query.genre;
        //}

        Book.find(query, function(err, books){
            if(err)
                // console.log(err)
                res.status(500).send(err);
            else
                res.json(books);
        });

        // res.json(responseJson);
    });

//bookRouter.route('/Books/:bookId')
//    .get(function(req, res) {
//
//        Book.findById(req.params.bookId, function(err, book) {
//            if (err)
//                res.status(500).send(err);
//            else
//                res.json(book);
//        });
//
//    });

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