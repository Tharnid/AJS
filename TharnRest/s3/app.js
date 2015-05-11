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

bookRouter = require('./Routes/bookRoutes')(Book); // () executes that code

// basically now I am injecting the book

app.use('/api', bookRouter);

app.get('/', function(res, req) {
    req.send('Welcome to my API!!!');
});

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});