var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Schemas


// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

mongoose.connect('mongodb://heroku_pk3s7hwl:m47a5pmislhugh24b10vgj9ptd@ds049456.mlab.com:49456/heroku_pk3s7hwl');

var db = mongoose.connection;

db.on('error', function(err){
  console.log("Mongoose error", err);
});

db.once('open', function(){
  console.log('Mongoose connection successful! ');
})

// use Morgan and bodyparser with the app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

//Routes 
require('./app/routing/routes.js')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});