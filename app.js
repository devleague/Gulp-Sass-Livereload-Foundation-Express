var express = require('express');
var app = express();
var livereload = require('connect-livereload');
var livereloadport = 35729;

app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));

// Add live reload
app.use(livereload({port: livereloadport}));

app.get('/', function (req, res) {
  res.render('index', { template_engine : "Jade" });
});

var server = app.listen( (process.env.PORT || 3000), function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Gulp Sass Livereload Foundation Express app listening at http://%s:%s', host, port)

});