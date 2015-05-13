var express = require('express');

var routes = function(Book) {
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
            })
                .put(function(req, res) {
                   Book.findById(req.params.bookId, function(err, book){
                      if(err)
                        res.status(500).send(err);
                       else
                            req.book.title = req.body.title;
                            req.book.author = req.body.author;
                            req.book.genre = req.body.genre;
                            req.book.read = req.body.read;
                            book.save();
                        res.json(book);
                   });
                });
        });
    return bookRouter;
};

module.exports = routes;

// Patch updates part of an item
// Put updates a whole item